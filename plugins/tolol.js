let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} Nama Mu🗿`
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=82389ffbed5cd3ab5e3bdd81&name=${text}` } })
}
handler.help = ['tolol']
handler.tags = ['fun']
handler.command = /^(tolol)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
