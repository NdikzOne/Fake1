const { generateWAMessageFromContent } from '@adiwajshing/baileys'
const { promises as fsPromises } from 'fs'
const { join } from 'path'
const { xpRange } from '../lib/levelling.js'
const moment from 'moment-timezone'
const os from 'os'
const fetch from 'node-fetch'

let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi) {
        let commands = ['menu', 'command1', 'command2'] // Tambahkan perintah yang ingin diterima di grup di sini
        if (commands.includes(m.text.toLowerCase())) return
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let api = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${apichan}&text=${encodeURIComponent(m.text)}&badword=true`)
        let res = await api.json()
        await m.reply(`${res.result}`)
        return true
    }
    return true
}

export default handler