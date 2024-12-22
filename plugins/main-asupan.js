var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/asupan?username=cavend1sh__&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki} ASUPAN ${htka}
  
▢ *🙆🏻 Caption* : ${v.caption}
${dmenuf}
`
    
    conn.sendFile(m.chat, v.video, null, cap, m)
    }
handler.help = ['asupandouyin']
handler.tags = ['asupan']
handler.command = /^(asupandouyin)$/i
handler.premium = false
handler.register = false
handler.limit = 20
module.exports = handler