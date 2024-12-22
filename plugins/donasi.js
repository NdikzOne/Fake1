let handler = async (m, { conn, args, command }) => {
    let qris = 'https://files.catbox.moe/s5fn9g.jpg'
let chann = `Kalo Mau Donasi Bisa Ke Dana:6282241182487 Minimal No Php
`
await conn.sendFile(m.chat, qris, 'qris.jpg', `${chann}`, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler