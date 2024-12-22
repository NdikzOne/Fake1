let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
    /*
    // JANGAN ASAL COMOT MINIMAL BIKIN SENDIRI
let id = jb1 + '@g.us'
let groupMetadata = await conn.groupMetadata(id)
    if (!groupMetadata) throw 'groupMetadata is undefined'
    if (!'participants' in groupMetadata) throw 'participants is not defined'
    let me = groupMetadata.participants.find(user => user.id === m.sender)
let idgc = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(id)
 //   m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(id))
// JANGAN ASAL COMOT MINIMAL BIKIN SENDIRI*/

  let pp = await (await fetch(ppUrl)).buffer();
//  let dek = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${name}`
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
    function iklan() {
          //  const iklan = (require('fs').readFileSync('./database/' + 'ads', 'utf-8'))
        try {
            var result = fs.readFileSync('./database/' + 'ads', 'utf-8')
            } catch (e) {
                result = 'Iklan Tidak Tersedia Saat ini'
            }
            return result;
        }
    let adss = iklan()
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  //  let { pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
✧───────[ *PROFILE* ]───────✧
📇 • *Name:* ${username} ${registered ? '(' + name + ') ': ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${m.sender.split('@')[0]}
💻 • *Link:* https://wa.me/${who.split`@`[0]}

${registered ? '🎨 • *Age:* ' + age : ''}
🌟 • *Premium:* ${premium ? "✅" :"❌"}
⌚ • *Expired* : ${msToDate(global.db.data.users[who].premiumDate - new Date() * 1)}
📑 • *Registered:* ${registered ? '✅': '❌'}
⛔ • *Banned:* ❌
`
  let menyu = `
◈ ━━━━━ *${namabot}* ━━━━━ ◈
ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.

🗓️ 𝗗𝗮𝘁𝗲: ${week} ${date}
⏰ 𝗧 𝗜 𝗠 𝗘 : ${time}

/allmenu (untuk Menampilkan Semua Menu Bot)
/sewabot (Untuk Detail Harga SewaBot)
/daftar (untuk mendaftarkan Akun dalam Database)
/owner (Untuk Kepentingan Jika ada Kendala)

==========================
		*BOT ADS*
		_mau produk/jasa kamu di iklankan seperti dibawah? hubungi owner dengan ketik .owner_
${adss}

_*KETIK PERINTAH DIATAS UNTUK MENGGUNAKANNYA*_`
  let images = pickRandom(waifu)
  let vigif = await downloadAndBuffer(thumb2)
 /* if (!me) throw conn.sendMessage(m.chat, {text: `📣 Haiii ${name}

Mau pake perintah bot? Yuk, join dulu di komunitas kami agar mendapatkan seputar informasi terbaru, setelah itu kamu bisa pake bot lagi.

*Join Dulu Disini :*
*${idgc}*
`, contextInfo: {
				externalAdReply: {
                    showAdAttribution: true,
                    title: 'Join sekarang ❗',
					body: '',
					mediaTpe: 1,
					thumbnailUrl: images,
					sourceUrl: idgc,
					renderLargerThumbnail: true		
				}
			}
			}, {quoted: m})*/
  
  /*
  // ------------- BETTON WANGSAF ----------------------
  let sections = [
{ title: `${htki} ＤＡＦＴＡＲ ＦＩＴＵＲ ＰＡＤＡ ＢＯＴ ${htka}`,
rows: [
    { title: `🛍️ | Menu JB Store`, description: `Menu untuk jualan akun dan Fitur JB Lainnya`, id: `.storemenu` },
    { title: `🧮 | Semua Menu`, description: `Menampilkan semua menu yang ada pada bot`, id: `.allmenu` },
    { title: `📆 | Menu Absen`, description: `Fitur Fun Absen pada grup`, id: `.ichanbutton rpgabsen` },
    { title: `🌱 | Menu RPG`, description: `Bermain Game RPG Bersama Teman Di Group`, id: `.ichanbutton rpg` },
    { title: `🎮 | Menu Game`, description: `Bermain tebak tebakan bersama dalam Group`, id: `.ichanbutton game` },
    { title: `🎨 | Menu Stiker`, description: `Membuat Variasi Stiker menarik`, id: `.ichanbutton sticker` },
    { title: `📋 | Menu Kedua`, description: `Menu Kedua Pada bot`, id: `.ichanbutton main` },
    { title: `🐳 | Menu Kerang Ajaib`, description: `Bermain dan menanyakan sesuatu pada kerang`, id: `.ichanbutton kerang` },
    { title: `📖 | Menu Quotes`, description: `Quotes Motivasi Penyemangat Hidup`, id: `.ichanbutton quotes` },
    { title: `⛔ | Menu Admin`, description: `Menu Fitur Untuk Admin Group`, id: `.ichanbutton admin` },
    { title: `🏢 | Menu Group`, description: `Semua All Fitur yang hanya diakses di grup`, id: `.ichanbutton group` },
    { title: `🌎 | Menu Internet`, description: `Mencari Berita atau Pengetahuan di internet`, id: `.ichanbutton internet` },
    { title: `📩 | Menu Download`, description: `Mendownload Link Video Pada Platform sosmed`, id: `.ichanbutton downloader` },
    { title: `🚨 | Menu Berita`, description: `Membaca berita yang beredar sedang hangat`, id: `.ichanbutton berita` },
    { title: `🛠️ | Menu Tools`, description: `Peralatan fitur fitur untuk bot whatsapp`, id: `.ichanbutton tools` },
    { title: `🕌 | Menu Islamic`, description: `Mendeteksi ketika ada users yang hanya read`, id: `.ichanbutton islami` },
    { title: `👑 | Menu Owner`, description: `Menu pada Developer ataupun Owner SC`, id: `.ichanbutton owner` },
    { title: `⚠️ | Menu Advanc/DEV`, description: `Jangan Ya Dek YA!`, id: `.ichanbutton advanced` }
]},{ title: `${htki} ＩＮＦＯ ＴＥＮＴＡＮＧ ＢＯＴ ${htka}`,
rows: [
    { title: `👑 | Owner Pemilik Bot`, description: `Jika butuh kebutuhan tentang bot`, id: `.owner` },
    { title: `⏰ | Waktu Aktif Bot`, description: `Menampilkan Berapa Lama Bot ini aktif`, id: `.runtime` },
    { title: `📡 | Spesifikasi OS Bot`, description: `Menampilkan Detail Specs Yang Dipakai`, id: `.ping` },
    { title: `💎 | Jasa Sewa Bot`, description: `Butuh Sewa Bot Masuk Ke Grup Mu?`, id: `.sewabot` }
    ]}
    ]
    let listMessage = {
    title: 'Pilih disini', 
    sections
};
    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys") 
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: saluran,
 newsletterJid: idsal,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menyu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: namabot
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"DEVELOPER 📲","id":".owner"}`
},
      {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"MY WEBISTE 🛍️\",\"url\":\"https://zxcoderid.my.id\",\"merchant_url\":\"https://zxcoderid.my.id\"}"
 },
 ],
 })
 })
 }
 }
}, {})
  
  conn.sendPresenceUpdate("recording", m.chat) 
    await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})*/
    conn.sendMessage(m.chat, {
video: vigif,
mimetype: 'video/mp4',
fileLength: 1000000,
caption: menyu,
gifPlayback: true,
gifAttribution: 5,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
forwardingScore: 2023,
title: wm,
thumbnailUrl: 'https://files.zxcoderid.my.id/image/4384439ef82364f3f6123b42d821b751.jpg',
sourceUrl: sgc, 
mediaType: 1,
renderLargerThumbnail: true,
mentionedJid: [m.sender]
}}}, { quoted: m })
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.customPrefix = /^(.menu|menu|help|menunya)$/i
handler.command = new RegExp
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}
async function downloadAndBuffer(url) {
    try {
        // Unduh file menggunakan Axios
        const response = await axios.get(url, {
            responseType: 'arraybuffer' // Tentukan tipe respons sebagai array buffer
        });

        // Buat buffer dari data yang diunduh
        const buffer = Buffer.from(response.data);

        return buffer;
    } catch (error) {
        console.error('Gagal mengunduh dan membuat buffer:', error);
        return null;
    }
}
function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
}