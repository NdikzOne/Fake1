let handler = async (m, { conn, usedPrefix }) => {
    conn.pilihanganda = conn.pilihanganda ? conn.pilihanganda : {};
    let id = m.sender;
    let timeout = 20000;
    let poin = `${Math.floor(Math.random() * 5000)}`
    let tiketcoin = 1;

    if (id in conn.pilihanganda) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.pilihanganda[id][0]);
    }

    let src = await fetch(`${neNdikz}api/pilgan?apikey=${neoapi}`)
  let vas = await src.json()
  let json = vas.data
    let teks = `
${json.question}

Selection: ${json.selection}
Timeout: *${(timeout / 1000).toFixed(2)} detik*
ketik suren untuk menyerah
Bonus: ${poin} XP
TiketCoin: ${tiketcoin} Tiketcoin
`.trim();

    let msg = await conn.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                title: "",
                body: wm,
                thumbnailUrl: thumb,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

    let { key } = msg;

    conn.pilihanganda[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.pilihanganda[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.answer}* karena: *${json.explanation}*`, conn.pilihanganda[id][0]);
                delete conn.pilihanganda[id];
            }
        }, timeout),
        key
    ];
}

handler.help = ['pilihan ganda'];
handler.tags = ['game'];
handler.command = /^pilihanganda/i;
handler.limit = true;
handler.group = false;

module.exports = handler;