let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let thumb =
    'https://files.catbox.moe/zpueot.jpg'
  let type = (args[0] || '').toLowerCase()
  switch (type) {
  case 'yes':
      if (m.isGroup) {
          m.reply('Asupan Akan Di Kirim Di Priv Chat *Ingat Dosa Tanggung Sendiri*')
			let res = await fetch(`${neNdikz}api/asupan?username=asupanphoto&apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki} ASUPAN ${htka}
  
▢ *🙆🏻 Caption* : ${v.caption}
${dmenuf}
`
    
    conn.sendFile(m.sender, v.video, null, cap, m)
          throw false
      }
      break
      case 'no':
      if (m.isGroup) {
          m.reply('*Alhamdulillah*')
          throw false
      }
}
        let text = `Yakin Ingin Melihat Asupan? Minimal Umur 18+ dan dosa harus di tanggung sendiri,Admin Yg Buat bismillah Tidak Berdosa Karena Sudah Memberi Peringatan\n\nJika Ingin Melanjutkan *Ketik .asupan yes*\nJika Ingin Membatalkan *Ketik .asupan no*`;
        conn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "𝐀 𝐒 𝐔 𝐏 𝐀 𝐍",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: thumb,
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^(asupan)$/i
handler.premium = false
handler.register = false
handler.limit = 20
module.exports = handler