const fetch = require("node-fetch");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*🚩 masukkan URL atau judul lagu!*\n\nexample:\n${usedPrefix + command} https://open.spotify.com/track/7lhy2horHMmvuO77iQEqMK?si=rJ7_EoivQQaLt1qpjebvpQ\n\nexample:\n${usedPrefix + command} one direction`;
  if (args[0].match(/https:\/\/open.spotify.com/gi)) {
    m.reply(wait);
    try {
      let rasat = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${args[0]}`)
	 let json = await rasat.json();
      let res = json.metadata;
      let captionvid = ` ∘ Title: ${res.name}\n∘ Artist: ${res.album_artist}\n∘ ReleaseDate: ${res.releaseDate}`;
      let pesan = await conn.sendMessage(m.chat, {
        text: captionvid,
        contextInfo: {
          externalAdReply: {
            title: "Spotify Downloader",
            body: "S P O T I F Y",
            thumbnailUrl: res.cover_url,
            sourceUrl: args[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      });
      await conn.sendMessage(m.chat, {
        audio: {
          url: json.download
        },
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: res.name,
            body: "",
            thumbnailUrl: res.cover_url,
            sourceUrl: args[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: m
      });
    } catch (e) {
      throw `🚩 ${eror}`;
    }
  } else { 
    m.reply(wait);
    const text = args.join(" ");
    try {
      const api = await fetch(`${neNdikz}api/spotify-search?q=${text}&apikey=${neoapi}`);
      let json = await api.json();
      let res = json.data;
      let teks = "";
      for (let i in res) {
        teks += `*${parseInt(i) + 1}.* *Title:* ${res[i].title}\n`;
        teks += `*Duration* ${res[i].duration}\n`;
        teks += `*Popularity:* ${res[i].popularity}\n`;
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
              thumbnailUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
              sourceUrl: ''
            }
          },
          mentions: [m.sender]
        }
      }, {});
    } catch (error) {
        throw error;
    }
  }
};

handler.help = ['spotify'];
handler.command = /^(spotify)$/i;
handler.tags = ['downloader'];
handler.limit = true;
module.exports = handler;