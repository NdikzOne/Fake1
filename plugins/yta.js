const {
    youtubedl,
    youtubedlv2
} = require("@bochilteam/scraper")
const ytdl = require ("@distube/ytdl-core")
const ytdlv2 = require("@xyzteams/scapers");

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!(args[0].includes('http://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(`Invalid Youtuber URL.`)
 //   if (!args[0]) throw `*• Example:* ${usedPrefix + command} https://youtu.be/xxxx`
    m.reply(wait)
    try {
        let ahh = await getBuffer(`${webapi}api/canvas/YoutubeThumb?url=${args[0]}&apikey=${apichan}`)
        let rasat = await(await fetch(`${webapi}api/downloader/youtube-audio?url=${args[0]}&apikey=${apichan}`)).json()
        if(!rasat.data) return m.reply(rasat.message)
        let cap = `
*${cmenut} YOUTUBE ${cmenuh}*

*${dmenub} Title:* ${rasat.data.title}
*${dmenub} Type:* mp3
*${dmenub} Filesize:* -

${cmenuf}
*L O A D I N G. . .*
`
await conn.sendFile(m.chat, ahh, 'image/jpg', cap, m);
        // Membuat dokumen audio
        let doc = { 
            audio: { 
                url: rasat.data.url 
            }, 
            mimetype: 'audio/mp4', 
            fileName: `${rasat.data.title}.mp3`, 
            contextInfo: { 
                externalAdReply: { 
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: sgc, // Pastikan 'sgc' didefinisikan
                    title: rasat.data.title,
                    body: namabot,
                    sourceUrl: args[0],
                    thumbnail: await (await conn.getFile(rasat.data.thumb)).data                                                                     
                }
            }
        };

        // Mengirim audio sebagai dokumen
        await conn.sendMessage(m.chat, doc, { quoted: m });
        await conn.sendMessage(m.chat, { document: { url:  rasat.data.url }, mimetype: 'document', fileName: `${rasat.data.title}.mp3`}, {quoted: m})

    } catch(e) {
        console.log(e)
        try {

            let dat = await(await fetch(`${neNdikz}api/youtube?url=${args[0]}&type=audio&quality=128kbps&apikey=${neoapi}`)).json()
            let yt = dat.data
            let ytl = "https://youtube.com/watch?v="
            let dls = "Download audio succes ( V2 )"
            let ytthumb = await (await conn.getFile(yt.thumbnail)).data
            let doc = {
                audio: {
                    url: yt.url
                },
                mimetype: "audio/mp4",
                fileName: yt.filename,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: ytl + yt.id,
                        title: yt.title,
                        body: dls,
                        sourceUrl: ytl + yt.id,
                        thumbnail: ytthumb
                    }
                }
            }

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            })

        } catch (eror) {
        m.reply(eror)
        }
    }
}
handler.help = ["mp3", "a"].map(v => "yt" + v + ` *[url YouTube]*`)
handler.tags = ["downloader"]
handler.command = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i
module.exports = handler

async function ytmp3(url) {
    try {
        const {
            videoDetails
        } = await ytdl.getInfo(url, {
            lang: "id"
        });

        const stream = ytdl(url, {
            filter: "audioonly",
            quality: 140
        });
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
};

async function getBuffer(url, options) {
        try {
                options ? options : {}
                const res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}