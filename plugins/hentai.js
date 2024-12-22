let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
m.reply(`Hentai Akan Di kirim Di Priv Chatಥ_ಥ`)
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.sender, json.url, '', 'YameteAwhh╥﹏╥', m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(hentai)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
