var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw 'Cari anime apa?'
  const api = await fetch(`${neNdikz}api/anime?q=${text}&apikey=${neoapi}`);
      let json = await api.json();
      let res = json.data;
      let teks = "";
      for (let i in res) {
        teks += `*${parseInt(i) + 1}.* *Title:* ${res[i].title}\n`;
        teks += `*SCORE:* ${res[i].score}\n`;
        teks += `*TYPE:* ${res[i].type}\n`;
        teks += `*Link:* ${res[i].url}\n\n`;
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
              thumbnailUrl: 'https://files.catbox.moe/7r8ykq.jpg',
              sourceUrl: ''
            }
          },
          mentions: [m.sender]
        }
      }, {});
    }
handler.help = ['animesearc']
handler.tags = ['internet']
handler.command = /^(animesearch)$/i
handler.limit = true
handler.group = false

module.exports = handler