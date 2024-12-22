var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
//await m.reply(wait)
  var apii = await fetch(`${neNdikz}api/artimimpi?q=${text}&apikey=${neoapi}`)
  let vas = await apii.json()
  let v = vas.data
  
  let cap = `${v.result}`
await m.reply(cap)
}      
handler.command = handler.help = ['artimimpi'];
handler.tags = ['fun'];
handler.limit = 4
handler.premium = false
module.exports = handler;