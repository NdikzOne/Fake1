var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} nama bapak mu`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/tebakumur?apikey=82389ffbed5cd3ab5e3bdd81&name=${text}`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *TEBAKUMUR* ${htka}
  
▢ *💫 NAMA* : ${v.name}
▢ *💫 Umur* : ${v.age}
${dmenuf}
`
    
await m.reply(cap)
}

handler.help = ['tebakumur']
handler.tags = ['fun']
handler.premium = false
handler.command = /^(tebakumur|umurtebak)$/i

module.exports = handler