let handler = async m => m.reply(`[ PRICELIST PANEL ]
Toko Name : Store.Ndikz
Admin : NdikzOne

⬇️ List Harga Panel (Normal)  :
• 1gb 35% CPU 12K / Bulan
• 2gb 60% CPU 17K / Bulan
• 3gb 85% CPU 22K / Bulan
• 4gb 100% CPU 27K / Bulan
• 5gb 135% CPU 32K / Bulan
• 6gb 150% CPU 37K / Bulan
• 7gb 180% CPU 42K / Bulan

PAKET SPECIAL HOT 🔥

🔥 Paket Extra Normal
Unlimited = 32K/1 Bulan
🔥 Paket Extra Standar
Unlimited = 42K/2bulan
🔥 Paket Extra Hot SPECIAL
Unlimited = 52K/4bulan

ℹ️ Keuntungan Panel :
• On 24Jam Tanpa Henti
• Fast Respon
• No delay
• No ribet

🛍️ Keuntungan Belanja Di Store NdikzOne?
• Garansi 28hari
• Pelayanan Harga Murah
• Boleh Nego / Nyicil
• Terjamin Amanah & Aman


𝗩𝗜𝗔 𝗣𝗘𝗠𝗕𝗔𝗬𝗔𝗥𝗔𝗡
➪ (QRIS)
➪ Gopay
➪ Dana
➪ Ovo
➪ Qris
➪ ShopeePay
➪ Bank (BCA)

Website :
ndikz-one-profile.vercel.app

© 2023 Ndikz One
`.trim()) // Tambah sendiri kalo mau
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^panel$/i

module.exports = handler