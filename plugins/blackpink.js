let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  m.reply(`Sbar Anjing Kdang Api Ress Eror🗿`)
  conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/blackpink?apikey=${apichan}` } })
}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^(blackpink)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
