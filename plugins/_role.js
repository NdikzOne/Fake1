/*let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 20) ? 'Beginner'
          : ((user.level >= 20) && (user.level <= 40)) ? 'Commander Elite'
          : ((user.level >= 40) && (user.level <= 60)) ? 'The Commander Hero'
          : ((user.level >= 60) && (user.level <= 80)) ? 'The Commander Elite Hero'
          : ((user.level >= 80) && (user.level <= 100)) ? 'The Commander Elite Super Strong Hero'
          : ((user.level >= 100) && (user.level <= 120)) ? 'The Commander Elite Super Strong Shadow Hero'
          : ((user.level >= 120) && (user.level <= 140)) ? 'The Commander Legends Shadow Hero'
          : ((user.level >= 140) && (user.level <= 160)) ? 'The Commander Super Legends Shadow Hero'
          : 'Legends'
  user.role = role
  return true
}

module.exports = handler*/

const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Masih Pemula:V': 0, 
  'BronZe Kayu:V': 5,
  'Penjaga Besi': 10,
  'Pertahanan Emas': 15,
  'Armor Perak': 20,
  'Armor Emaas': 25,
  'Pertahanan Emas': 30,
  'Pelindung Armor Emas': 40,
  'The Commander Elite Super Strong Shadow Hero': 50,
  'The Commander Legends Shadow Hero': 60,
  'The Commander Super Legends Shadow Hero': 70,
  'The Commander Super Legends Shadow Hero': 80,
  'The Strongest Legend': 90,
  'SEPUH AMPUN PUH': 100,
  'DEWA💀': 120
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
