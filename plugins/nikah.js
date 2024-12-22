var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
let [teksBottom,teksTop,Ndikz] = text.split('|')
if (!text) throw `Contoh: ${usedPrefix + command} TANGGAL|BULAN BERAPA|TAHUN`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/nikah?tanggal=${teksBottom}&bulan=${teksTop}&tahun=${Ndikz}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *NIKAH* ${htka}
 
▢ *💫 TANGGAL* : ${v.tanggal}
▢ *💫 KARAKTER* : ${v.karakteristik}
▢ *💫 INFO* : ${v.result}
${dmenuf}
`
    
await m.reply(cap)
}

handler.help = ['nikah (tanggal|bulan|tahun)']
handler.tags = ['fun']
handler.premium = false
handler.command = /^(ceknikah|nikah|tebaknikah)$/i

module.exports = handler