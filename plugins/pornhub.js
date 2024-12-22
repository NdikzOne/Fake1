var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh .pornhub teks1|teks2`
let [teksBottom,teksTop] = text.split('|')
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/pornhub?text1=${teksBottom}&text2=${teksTop}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki} PORNHUB ${htka}
  
▢DONE PORNHUB?
${dmenuf}
`
    
    conn.sendFile(m.chat, v.url, null, cap, m)
    }
handler.help = ['pornhub (text1|text2']
handler.tags = ['maker']
handler.command = /^(pornhub)$/i
handler.premium = false
handler.register = false
handler.limit = 20
module.exports = handler