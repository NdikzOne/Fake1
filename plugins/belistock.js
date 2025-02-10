const moment = require("moment-timezone");
const fetch = require('node-fetch');
const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
const toqrcode = require("../lib/Ndikz.js");
const { sizeFormatter } = require('human-readable');
const { fetchJson, sleep } = require("../functions.js");
const { merchant, secret, signature, digiuser, digiapi, OpenAikey, nomorKu } = require("../lib/apikey.js");

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function toRupiah(angka) {
    var saldo = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
    return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

let handler = async (m, { conn, args, isGroup, text, usedPrefix: _p, isPrems, command, isROwner }) => {
    const apikeyhost = digiuser; // APIKEY LU OTPWEB.COM
    const sender = m.sender.split('@')[0];
    const admin = `${Math.floor(Math.random() * 500)}`;

    try {
        if (!text) throw 'Masukkan urutan stock yang ingin dibeli.';

        const filePath = './database/linkstock.json';
        let jsonData = { links: [], texts: [], prices: [] };

        // Baca isi file JSON jika sudah ada
        if (fs.existsSync(filePath)) {
            let data = fs.readFileSync(filePath);
            jsonData = JSON.parse(data);
        }

        // Pastikan ada setidaknya satu stock tersedia dalam data JSON
        if (!jsonData.links || jsonData.links.length === 0) {
            throw '*Tidak ada stock yang tersedia* :v.';
        }

        // Validasi argumen
        if (isNaN(text)) {
            throw 'Urutan stock tidak valid.';
        }

        let order = parseInt(text);
        if (order < 1 || order > jsonData.links.length) {
            throw 'Urutan stock tidak valid.';
        }

        // Dapatkan teks, harga, dan link untuk stock yang dipilih
        let stockText = jsonData.texts[order - 1] || '';
        let price = jsonData.prices[order - 1] || '';
        let link = jsonData.links[order - 1] || '';

        // Proses deposit sesuai dengan harga stock
        let depositAmount = parseInt(price); // Harga deposit sesuai dengan harga stock
        let depositInfo = `Pembelian stock #${order}:\n${stockText}\nPrice: ${price}\nLink: ${link}`;

        let jumlah = `${depositAmount}+${admin}`;
        let val = jumlah
            .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π|pi/gi, 'Math.PI')
            .replace(/e/gi, 'Math.E')
            .replace(/\/+/g, '/')
            .replace(/\++/g, '+')
            .replace(/-+/g, '-');

        let result = (new Function('return ' + val))();
        if (!result) throw 'Format deposit salah.';
        let deponya = result;

        let ref = Math.floor(Math.random() * 100000000);
        let h2hkey = apikeyhost;

        var config = {
            method: 'POST',
            url: 'https://atlantich2h.com/deposit/create',
            data: new URLSearchParams(Object.entries({
                api_key: h2hkey,
                reff_id: ref,
                nominal: deponya,
                type: 'ewallet',
                metode: 'qris'
            }))
        };

        axios(config)
            .then(async res => {
                if (res.data.status == false) {
                    conn.reply(m.chat, `*_${res.data.status}_*`); // Biar tau apa yang salah
                }
                conn.reply(m.chat, `*「 DEPOSIT PENDING 」*\n\n_Mohon Tunggu Pesanan Anda Sedang Diproses_`);
                let obj = { id: sender, ref: res.data.data.id, status: res.data.data.status };
                fs.writeFileSync(`./database/datasaldo/${sender}.json`, JSON.stringify(obj));
                let qrnya = await toqrcode(res.data.data.qr_string);
                let abc = `*_── 「 DEPOSIT」 ──_*\n\n*_⚡Id: ${res.data.data.id}_*\n_⚡Nominal: ${res.data.data.nominal}_\n_⚡Di Buat: ${res.data.data.created_at}_\n_⚡Status: ${res.data.data.status}_\n\n *BATAS MINIMAL TRANSFER 1JAM DAN KETIKA LEWAT SISTEM AKAN OTOMATIS MEMBATALKAN TOPUP INI*\n\n *_${namabot}_*`;
                conn.sendMessage(m.chat, { image: { url: qrnya }, caption: abc });
                let status = res.data.data.status;

                var topup = {
                    method: 'POST',
                    url: 'https://atlantich2h.com/deposit/status',
                    data: new URLSearchParams(Object.entries({
                        api_key: h2hkey,
                        id: res.data.data.id
                    }))
                };

                while (status !== 'processing') {
                    await sleep(1000);
                    const response = await axios(topup);
                    status = response.data.data.status;
                    console.log(status);
                    if (status == 'batal') {
                        conn.reply(m.chat, 'Transaksi Dibatalkan');
                        fs.unlinkSync(`./database/datasaldo/${sender}.json`);
                        break;
                    }
                    if (status == 'expired') {
                        conn.reply(m.chat, 'Transaksi Dibatalkan');
                        fs.unlinkSync(`./database/datasaldo/${sender}.json`);
                        break;
                    }
                    if (status == 'processing') {
                        db.data.users[m.sender].saldo += res.data.data.nominal * 1;
                        let anjay = `*_── 「 DEPOSIT 」 ──_*\n\n*_⚡Nominal: ${res.data.data.nominal}_*\n_⚡Reff Id: ${res.data.data.reff_id}_\n_⚡Id: ${res.data.data.id}_\n_⚡ Status: SUKSES_\n\n *_@YassStore_*`;
                        conn.sendMessage(m, { text: anjay });
                        fs.unlinkSync(`./database/datasaldo/${sender}.json`);
                        break;
                    }
                }
            })
            .catch(err => {
                console.error(err);
                conn.reply(m.chat, 'Gagal melakukan deposit.');
            });

    } catch (error) {
        console.error(error);
        conn.reply(m.chat, error);
    }
};

handler.help = ['belistock <urutan_stock>'];
handler.tags = ['tools'];
handler.command = /^belistock$/i;

module.exports = handler;