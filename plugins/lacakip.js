var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} 0.0.0.0`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/ipaddress/${text}?apikey=${apichan}`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `*GHOST +T R A C K E R+*

Country: ${v.country}
City: ${v.city}
Timezone: ${v.timezone}
RegionName: ${v.regionName}
As: ${v.as}

gunakan Tools Ini dengan Bijak!!`
    
await m.reply(cap)
}

handler.help = ['lacakip <teks>']
handler.tags = ['tools']
handler.command = /^(lacakip)$/i
handler.limit = true
handler.premium = false

module.exports = handler