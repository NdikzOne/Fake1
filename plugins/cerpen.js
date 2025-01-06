var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
			let res = await fetch(`
			${neNdikz}api/cerpen?category=cinta&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *CERPEN* ${htka}
  
▢ *CREATOR* : ${v.author}
▢ *JUDUL* : ${v.title}
▢ *CERPEN* : ${v.content}
${dmenuf}
`
    
await m.reply(cap)
    }

handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(cerpen|ceritapendee|ceripen)$/i
handler.limit = true
module.exports = handler