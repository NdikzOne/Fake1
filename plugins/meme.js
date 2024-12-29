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
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apichan}` } })
  } catch (e) {
      conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apichan}` } })
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