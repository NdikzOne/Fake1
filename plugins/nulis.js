let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
	if (!args) throw `✳️ Contoh :\n${usedPrefix + command} nama lu`
	 let chat = global.db.data.chats[m.chat]
     let teks = args.join` `
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/nulis?text=${text}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
    conn.sendFile(m.chat, v.url, null, wm, m)  
}
handler.help = ['n'].map(v => v + 'ulis <teks>')
handler.tags = ['maker']
handler.command = /^nulis$/i
handler.limit = true

module.exports = handler
