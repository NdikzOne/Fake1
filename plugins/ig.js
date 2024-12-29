let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
    if (!(args[0].includes('http://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('instagram.com')) return m.reply(`Invalid instagram URL.`)
 //   if (!args[0]) throw `*• Example:* ${usedPrefix + command} https://youtu.be/xxxx`
    m.reply(wait)
let nt = await fetch(`${neNdikz}api/ig?url=${args[0]}&apikey=${neoapi}`)
        let vas = await nt.json()
  let v = vas.data
        console.log(vas.url[0])
        conn.sendFile(m.chat, v.url, null, wm, m)
        conn.sendMessage(m.chat, {
            react: {
                text: "✅",
                key: m.key,
            }
        })
    }
//conn.sendFile(m.chat, hasil, '', wm, m)
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(ig|instagram)$/i

handler.limit = true

module.exports = handler