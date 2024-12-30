var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.tiktok.com/xxxxx`
    if (!(args[0].includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
	//if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
    try {
			let res = await fetch(`${neNdikz}api/tiktok?url=${args[0]}&apikey=${neoapi}`)
		let anu = await res.json()
		if (anu.status != 'true') throw Error(anu.message)
		anu = anu.data
		if (anu.length == 0) throw Error('Error : no data')
        let count = 1;
		for(let x of anu.photo){
            conn.sendFile(m.chat, x, 'jpeg/image', `Images Ke-${count}`, m)
            count++
        }
        }
        }

handler.menu = ['tiktokslide <url>']
handler.tags = ['downloader']
handler.command = /^((tt|tiktok)slide)$/i

handler.premium = false
handler.limit = true

module.exports = handler