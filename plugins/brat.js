let fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.reply(m.chat, `text? Contoh.  .brat Jancok`, m)
m.reply(wait)
  let res = await fetch(`https://api.neoxr.eu/api/brat?text=${text}&apikey=dZnUOp`)
  let vas = await res.json()
  let v = vas.data
    
    conn.sendFile(m.chat, v.url, null, wm, m)
}
handler.help = ['brat']
handler.tags = ['maker']
handler.command = /^(brat)$/i
handler.limit = true

module.exports = handler