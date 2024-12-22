var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh .debil teks1`
let [teksBottom,teksTop] = text.split('|')
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/devil?text=${text}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
    
    conn.sendFile(m.chat, v.url, null, wm, m)
    }
handler.help = ['devil text1']
handler.tags = ['maker']
handler.command = /^(devil)$/i
handler.premium = false
handler.register = false
handler.limit = 20
module.exports = handler