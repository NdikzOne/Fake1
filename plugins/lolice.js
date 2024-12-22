let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendMessage(m.chat, { image: { url: `https://weeb-api.vercel.app/loli` } })
}

handler.help = ['lolice']
handler.tags = ['maker']

handler.command = /^(lolice)$/i

module.exports = handler
