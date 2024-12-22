const fetch = require('node-fetch');
const axios = require('axios');


let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aibocchi Siapa presiden Indonesia?`, m)
  
  let name = m.sender
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let res = await fetch(`${mahiruOne} ${await conn.getName(name)}, ${mahiruTwo}${text}`)
  let vas = await res.json()
  let v = vas.data
  
  await conn.sendMessage(m.chat, { react: { text: `🌸`, key: m.key }});
  
  let hasil = `${v.result}`;
  await m.reply(hasil)
  
};

handler.help = ['mahiru (text)']
handler.command = /^(mahiru)$/i
handler.tags = ['Cai'];
handler.limit = 4
handler.premium = false
module.exports = handler;