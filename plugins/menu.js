const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const platform = require('process')
const os = require('os')
let levelling = require('../lib/levelling')
let ucpn = `${ucapan()}`

let tags = {
  'store': '𝗠𝗘𝗡𝗨 𝗦𝗧𝗢𝗥𝗘',
  'Cai': '𝗠𝗘𝗡𝗨 𝗖𝗔𝗜',
  'rpgabsen': '𝗥𝗣𝗚 𝗔𝗕𝗦𝗘𝗡',
  'rpg': '𝗠𝗘𝗡𝗨 𝗥𝗣𝗚',
  'game': '𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘',
  'xp': '𝗘𝘅𝗽, 𝗟𝗶𝗺𝗶𝘁 & 𝗣𝗮𝘆',
  'sticker': '𝗠𝗲𝗻𝘂 𝗦𝘁𝗶𝗰𝗸𝗲𝗿',
  'main': '𝗠𝗲𝗻𝘂 𝗠𝗮𝗶𝗻',
  'kerang': '𝗞𝗲𝗿𝗮𝗻𝗴 𝗔𝗷𝗮𝗶𝗯',
  'quotes': '𝗠𝗲𝗻𝘂 𝗤𝘂𝗼𝘁𝗲𝘀',
  'admin': '𝗠𝗲𝗻𝘂 𝗔𝗱𝗺𝗶𝗻',
  'group': '𝗠𝗲𝗻𝘂 𝗚𝗿𝗼𝘂𝗽',
  'internet': '𝗠𝗲𝗻𝘂 𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁',
  'anonymous': '𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗖𝗵𝗮𝘁',
  'downloader': '𝗠𝗲𝗻𝘂 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿',
  'berita': '𝗠𝗲𝗻𝘂 𝗕𝗲𝗿𝗶𝘁𝗮',
  'tools': '𝗠𝗲𝗻𝘂 𝗧𝗼𝗼𝗹𝘀',
  'fun': '𝗠𝗲𝗻𝘂 𝗙𝘂𝗻',
  'database': '𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲', 
  'vote': '𝗩𝗼𝘁𝗶𝗻𝗴',
  'absen': '𝗔𝗯𝘀𝗲𝗻',
  'catatan': '𝗠𝗲𝗻𝘂 𝗖𝗮𝘁𝗮𝘁𝗮𝗻',
  'jadian': '𝗝𝗮𝗱𝗶𝗮𝗻',
  'besftriend': '𝗕𝗲𝘀𝘁𝗳𝗿𝗶𝗲𝗻𝗱',
  'islami': '𝗠𝗲𝗻𝘂 𝗜𝘀𝗹𝗮𝗺𝗶',
  'owner': '𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿',
  'advanced': '𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱',
  'info': '𝗜𝗻𝗳𝗼',
  'audio': '𝗠𝗲𝗻𝘂 𝗔𝘂𝗱𝗶𝗼',
  'maker': '𝗠𝗲𝗻𝘂 𝗠𝗮𝗸𝗲𝗿',
  'nocategory': '𝗡𝗼𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝘆',
}
const defaultMenu = {
  before: `
◈ ━━━━━ *INFO BOTZ* ━━━━━ ◈

*${namabot}* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.
─────────────

⌬〡 _ʜᴀʟᴏ_ *%name*
⌬〡 ʟᴇᴠᴇʟ : *%level* 
⌬〡 ᴛᴏᴛᴀʟ ᴜꜱᴇʀ : %totalreg
⌬〡 ᴛᴏᴛᴀʟ ғɪᴛᴜʀ : %totalf
⌬〡 ᴜᴘᴛɪᴍᴇ : %muptime 
⌬〡 ʟɪʙʀᴀʀʏ : *Baileys*
⌬〡 ᴛʏᴘᴇ : *NodeJS*
⌬〡 ᴘʟᴀᴛғᴏʀᴍ : *%platform*
⌬〡 ᴠᴇʀsɪᴏɴ : *%version*
⌬〡 ʜᴏᴍᴇᴘᴀɢᴇ : *NdikzOne*

*pesan* jangan lupa sholat
─────────────
ʜᴀʟᴏ *%name* ᴀᴅᴀ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀʏᴀ ʙᴀɴᴛᴜ?
ᴋᴇᴛɪᴋ *.ᴏᴡɴᴇʀ* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴀᴛᴀᴜ ᴋᴇᴘᴇʀʟᴜᴀɴ ʟᴀɪɴɴʏᴀ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ
─────────────
® ${htjava} DILARANG SPAM BOT
® ${htjava} GUNAKAN BOT SEBAIK MUNGKIN
® ${htjava} OWNER ADALAH DEWA,

Ⓛ = Limit / Diamonds
Ⓟ = Premium 
-----  -----  -----  -----  -----
		𝐃𝐚𝐟𝐭𝐚𝐫 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭
  %readmore
`.trimStart(),
  header: '> `%category` 〢',
  body: '┇ ⫹⫺ %cmd %isPremium %islimit',
  footer: '└ ─ ─ ─ ─ ─〢',
  after: `Copyright : @WhatsApp
${wm}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let tag = `@${m.sender.split('@')[0]}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

      
const zxcoder = [
    { text: "ʟᴏᴀᴅɪɴɢ...", timeout: 100 },
    { text: "《 █▒▒▒▒▒▒▒▒▒▒▒》10%", timeout: 100 },
    { text: "《 ████▒▒▒▒▒▒▒▒》30%", timeout: 100 },
    { text: "《 ███████▒▒▒▒▒》50%", timeout: 100 },
    { text: "《 ██████████▒▒》80%", timeout: 100 },
    { text: "《 ████████████》100%", timeout: 100 },
    { text: "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...", timeout: 100 }
  ];

  const lolichan = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
     let vigif = await downloadAndBuffer(thumb2)
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag

  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
  const poto = await fs.readFileSync('./thumbnail.jpg')
  
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role, _p, money, prems, platform, totalf, tag,
      readmore: readMore,
      namabot: namabot,
      namaowner: namaowner,
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      let images = pickRandom(waifu)
      conn.sendPresenceUpdate("recording", m.chat)
        for (let i = 0; i < zxcoder.length; i++) {
    await new Promise(resolve => setTimeout(resolve, zxcoder[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lolichan,
        type: 14,
        editedMessage: {
          conversation: zxcoder[i].text
        }
      }
    }, { quoted: m });
  }
   //   await loading(1000)
conn.sendMessage(m.chat, {
video: vigif,
mimetype: 'video/mp4',
fileLength: 1000000,
caption: text,
gifPlayback: true,
gifAttribution: 5,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
forwardingScore: 2023,
title: wm,
thumbnailUrl: 'https://telegra.ph/file/62afed496f1f221ae26e9.jpg',
sourceUrl: sgc, 
mediaType: 1,
renderLargerThumbnail: true,
mentionedJid: [m.sender]
}}}, { quoted: m })
  conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 8873})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menuall|help|\?)$/i
handler.register = true
handler.exp = 3
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(10001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
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