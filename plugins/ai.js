var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/gpt4-session?q=${text}&session=1727468410446638&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${v.message}
`
    
await m.reply(cap)
    }
handler.command = handler.help = ['ai2','aiturbo','chatgpt','ai','openai'];
handler.tags = ['internet','tools'];
handler.limit = 4
handler.premium = false
module.exports = handler;