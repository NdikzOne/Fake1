var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=${apichan}`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *CERPEN* ${htka}
  
▢ *CREATOR* : ${v.creator}
▢ *JUDUL* : ${v.title}
▢ *CERPEN* : ${v.cerpen}
${dmenuf}
`
    
await m.reply(cap)
    }

handler.help = ['cerpen']
handler.tags = ['interner']
handler.command = /^(cerpen|ceritapendee|ceripen)$/i
handler.limit = true
module.exports = handler