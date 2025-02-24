let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let thumb = 'https://files.catbox.moe/zpueot.jpg'
  //  await conn.sendFile(m.chat, thumb, 'galau.jpg', `${pickRandom(global.galau)}`, m)
  
  let cap = `Mau Beli Sctipt Ini? Murah Aja Kok 90k Auto update 50k no update Minat? Bisa Hubungi: 6282241182487`
   // conn.sendFile(m.chat, './mp3/galau.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
    await  conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `ʙ ᴇ ʟ ɪ s ᴄ`,
body: '2024 © ᴀʟʏᴀ',
thumbnailUrl: thumb, 
sourceUrl: "https://whatsapp.com/channel/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['belisc']
handler.tags = ['store']
handler.command = /^beli(sc|script)?$/i


module.exports = handler