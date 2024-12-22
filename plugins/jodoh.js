var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
let [teksBottom,teksTop] = text.split('|')
if (!text) throw `Contoh: ${usedPrefix + command} NAMA KAMU|NAMA PASANGAN`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/jodoh?name1=${teksBottom}&name2=${teksTop}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *JODOH* ${htka}
 
▢ *💫 NAMA ANDA* : ${v.nama_anda}
▢ *💫 NAMA PASANGAN* : ${v.nama_pasangan}
▢ *💫 POSITIF* : ${v.positif}
▢ *💫 NEGATIF* : ${v.negatif}
▢ *💫 INFO* : ${v.info}
${dmenuf}
`
    
await m.reply(cap)
}

handler.help = ['tebakjodoh']
handler.tags = ['fun']
handler.premium = false
handler.command = /^(tebakjodoh|jodoh)$/i

module.exports = handler