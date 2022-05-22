const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="*Marvel Official*" //ganti nama owner lu
global.ownernumber = "6285892439939" //ganti nomor lu
global.botname = "Marvel Bot" // ganti nama bot lu
global.thumbnail = fs.readFileSync("./settings/logo.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'YOUR_APIKEY' //beli di web nya https://api.lolhuman.xyz/docs
global.dbs = '```' //Biarin aja
global.groupowner = 'https://chat.whatsapp.com/CRcwyGOuMjJ8saPZJgt2va'

// sewa bot
global.sewa1bulan = 'Rp.15.000' //ganti sesuai harga
global.sewa2bulan = 'Rp.25.000' //ganti sesuai harga
global.sewa3bulan = 'Rp.35.000' //ganti sesuai harga
global.sewa4bulan = 'Rp.50.000' //ganti sesuai harga
global.sewapermanen = 'Rp.70.000' //ganti sesuai harga

global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})