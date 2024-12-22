let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh Hutao bermain piano`
m.reply(wait)
let hasil = await (await fetch(`https://aihub.xtermai.xyz/api/text2img/animediff?prompt=${text}&negativePrompt=${text}&key=Bell409`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['animediff']
handler.tags = ['internet']
handler.command = /^(animediff)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler