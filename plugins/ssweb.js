let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!(args[0].includes('http://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
m.reply(wait) 
			let res = await fetch(`${neNdikz}api/ss?url=${args[0]}&device=desktop&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
    
    conn.sendFile(m.chat, v.url, null, wm, m)
	
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.limit = true
handler.fail = null
module.exports = handler