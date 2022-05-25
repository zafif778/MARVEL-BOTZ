exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname, tanggal, time, runtime) =>{
	return`*Hi ${pushname}*, *Selamat ${salam}*
────────────────
👑 Creator : *Marvel Official*
👤 Owner : ${ownername}
🤖 Bot Name : *${botname}*
⏰ Time Server MARVEL BOTZ : *${time}
📆 Tanggal : *${tanggal}*
⌚ Jam : *${time}*
🌐 Language : *JavaScript & Nodejs*
🗒 ️Prefix : *Multi Prefix*
────────────────

╭➤ *List Menu*
│❏ #menu
│❏ #help
│❏ #start
│❏ #delete <reply>
│❏ #del <reply>
╰──────────────

╭─➤ *Info*
│❏ #owner
│❏ #daftar
│❏ #sewabot
│❏ #speed
│❏ #grupowner
│❏ #gcowner
╰──────────────

╭─➤ *Primbon*
│❏ #artinama
│❏ #jodoh
│❏ #weton
│❏ #jadian
│❏ #tebakumur
│❏ #artinama
╰─────────────

╭─➤ *Download*
│❏ #play [query]
│❏ #song [judul lagu]
│❏ #pinterest [query]
│❏ #ytmp3 [url]
│❏ #ytmp4 [url]
│❏ #tiktok [url]
│❏ #tiktoknowm [url]
│❏ #tiktokwm [url]
│❏ #tiktokaudio [url]
│❏ #soundcloud [url]
│❏ #telesticker [url]
│❏ #spotify [url]
│❏ #spotifysearch [query]
│❏ #nhentai [code]
│❏ #nhentaipdf [code]
│❏ #nhentaisearch [query]
╰──────────────

╭─➤ *Maker*
│❏ #rem <text>
│❏ #kaneki <text>
│❏ #attp <text>
│❏ #ttp <text>
╰──────────────

╭─➤ *Convert*
│❏ #stiker [video/image]
│❏ #semoji 😎
│❏ #smeme [text]
│❏ #memegen [text|text2]
│❏ #fast [video/vn]
│❏ #tupai [video/vn]
│❏ #vibra [video/vn]
│❏ #robot [video/vn]
│❏ #slow [video/vn]
│❏ #bass [video/vn]
│❏ #nightcore [video/vn]
╰──────────────

╭─➤ *Education*
│❏ #nuliskiri [text]
│❏ #nuliskanan [text]
│❏ #foliokiri [text]
│❏ #foliokanan [text]
╰──────────────

╭─➤ *Islamic*
│❏ #listsurah
│❏ #alquran
│❏ #asmaulhusna
│❏ #kisahnabi
│❏ #alquranaudio
│❏ #jadwalsholat
╰──────────────

╭─➤ *Maker Ephoto360*
│❏ #wetglass
│❏ #multicolor3d
│❏ #watercolor
│❏ #luxurygold
│❏ #galaxywallpaper
│❏ #lighttext
│❏ #beautifulflower
│❏ #puppycute
│❏ #royaltext
│❏ #heartshaped
│❏ #birthdaycake
│❏ #galaxystyle
│❏ #hologram3d
│❏ #greenneon
│❏ #glossychrome
│❏ #greenbush
│❏ #metallogo
│❏ #noeltext
│❏ #glittergold
│❏ #textcake
│❏ #starsnight
│❏ #wooden3d
│❏ #textbyname
│❏ #writegalacy
│❏ #galaxybat
│❏ #snow3d
│❏ #birthdayday
│❏ #goldplaybutton
│❏ #silverplaybutton
│❏ #freefire
╰──────────────

╭─➤ *Maker TextPro*
│❏ #blackpink
│❏ #neon
│❏ #greenneon
│❏ #advanceglow
│❏ #futureneon
│❏ #sandwriting
│❏ #sandsummer
│❏ #sandengraved
│❏ #metaldark
│❏ #neonlight
│❏ #holographic
│❏ #text1917
│❏ #minion
│❏ #deluxesilver
│❏ #newyearcard
│❏ #bloodfrosted
│❏ #halloween
│❏ #jokerlogo
│❏ #fireworksparkle
│❏ #natureleaves
│❏ #bokeh
│❏ #toxic
│❏ #strawberry
│❏ #box3d
│❏ #roadwarning
│❏ #breakwall
│❏ #icecold
│❏ #luxury
│❏ #cloud
│❏ #summersand
│❏ #horrorblood
│❏ #thunder
╰──────────────

╭─➤ *Funtime*
│❏ #tebakgambar
│❏ #tolol
│❏ #goblok
│❏ #lesbi
│❏ #pintar
│❏ #bodoh
│❏ #wibu
│❏ #sange
│❏ #ganteng
│❏ #cantik
╰──────────────

╭─➤ *Sounds*
│❏ #sound1
│❏ #sound2
│❏ #sound3
│❏ #sound4
│❏ #sound5
│❏ #sound6
│❏ #sound7
│❏ #sound8
│❏ #sound9
│❏ #sound10
│❏ #sound11
│❏ #sound12
│❏ #sound13
│❏ #sound14
│❏ #sound15
│❏ #sound16
│❏ #sound17
│❏ #sound18
│❏ #sound19
│❏ #sound20
╰──────────────

╭─➤ *Searching*
│❏ #cuaca
│❏ #infogempa
│❏ #cerpen
│❏ #ceritahoror
│❏ #google
╰──────────────

╭─➤ *Info*
│❏ #owner
│❏ #daftar
│❏ #speed
╰──────────────

╭─➤ *Owner*
│❏ #setbiobot
│❏ #broadcast [text]
│❏ #leave
│❏ >
│❏ $
│❏ => 
╰──────────────

╭─➤ *Group*
│❏ #antilink 1 / 0
│❏ #hidetag [text]
│❏ #linkgrup
│❏ #tagall
│❏ #kick @tag
│❏ #setdesc [text] 
│❏ #setname [text] 
╰─────────────────`
	}