exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname, tanggal, time, runtime) =>{
	return`*Hi ${pushname}*, *Selamat ${salam}*
ββββββββββββββββ
π Creator : *Marvel Official*
π€ Owner : ${ownername}
π€ Bot Name : *${botname}*
β° Time Server MARVEL BOTZ : *${time}
π Tanggal : *${tanggal}*
β Jam : *${time}*
π Language : *JavaScript & Nodejs*
π οΈPrefix : *Multi Prefix*
ββββββββββββββββ

β­β€ *List Menu*
ββ #menu
ββ #help
ββ #start
ββ #delete <reply>
ββ #del <reply>
β°ββββββββββββββ

β­ββ€ *Info*
ββ #owner
ββ #daftar
ββ #sewabot
ββ #speed
ββ #grupowner
ββ #gcowner
β°ββββββββββββββ

β­ββ€ *Primbon*
ββ #artinama
ββ #jodoh
ββ #weton
ββ #jadian
ββ #tebakumur
ββ #artinama
β°βββββββββββββ

β­ββ€ *Download*
ββ #play [query]
ββ #song [judul lagu]
ββ #pinterest [query]
ββ #ytmp3 [url]
ββ #ytmp4 [url]
ββ #tiktok [url]
ββ #tiktoknowm [url]
ββ #tiktokwm [url]
ββ #tiktokaudio [url]
ββ #soundcloud [url]
ββ #telesticker [url]
ββ #spotify [url]
ββ #spotifysearch [query]
ββ #nhentai [code]
ββ #nhentaipdf [code]
ββ #nhentaisearch [query]
β°ββββββββββββββ

β­ββ€ *Maker*
ββ #rem <text>
ββ #kaneki <text>
ββ #attp <text>
ββ #ttp <text>
β°ββββββββββββββ

β­ββ€ *Convert*
ββ #stiker [video/image]
ββ #semoji π
ββ #smeme [text]
ββ #memegen [text|text2]
ββ #fast [video/vn]
ββ #tupai [video/vn]
ββ #vibra [video/vn]
ββ #robot [video/vn]
ββ #slow [video/vn]
ββ #bass [video/vn]
ββ #nightcore [video/vn]
β°ββββββββββββββ

β­ββ€ *Education*
ββ #nuliskiri [text]
ββ #nuliskanan [text]
ββ #foliokiri [text]
ββ #foliokanan [text]
β°ββββββββββββββ

β­ββ€ *Islamic*
ββ #listsurah
ββ #alquran
ββ #asmaulhusna
ββ #kisahnabi
ββ #alquranaudio
ββ #jadwalsholat
β°ββββββββββββββ

β­ββ€ *Maker Ephoto360*
ββ #wetglass
ββ #multicolor3d
ββ #watercolor
ββ #luxurygold
ββ #galaxywallpaper
ββ #lighttext
ββ #beautifulflower
ββ #puppycute
ββ #royaltext
ββ #heartshaped
ββ #birthdaycake
ββ #galaxystyle
ββ #hologram3d
ββ #greenneon
ββ #glossychrome
ββ #greenbush
ββ #metallogo
ββ #noeltext
ββ #glittergold
ββ #textcake
ββ #starsnight
ββ #wooden3d
ββ #textbyname
ββ #writegalacy
ββ #galaxybat
ββ #snow3d
ββ #birthdayday
ββ #goldplaybutton
ββ #silverplaybutton
ββ #freefire
β°ββββββββββββββ

β­ββ€ *Maker TextPro*
ββ #blackpink
ββ #neon
ββ #greenneon
ββ #advanceglow
ββ #futureneon
ββ #sandwriting
ββ #sandsummer
ββ #sandengraved
ββ #metaldark
ββ #neonlight
ββ #holographic
ββ #text1917
ββ #minion
ββ #deluxesilver
ββ #newyearcard
ββ #bloodfrosted
ββ #halloween
ββ #jokerlogo
ββ #fireworksparkle
ββ #natureleaves
ββ #bokeh
ββ #toxic
ββ #strawberry
ββ #box3d
ββ #roadwarning
ββ #breakwall
ββ #icecold
ββ #luxury
ββ #cloud
ββ #summersand
ββ #horrorblood
ββ #thunder
β°ββββββββββββββ

β­ββ€ *Funtime*
ββ #tebakgambar
ββ #tolol
ββ #goblok
ββ #lesbi
ββ #pintar
ββ #bodoh
ββ #wibu
ββ #sange
ββ #ganteng
ββ #cantik
β°ββββββββββββββ

β­ββ€ *Sounds*
ββ #sound1
ββ #sound2
ββ #sound3
ββ #sound4
ββ #sound5
ββ #sound6
ββ #sound7
ββ #sound8
ββ #sound9
ββ #sound10
ββ #sound11
ββ #sound12
ββ #sound13
ββ #sound14
ββ #sound15
ββ #sound16
ββ #sound17
ββ #sound18
ββ #sound19
ββ #sound20
β°ββββββββββββββ

β­ββ€ *Searching*
ββ #cuaca
ββ #infogempa
ββ #cerpen
ββ #ceritahoror
ββ #google
β°ββββββββββββββ

β­ββ€ *Info*
ββ #owner
ββ #daftar
ββ #speed
β°ββββββββββββββ

β­ββ€ *Owner*
ββ #setbiobot
ββ #broadcast [text]
ββ #leave
ββ >
ββ $
ββ => 
β°ββββββββββββββ

β­ββ€ *Group*
ββ #antilink 1 / 0
ββ #hidetag [text]
ββ #linkgrup
ββ #tagall
ββ #kick @tag
ββ #setdesc [text] 
ββ #setname [text] 
β°βββββββββββββββββ`
	}