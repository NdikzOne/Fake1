var { fg } = require('api-dylux');
let fetch = require('node-fetch');
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper');
let limit = 350;
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh .playstore Whatsapp`
    let chat = global.db.data.chats[m.chat];
    let wait = 'Sedang diunduh...'; // Anda perlu mendefinisikan variabel wait
    m.reply(wait);
    let res = await fetch(`${neNdikz}api/apk?q=${text}&no=1&apikey=${neoapi}`);
    let json = await res.json();
    let v = json.data;
    let p = json.file;
    let cap = `${htki}  *P L AY S T O R E* ${htka}
  
▢ *☃️NAMA* : ${v.name}
▢ *☃️ SIZE* : ${v.size}
▢ *☃️ DEVELOPER* : ${v.developer}
▢ *☃️ ID* : ${v.id}

${dmenuf}
`;
    m.reply(cap);
    await conn.sendMessage(m.chat, { document: {url: p.url}, mimetype: 'document', fileName: `${p.filename}`}, {quoted: m})
}

handler.help = ['playstore']
handler.tags = ['download']
handler.command = /^(playstore1)$/i
handler.premium = false
handler.register = false
handler.limit = 20
module.exports = handler