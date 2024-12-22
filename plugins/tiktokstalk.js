var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Hutaoo Bermain   piano `
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/ttstalk?username=${text}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *TIKTOK* ${htka}
  
▢ *🙆🏻 USERNAME* : ${v.username}
▢ *🙆🏻 NAME* : ${v.name}
▢ *🙆🏻 REGION* : ${v.region}
▢ *🙆🏻 POSTS* : ${v.posts}
▢ *🙆🏻 FOLLOWERS* : ${v.followers}
▢ *🙆🏻 FOLLOWING* : ${v.following}
▢ *🙆🏻 BIO* : ${v.bio}
${dmenuf}
`
    
    conn.sendFile(m.chat, v.photo, null, cap, m)
    }
handler.help = ['tiktokstalk']
handler.tags = ['internet']
handler.command = /^(ttstalk|tiktokstalk)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler