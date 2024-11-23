require("./module")

global.owner = "243974881248" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "ͲՏᎻ_ᏴႮᏀ-ᏀϴᏦႮ-Ꮩ2" //NAMA BOT GANTI
global.namaCreator = "🌹𝐌𝐑 𝐊𝐄́𝐕𝐈𝐍 𝐓𝐒𝐇🌹" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.imageurl = 'https://i.postimg.cc/brsSFQrS/TSH-BUG-GOKU-V2.jpg' //GANTI PP MU MENGGUNAKAN LINK
global.isLink = 'https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = '✘' //GANTI AJA BEBAS
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "𝗧𝗛𝗘 𝗙𝗠𝗟-𝗚𝗥𝗜𝗠𝗠" //GANTI AJ
global.author = "🌹𝐌𝐑 𝐊𝐄́𝐕𝐈𝐍 𝐓𝐒𝐇🌹" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})