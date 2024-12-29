let fetch = require('node-fetch')

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example: ${usedPrefix + command} kemaspakez`
if (text.includes("www.instagram.com")) {
  m.reply(`harus berupa username akun instagram!! ${usedPrefix + command} _fake.story46`);
} else {
    m.reply(wait)
  try {
   let res = await (await fetch(`${webapi}api/downloader/igstory?username=${text}&apikey=${apichan}`)).json()
 for(let x of res.data){
     conn.sendFile(m.chat, x, 'mp4/video', 'Done Nih Ngab:V', m)
 }
 } catch (e) {
     m.reply('Erorr: Tidak ada story Di instagram tersebut')
 }
}
}

handler.menu = ['igstory <text>']
handler.tags = ['download']
handler.command = /^((ig|instagram)story)$/i

handler.premium = false
handler.limit = true

module.exports = handler
