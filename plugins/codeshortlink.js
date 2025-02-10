let fetch = require('node-fetch')
let fs = require('fs')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    
    if (!text) throw `REDEEM KODENYA MANA!!`
    let pler = JSON.parse(fs.readFileSync('./lib/Ndikz/hadiah.json').toString())
    let jangan = pler.includes(text)
    if (!jangan) throw `KODE SALAH ATAU TELAH DIAMBIL ORANG`
    let qris = 'https://telegra.ph/file/e6bb2ee11bd8074eefe96.jpg' // ISI QRIS LU
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let thm = 'https://telegra.ph/file/5e52b6e8ab1ed136705ad.jpg'
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
  let kata = `${pickRandom('1291912', '12177819', '928192', '12919929', '12729890', '7625410', '272829', '7524136', '2712514', '121872756' )}`
  const prem = JSON.parse(fs.readFileSync("./lib/Ndikz/hadiah.json"))
 // let cpt = `*ADA TRANSAKSI MASUK*\n*DARI @${m.sender.split('@')[0]}*\n\nDENGAN ID DEPOSIT : ${text}\n*Tunggu sampai dia tf hihi*`
  let capt = `*SELAMAT!*\n\nKamu telah mendapatkan\n+25000 XP\n+25000 Money\n+25000 Nabung Money\n+25 Limit\n+50 Saldo`
  //	global.db.data.users[m.sender].id -= `${text}`
  
  global.db.data.users[m.sender].exp += 500
    global.db.data.users[m.sender].limit += 25
    global.db.data.users[m.sender].bank += 25000
    global.db.data.users[m.sender].money += 50000
	global.db.data.users[m.sender].saldo += 50
   global.db.data.users[m.sender].lastcode = new Date * 1
     let unp = prem.indexOf(args)
     prem.splice(unp, 1)
fs.writeFileSync("./lib/Ndikz/hadiah.json", JSON.stringify(prem))
        m.reply(capt)
   // return conn.sendFile('6281232615640@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
}
handler.help = ['codeshortlink']
handler.tags = ['rpgabsen']
handler.command = /^(codeshortlink|reedem|redeem|cd)$/i
handler.rowner = false
handler.limit = true
handler.private = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}