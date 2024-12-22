// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
m.reply(`Neko Akan Di Kirim Di Priv Chatಥ_ಥ`)
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.sender, json.url, '', 'Neko Punya @6281325600199 Jan Di Ambilಥ_ಥ', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^hneko$/i
handler.limit = true
handler.rowner = true

module.exports = handler
