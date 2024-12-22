var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `masukin java script nya`
//await m.reply(wait)
  var apii = await fetch(`https://aihub.xtermai.xyz/api/tools/js-protector?code=${text}&key=Bell409`)
  var js = await apii.json()
  await m.reply(js.data)
}      
handler.command = handler.help = ['enc'];
handler.tags = ['internet','tools'];
handler.limit = 4
handler.premium = false
module.exports = handler;