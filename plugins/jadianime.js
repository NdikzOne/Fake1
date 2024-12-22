let fetch = require('node-fetch')
let { fileIO, api} = require('../lib/uploadFile.js')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar'
m.reply(wait)
let media = await q.download()
let url = await fileIO(media)
let hasil = await (await fetch(`${skyNdikz}api/toanime?apikey=${skyapi}&url=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
//conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(jadianime|toanime)$/i
handler.limit = true

module.exports = handler

async function getBuffer(url, options) {
        try {
                options ? options : {}
                const res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}