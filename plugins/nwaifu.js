let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let thumb =
    'https://files.catbox.moe/zpueot.jpg'
    let name = m.sender
  let type = (args[0] || '').toLowerCase()
  switch (type) {
  case 'yes':
      if (m.isGroup) {
          m.reply('Waifu Akan Di Kirim Di Priv Chat *Ingat Dosa Tanggung Sendiri*')
  conn.sendMessage(m.sender, { image: { url: `${skyNdikz}api/nsfw?apikey=${skyapi}&image=waifu` } })
          throw false
      }
       break
      case 'no':
      if (m.isGroup) {
          m.reply('*Alhamdulillah*')
          throw false
      }
}
        let text = `*${await conn.getName(name)}* Yakin Ingin Melihat Nwaifu? Minimal Umur 18+ dan dosa harus di tanggung sendiri,Admin Yg Buat bismillah Tidak Berdosa Karena Sudah Memberi Peringatan\n\nJika Ingin Melanjutkan *Ketik .nwaifu yes*\n Jika Ingin Membatalkan *Ketik .nwaifu no*`;
        conn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "N W A I F U",
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
handler.help = ['nwaifu']
handler.tags = ['internet']

handler.command = /^(nwaifu)$/i
handler.limit = true
handler.group = true

module.exports = handler
