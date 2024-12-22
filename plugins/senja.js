let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let thumb = 'https://files.catbox.moe/bslsdb.png'
  //  await conn.sendFile(m.chat, thumb, 'galau.jpg', `${pickRandom(global.galau)}`, m)
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    let audio = './mp3/senja.mp3'
    let res = await fetch(`${neNdikz}api/senja?apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${v.text}`
   // conn.sendFile(m.chat, './mp3/galau.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
    await  conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `s ᴇ ɴ ᴊ ᴀ`,
body: '2024 © ᴀʟʏᴀ',
thumbnailUrl: thumb, 
sourceUrl: "https://whatsapp.com/channel/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await conn.sendFile(m.chat, audio, 'galau.mp3', null, m, true) 
}
handler.help = ['senja']
handler.tags = ['quotes']
handler.command = /^(senja)$/i

module.exports = handler