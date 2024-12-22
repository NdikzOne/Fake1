var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apichan}`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *CERITA HOROR* ${htka}
  
▢ *💀 Title* : ${v.title}
▢ *💀 Desc* : ${v.desc}
▢ *💀 Story* : ${v.story}
${dmenuf}
`
    
    conn.sendFile(m.chat, v.thumbnail, null, cap, m)
    }

handler.help = ['ceritahoror']
handler.tags = ['fun']
handler.premium = true
handler.command = /^(ceritahoror|hororcerita)$/i

module.exports = handler