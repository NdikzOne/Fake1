let fs = require('fs')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
          let audio = './mp3/menu.mp3'
    let menuy = `
${htki} List option: ${htka}

${dmenub2} welcome
${dmenub2} delete
${dmenub2} public
${dmenub2} antilink
${dmenub2} antilinknokick
${dmenub2} antidelete
${dmenub2} antiporn
${dmenub2} antiviewonce
${dmenub2} antifoto
${dmenub2} antitoxic
${dmenub2} antisticker
${dmenub2} autosticker
${dmenub2} autolevelup
${dmenub2} detect
${dmenub2} captcha
${dmenub2} simi
${dmenub2} document
${dmenub2} whitelistmycontacts
${dmenub2} restrict
${dmenub2} nyimak
${dmenub2} autoread
${dmenub2} pconly
${dmenub2} gconly
${dmenub2} swonly
--------  ------  ------
Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`
    let sections = [
{ title: `${htki} 𝙿𝙴𝙽𝙶𝙰𝚃𝚄𝚁𝙰𝙽 𝙱𝙾𝚃 ${htka}`,
rows: [
    { title: `✨ | Welcome`, description: `Mengatur Pesan ketika ada member baru`, id: `${usedPrefix + command} welcome` },
    { title: `🚫 | Delete`, description: `Menampilkan Pesan Yang telah dihapus`, id: `${usedPrefix + command} delete` },
    { title: `🗣️ | Simi`, description: `Chat Bersama Simi dalam grup`, id: `${usedPrefix + command} simi` },
    { title: `🔞 | Anti Horny`, description: `Anti media sagne Akan dihapus otomatis`, id: `${usedPrefix + command} antiporn` },
    { title: `🔗 | Antilink`, description: `Mengeluarkan user ketika ada tautan grup lain masuk`, id: `${usedPrefix + command} antilink` },
    { title: `🔗 | Antilink V2`, description: `Menghapus pesan tanpa mengeluarkan user`, id: `${usedPrefix + command} antilinknokick` },
    { title: `👁️ | Antiviewonce`, description: `Membalas Video/Gambar yang berupa 1kali dilihat`, id: `${usedPrefix + command} public` },
    { title: `🚧 | Antisticker`, description: `Menghapus Sticker Yang dikirimkan`, id: `${usedPrefix + command} antisticker` },
    { title: `📛 | Antitoxic`, description: `Menghapus Pesan Yang Bersifat kata kasar`, id: `${usedPrefix + command} antidelete` },
    { title: `⏏️ | Autolevelup`, description: `Auto Level UP Ketika XP Melebihi batas`, id: `${usedPrefix + command} antidelete` },
    { title: `🔎 | Detect`, description: `Mendeteksi Pesan Sesuatu Dari Users`, id: `${usedPrefix + command} antidelete` },
    { title: `📑 | Document`, description: `Mengirimkan Fake Dokumen setau GW:V`, id: `${usedPrefix + command} antidelete` },
    { title: `👤 | WhiteListMyContact`, description: `Allow All Contacts`, id: `${usedPrefix + command} antidelete` },
    { title: `❗ | Restrict`, description: `Kurang Tau cara kerjanya:V`, id: `${usedPrefix + command} antidelete` },
    { title: `😐 | Nyimak`, description: `Mendeteksi ketika ada users yang hanya read`, id: `${usedPrefix + command} antidelete` },
    { title: `☑️ | Autoread`, description: `Mengatur Bot Untuk Membaca Pesan`, id: `${usedPrefix + command} antidelete` },
    { title: `💬 | PcOnlyt`, description: `Mengatur hanya khusus Private Message / Pribadi`, id: `$${usedPrefix + command} antidelete` },
    { title: `🏢 | GcOnly`, description: `Mengatur hanya khusus Group WhatsApp`, id: `${usedPrefix + command} antidelete` },
    { title: `📷 | SwOnly`, description: `Mengatur hanya khusus Story WhatsApp / Pribadi`, id: `${usedPrefix + command} antidelete` }
]}
    ]
    let listMessage = {
    title: 'Pilih disini', 
    sections
};
    const { generateWAMessageFromContent, proto } = require("@adiwajshing/baileys") 
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
        contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363344962076305@newsletter',
			newsletterName: `By ${namabot}`, 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: `${namabot}`, 
                thumbnailUrl: thumb, 
                sourceUrl: 'https://youtube.com/ichangaming',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: menuy
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `${namabot}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            subtitle: `${namabot} ニーム`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage) 
              }
           ],
          })
        })
    }
  }
}, {})
    
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let user = global.db.data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'captcha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.captcha = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
          case 'antilinknokick':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antilinkgrup = isEnable
      break 
    case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
          case 'antiporn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiPorn = isEnable
      break
          case 'antifoto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiFoto = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'toxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = !isEnable
      break
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break
      case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
          case 'autobackup':
            isAll = true
            if (!isOwner) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.backup = isEnable
            break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['restrict'] = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
case 'chatbot':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    case 'viewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'simi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.simi = isEnable
      break
          case 'antibot':
                isAll = true
                if (!isOwner) {
                    global.dfail('owner', m, conn)
                    throw false
                }
                chat.antibot = isEnable
                break
          case 'antispam':
      if (m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiSpam = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
/*conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: menuy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})*/
          throw false
  }
  let status = `╭───═[ *OPTIONS* ]
│🗂️ Tipe: ${type}
│📊 Status: Sukses!
│🎚️ Opsi: ${isEnable ? 'Aktif' : 'Nonaktif'}
│📣 Untuk: ${isAll ? 'Bot Ini' : isUser ? '' : 'Chat Ini'}
┗─────────────···`
  conn.sendMessage(m.chat, {
text: status,
contextInfo: {
externalAdReply: {
title: namabot,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler