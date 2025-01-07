let baileys = require("@adiwajshing/baileys")
let { useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = baileys
let { Boom } = require("@hapi/boom")
let NodeCache = require("node-cache")
let Pino = require("pino")
let simple = require('../lib/simple')
let fs = require('fs')

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
    
      let premiumList = [
    {
      duration: "JADIBOT 1HARI",
      price: 7000,
      command: "1D",
    },
    {
      duration: "JADIBOT 3HARI",
      price: 15000,
      command: "3D",
    },
    {
      duration: "JADIBOT 1MINGGU",
      price: 25000,
      command: "7D",
    },
    {
      duration: "JADIBOT 1BULAN",
      price: 35000,
      command: "30D",
    },
    {
      duration: "JADIBOT 1TAHUN",
      price: 150000,
      command: "360D",
    },
  ];

  if (!text) {
    let listText = "*JADIBOT LIST:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `${index + 1}. JADIBOT ${premium.duration}\n`;
      listText += `◦  harganya : *${premium.price.toLocaleString()}* Saldo\n`;
      listText += `◦  *Command :* .b-tiketbot ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
          title: namabot,
          body: "Dijamin Murah Meriah Store NdikzOne",
          thumbnailUrl: "https://files.catbox.moe/zpueot.jpg",
          sourceUrl: "https://youtube.com/NdikuzuuOne",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Please enter the number of days you want to buy.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Tidak ada list store seperti itu", m);

  let users = global.db.data.users[m.sender];
  if (!users) return conn.reply(m.chat, "nomor kamu belum terdaftar dalam database.", m);

  let balance = db.data.users[m.sender].saldo
  let price = selectedPremium.price;
 // if (balance > price) return conn.reply(m.chat, "Saldo kamu kurang silahkan deposit", m);
    if (balance < price) {
 m.reply(`Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu\nharganya: Rp${price}`)
 } else if(balance > price) { 

  users.jadibot = true;
  users.jadibotDate = Date.now() + days * 24 * 60 * 60 * 1000;   
     
db.data.users[m.sender].saldo -= price * 1

  conn.reply(m.chat, `You have successfully purchased *${selectedPremium.duration}* Jadibot\n\n𝐍𝐄𝐖 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐔𝐍𝐋𝐎𝐂𝐊𝐄𝐃\nSilahkan ketik .jadibot.\nKetik .kuotabot untuk melihat masa aktif jadibot anda`, m);
 }
    

}
handler.help = ['b-tiketbot *<number>*']
handler.tags = ['jadibot']
handler.command = /^b-jadibot|b-tiketbot$/i
handler.register = true
handler.limit = false
handler.owner = false
handler.private = false
module.exports = handler