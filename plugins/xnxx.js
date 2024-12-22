var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw 'Cari anime apa?'
  const api = await fetch(`${skyNdikz}api/pornhubsearch?apikey=
  ${skyapi}&search=${text}`);
      let json = await api.json();
      let teks = "";
      for (let i in json) {
        teks += `*${parseInt(i) + 1}.* *TITLE:* ${json[i].title}\n`;
        teks += `*DURASI:* ${json[i].duration}\n`;
        teks += `*VIEW:* ${json[i].viewers}\n`;
        teks += `*LINK:* ${json[i].url}\n\n`;
      }
      await conn.relayMessage(m.chat, {
        extendedTextMessage: {
          text: teks,
          contextInfo: {
            externalAdReply: {
              title: `🔍 Search : ${text}`,
              mediaType: 1,
              previewType: 0,
              showAdAttribution: true,
              renderLargerThumbnail: true,
              thumbnailUrl: 'https://files.catbox.moe/obpbpt.jpg',
              sourceUrl: ''
            }
          },
          mentions: [m.sender]
        }
      }, {});
    }
handler.help = ['xnxx (search)']
handler.tags = ['internet']
handler.command = /^(xnxx)$/i
handler.limit = true
handler.group = false

module.exports = handler