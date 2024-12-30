let fetch = require("node-fetch")
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.reply(m.chat, `text? Contoh.  .brat Jancok`, m)
m.reply(wait)
  let res = await fetch(`${neNdikz}api/brat?text=${text}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
    
    let stiker = await createSticker(null, v.url, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['brat']
handler.tags = ['maker']
handler.command = /^(brat)$/i
handler.limit = true

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