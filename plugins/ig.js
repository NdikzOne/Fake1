var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
    if (!(args[0].includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('instagram.com')) return m.reply(`Invalid Tiktok URL.`)
	//if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
    try {
			let res = await fetch(`${alyaNdikz}api/ig?url=${args[0]}&apikey=${alyaapi}`)
  let vas = await res.json()
  let vvas = vas.data[0]
    
    conn.sendFile(m.chat, vvas.url, null, wm, m)
    } catch (e) {
        let res = await fetch(`${webapi}api/downloader/instagram2?url=${args[0]}&apikey=${apichan}`)
  let vas = await res.json()
  let vvas = vas.data[0]
    
    conn.sendFile(m.chat, vvas.url, null, wm, m)
    }
    }

handler.help = ['ig']
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(Instagram|ig|igdl)$/i

module.exports = handler