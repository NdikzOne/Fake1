let fetch = require('node-fetch')
const uploadImage = require('../lib/uploadImage') 
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
let handler = async (m, { conn, text, args }) => {
  let meme = [
      "memes stiker",
      "memes",
      "memes stiker"
  ]
  try {
let res = await fetch(`${webapi}api/others/meme?apikey=${apichan}`)
let wes = await res.json()
                let was = wes.data
let cita = wes.data[Math.floor(Math.random() * was.length)]
   // conn.sendFile(m.chat, cita, null, "*COWOK GANTENG*\n\npencarian dari: cogan " + text, m)
    let stiker = await createSticker(null, cita, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  } catch (e) {
      let res = await fetch(`${neNdikz}api/pinterest?q=${pickRandom(meme)}&apikey=${neoapi}`)
let wes = await res.json()
                let was = wes.result
let cita = wes.data[Math.floor(Math.random() * was.length)]
   // conn.sendFile(m.chat, cita, null, "*COWOK GANTENG*\n\npencarian dari: cogan " + text, m)
    let stiker = await createSticker(null, cita, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  }
}
handler.help = ['meme']
handler.tags = ['meme']
handler.command = /^(meme)$/i
handler.limit = true
handler.premium = false

module.exports = handler

async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: global.packname,
		author: global.author,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}