let handler = async (m, {
    conn,
    args,
    usedPrefix
}) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || await conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warn = global.db.data.users[ban].warn
        if (warn < 10) {
            global.db.data.users[ban].warn += 1
            m.reply(`*berhasil Warn!*`)
            await conn.reply(ban, '*Kamu di warn oleh moderator, dan sekarang kamu punya ' + (warn + 1) + ' warn. Ingat Jika kamu mendapat warn 10 kali kamu akan otomatis ke banned*', null)
        } else if (warn == 10) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warn = 0
            m.reply('*Dia sudah kebanned, karena mendapatkan 10 warn*')
            await conn.reply(ban, '*Kamu ke banned karena telah mendapatkan 10 kali warn*', null)
        }
    } else conn.reply(m.chat, '*Siapa yang mau di Warn?\nTag orangnya*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner', 'group']
handler.command = /^warn$/i
handler.mods = true

module.exports = handler