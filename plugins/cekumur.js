let fetch = require('node-fetch')
let { fileIO, api} = require('../lib/uploadFile.js')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .cekumur'
m.reply(wait)
let media = await q.download()
let url = await fileIO(media)
let res = await fetch(`${neNdikz}api/age?image=${url}&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *CEK UMUR* ${htka}
  
▢ *UMUR* : ${v.age}
▢ *GENDER* : ${v.gender}
${dmenuf}
`
    
await m.reply(cap)
//conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['cekumur (foto)']
handler.tags = ['maker']
handler.command = /^(cekumur|tebakumur)$/i
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