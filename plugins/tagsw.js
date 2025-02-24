let fetch = require('node-fetch')
import baileys from "@adiwajshing/baileys"
let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require("@adiwajshing/baileys") 
let handler = async (m, { conn, command, args }) => {
  let text = args.length ? args.join(" ") : m.quoted?.text
  if (!text) throw "Tidak ada text yang diberikan!"

  const sendStatusMention = async (content, jids) => {
    jids = jids.map((v) => v.replace(/\D/g, "") + "@s.whatsapp.net")
let gc = m.chat
    const media = await baileys.generateWAMessage(baileys.STORIES_JID, {
      caption: content.caption || "",
      text: content.caption || "",
    }, {
      upload: conn.waUploadToServer,
    })

    const additionalNodes = [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: jids.map((jid) => ({
              tag: "to",
              attrs: { jid: gc },
              content: undefined,
            })),
          },
        ],
      },
    ]

    await conn.relayMessage(baileys.STORIES_JID, media.message, {
      messageId: media.key.id,
      statusJidList: (await conn.groupMetadata(gc)).participants.map((num) => num.id),
      additionalNodes,
    })

    await Promise.all(
      jids.map(async (jid) => {
        const msg = await baileys.generateWAMessageFromContent(
          jid,
          {
            statusMentionMessage: {
              message: {
                protocolMessage: {
                  key: media.key,
                  type: 25,
                },
              },
            },
          },
          {}
        )

        await conn.relayMessage(jid, msg.message, {
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "true" },
              content: undefined,
            },
          ],
        })
      })
    )

    return media
  }
  sendStatusMention(
    {
      caption: text,
    },
    [m.chat]
  )
    .then(async (res) => {
      await conn.reply(m.chat, `Berhasil mengupload sw`, res)
    })
    .catch(async (err) => {
      await conn.reply(conn.user.jid, `Gagal upload sw: ${err.message || err}`, m)
    })
}

handler.help = ["tagsw (text)"]
handler.tags = ["owner"]
handler.command = /^(tagsw)$/i
handler.rowner = true
module.exports = handler