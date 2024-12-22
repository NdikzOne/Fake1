let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let id = `${Math.floor(Math.random() * 5)}`
    m.reply('Cewek Nya Ndikz Akan Di Kirim Di priv Chat')
let res = await fetch(`${CewekNdikz}`)
let wes = await res.json()
                let was = wes.result
let cita = wes.result[Math.floor(Math.random() * was.length)]
    conn.sendFile(m.sender, cita, null, "Nih Cewek NDIKZ-ONE🥺", m)
}
	//  scrap.pinterest(text)
    //  .then(a => a[Math.floor(Math.random() * a.length)])
   //    .then(b => conn.sendFile(m.chat,b,b,"*PINTEREST*\n\npencarian dari: " + text, m)
  //  )

    
handler.help = ['girl-ai']
handler.tags = ['internet']
handler.command = /^(girl-ai|ntahlah)$/i
handler.limit = true
handler.rowner = true

module.exports = handler