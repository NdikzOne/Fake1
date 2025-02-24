const { google } = require('googleapis');
const ytdlv2 = require("@xyzteams/scapers");
const fs = require('fs');
const fetch = require('node-fetch');
const yts = require('yt-search');
const { fetchJson, sleep } = require("../functions.js");
const { youtubedl, youtubedlv2 } = require('../scrape/dl-ytplay');

// Inisialisasi YouTube Data API
const youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyA6rcAS8Nu5NK3Oqxk2biiWVjT0TMfmPwk' // Ganti dengan kunci API baru Anda
});

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args || !args[0]) throw `Contoh:\n ${usedPrefix}${command} nama lagu`;

    // Indikator proses
    await m.reply("⏳ Sedang Mencari...");

    try {
        // Pencarian menggunakan YouTube Data API
        let searchResponse = await youtube.search.list({
            part: 'snippet',
            q: text,
            type: 'video',
            maxResults: 1, // Mendapatkan hasil teratas
            order: 'relevance' // Mengurutkan berdasarkan relevansi
        });

        if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
            throw new Error('Tidak ada hasil yang ditemukan.');
        }

        let video = searchResponse.data.items[0];
        let videoId = video.id.videoId;
        let title = video.snippet.title;
        let channel = video.snippet.channelTitle;
        let publishedAt = video.snippet.publishedAt;
        let thumbnail = video.snippet.thumbnails.high.url;
        let videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // Mengirim informasi video
        let captvid = `
*🎵 YOUTUBE PLAY 🎵*

───────────
┊☃︎ *Judul:* ${title}
┊☃︎ *Channel:* ${channel}
┊☃︎ *Upload:* ${new Date(publishedAt).toLocaleDateString()}
───────────
┊☃︎ Download....
┊☃︎ By @${namaowner}
${cmenuf}
        `;

        await conn.sendMessage(m.chat, {
            text: captvid,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Youtube Play by ${namabot}`,
                    thumbnailUrl: thumbnail,
                    sourceUrl: videoUrl,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

        // Mengunduh audio menggunakan btch-downloader atau ytdlv2
       let rasat = await(await fetch(`${neNdikz}api/youtube?url=${videoUrl}&type=audio&quality=128kbps&apikey=${neoapi}`)).json()

        // Membuat dokumen audio
        let doc = { 
            audio: { 
                url: rasat.data.url
            }, 
            mimetype: 'audio/mp4', 
            fileName: `${title}.mp3`, 
            contextInfo: { 
                externalAdReply: { 
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: sgc, // Pastikan 'sgc' didefinisikan
                    title: title,
                    body: namabot,
                    sourceUrl: videoUrl,
                    thumbnail: await (await conn.getFile(thumbnail)).data                                                                     
                }
            }
        };

        // Mengirim audio sebagai dokumen
        await conn.sendMessage(m.chat, doc, { quoted: m });

        // Reaksi sukses
        await conn.sendMessage(m.chat, {
            react: {
                text: "✅",
                key: m.key,
            }
        });

    } catch (error) {
        console.error("Error:", error);
        await m.reply(`❗️ Terjadi kesalahan: ${error.message}\nSilakan coba lagi atau gunakan perintah yang berbeda.`);
    }
};

handler.help = ['play'].map(v => v + ' <nama lagu>');
handler.tags = ['downloader'];
handler.command = /^(play)$/i;
handler.limit = 5;

module.exports = handler;

// Fungsi tambahan tetap sama seperti sebelumnya
async function convertToUrl(buffer) {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const fs = require('fs');
    try {
        const form = new FormData();
        form.append('file', buffer, { filename: 'video.mp3' });

        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        const data = await uploadResponse.json();

        if (uploadResponse.ok) {
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function ytmp3(url) {
    const ytdl = require("@distube/ytdl-core");
    try {
        const { videoDetails } = await ytdl.getInfo(url, { lang: "id" });

        const stream = ytdl(url, { filter: "audioonly", quality: 140 });
        const chunks = [];

        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });

        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });

        const buffer = Buffer.concat(chunks);

        return {
            meta: {
                title: videoDetails.title,
                channel: videoDetails.author.name,
                seconds: videoDetails.lengthSeconds,
                description: videoDetails.description,
                image: videoDetails.thumbnails.slice(-1)[0].url,
            },
            buffer: buffer,
            size: buffer.length,
        };
    } catch (error) {
        throw error;
    }
}