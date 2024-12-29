const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
const FormData = require('form-data');
const axios = require('axios')
module.exports = {
	async before(m) {
        let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/bd49b3a2274bde2fb3c3a.jpg')
        let ppUrl = await convertToTelegraph(pp)
        let media = `${webapi}api/canvas/levelup?pp=${ppUrl}&apikey=${apichan}`
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `*❑ L E V E L - UP*\n
*${before}* -> *${user.level}*
Use *.level* to check`.trim()
			conn.sendFile(m.chat, media, null, chating, m)
			console.log(color(chating, 'pink'))
		}
	}
}
async function convertToTelegraph(imageUrl) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {
        // Mengunduh gambar dari URL
        const response = await fetch(imageUrl);
        const buffer = await response.buffer();

        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'image.jpg' });

        // Kirim permintaan untuk mengunggah file ke tmpfiles.org
        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        // Mendapatkan respons JSON
        const data = await uploadResponse.json();

        // Cek jika respons sukses
        if (uploadResponse.ok) {
          //  console.log(data.data.url)
            // Kembalikan URL file yang diunggah
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error accordingly
        return null;
    }
}
