const filmy = [
	{
		id: 'pelisky',
		nazev: 'Pelíšky',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
			sirka: 663,
			vyska: 909,
		},
		ochutnavka: 'České drama z období 1968.',
		popis:
			'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
		premiera: '2019-04-08',
	},
	{
		id: 'promlceno',
		nazev: 'Promlčeno',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
			sirka: 420,
			vyska: 595,
		},
		ochutnavka: 'Český krimi thriller s Karlem Rodenem.',
		popis:
			'Šokující živé vysílaní, které během chvíle změní životy několika nevinných lidí. Radek (Karel Roden) se po téměř dvaceti letech nečekaně vrací do svého rodného města, aby zde nalezl jistou mladou ženu a jednou provždy se vyrovnal se svou minulostí. V pátrání po neznámé ženě mu pomáhá Eva, ambiciózní rozhlasová moderátorka, která jeho příběh dostane do své živě vysílané noční show. Chtěla mít ve vysílání senzační událost, ale k jejímu zděšení a ke zděšení všech posluchačů začne na povrch vyplouvat něco, s čím nikdo nepočítal. Svůj plán připravoval Radek několik let a během jeho vyprávění je do pochmurného příběhu vtažena nejen ona sama, ale i pražská kriminálka a další aktéři dlouho zapomenutých událostí. Začíná napínavý boj o čas a o spravedlnost. Opravdu už je vše nenávratně promlčeno? (csfd.cz, Bontonfilm)',
		premiera: '2022-04-28',
	},
	{
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},
	{
		id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
			sirka: 663,
			vyska: 919,
		},
		ochutnavka: 'Francouzská komedie.',
		popis:
			'Pred 35 000 rokmi v časoch, kedy bol boj o oheň už dávno vybojovaný, prišiel na rad šampón, kvôli ktorému bol spáchaný prvý zločin v histórii ľudstva. Dva praveké kmene, Špinavovlasých a Čistovlasých žijú v harmónii a mieri až do chvíle, keď si Špinavovlasí uvedomia, že sa od susedného kmeňa líšia... Čistotou vlasov. Ale tajnú receptúru na peniacu zmes majú iba Čistovlasí a tí sa o ňu nechcú podeliť... Čistovlasí až doteraz žili pokojný, šťastný a čistý život. Nikoho z nich nenapadlo, že by im mohol niekto závidieť ich krásne čisté vlasy. Dokonca ani špinavý a smradľavý susedný kmeň Špinavovlasých. Ale v jednu noc sa to stalo. Po prvý raz v histórii ľudstva bol spáchaný zločin. Človek zabil človeka... Čo bolo vlastne jeho motívom? Kto vyrieši tento záhadný rébus? Čo ak je táto vrrrrražda iba začiatkom hrôzostrašnej série? Všetky tieto otázky začínajú riešiť prrrrehistorickí vyšetrovatelia. Začína sa prrrraveká špionáž a s ňou prichádza aj prvý vyšetrovaný zločin v dejinách ľudskej spoločnosti. Zažijete prvé vypočúvania, sledovania a podozrievania. V bláznivej komédii režiséra Chabata vstúpite do prrrrehistorickej doby, kedy bola platená starostlivosť o deti nutnosťou, profesionálny volejbal zábavou a sledovanie nástenných malieb ako predchodcov televízie samozrejmosťou. Nezľaknite sa hrôzostrašných zvukov vychádzajúcich z jaskýň. Podmienky základných ľudských potrieb, boli pred 35 000 rokmi nedokonalé. (csfd.cz, oficiální text distributora)',
		premiera: '2004-09-23',
	},
	{
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
	{
		id: 'kimi',
		nazev: 'KIMI',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
			sirka: 420,
			vyska: 622,
		},
		ochutnavka: 'Americký thriller o IT pracovnici s agorafobií.',
		popis:
			'Pracovnice IT oddělení trpící agorafobií najde nahrávku násilného trestného činu a nahlásí ji svým nadřízeným. Uvědomuje si však, že bude muset opustit svůj byt, aby mohl být zločin vyšetřen. (csfd.cz, HBO Max)',
		premiera: '2022-02-10',
	},
	{
		id: 'petrolejove-lampy',
		nazev: 'Petrolejové lampy',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
			sirka: 663,
			vyska: 937,
		},
		ochutnavka: 'Sugestivní filmové drama podle románu Jaroslava Havlíčka.',
		popis:
			'Sugestivní filmové drama Petrolejové lampy natočil Juraj Herz podle stejnojmenného románu Jaroslava Havlíčka. Vypráví v něm tragický příběh stárnoucí dívky Štěpy, žijící na přelomu století v dusném prostředí českého maloměsta, v ovzduší nepochopení a předstíraných citů, přetvářky a falše. Štěpě jsou neustále matkou vnucováni adepti na ženění, kteří ovšem musejí pocházet z téhož okruhu jako ona. Štěpa je však jiná než ostatní dívky. Jakoby zasažena duchem emancipace vyslouží si pověst dívky volných mravů a ta přirozeně nápadníky z řad městské honorace odrazuje. Než by se stala starou pannou, provdá se za bratrance, zkrachovalého důstojníka. V den svatby ale ještě netuší, jaká strašlivá nemoc pronásleduje jejího ženicha... Pečlivě rekonstruované období secese v sobě tají osudové lidské trápení: stárnoucí dívka z rodiny maloměstské honorace se dočká svého štěstí, když se provdá na pohledného důstojníka. Netuší ovšem, že muž trpí zhoubnou pohlavní chorobu - s marnou obětavostí pak o něho pečuje, vystavena zlomyslnému posměchu svého okolí. Vynikající, stále sugestivní snímek Juraje Herze se opírá o procítěné, jemně odstíněné herecké výkony Ivy Janžurové a Petra Čepka. (csfd.cz, oficiální text distributora)',
		premiera: '1971-10-01',
	},
	{
		id: 'krakonosovo-tajemstvi',
		nazev: 'Krakonošovo tajemství',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Česká vánoční pohádka z Krkonoš.',
		popis:
			'Na zámek v podhůří Krkonoš přijíždí jeho nový majitel Štěpán se svojí snoubenkou, krásnou komtesou Blankou, a mladším bratrem Adamem. Cestou kočár nešťastně srazí kolemjdoucí dívku, Adam jí pomůže a ona se do něj zamiluje. Na zámku Adam objeví starou vlašskou knihu, která by měla obsahovat cestu k pokladům. Tajemné značky vlašské knihy však nedokáže vyluštit ani národopisec Jiráček, který v kraji sbírá pověsti a nevychází z údivu nad tím, že zdejší lidé stále věří v Krakonoše. Na zámku se objeví záhadný cizinec a nabídne Štěpánovi, že jej k pokladu za určitých podmínek dovede. Výprava do hor může začít. Naplní se Liduščina láska k Adamovi? Jakou záhadu skrývá starý obraz na zámku Hůrka a co strašlivého se v horách kdysi odehrálo? A kdo je vlastně Krakonoš a jaké je jeho největší tajemství? (csfd.cz, Česká televize)',
		premiera: '2022-12-24',
	},
	{
		id: 'zelena-mile',
		nazev: 'Zelená míle',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/000/073/73224_ac1b7n.jpg',
			sirka: 401,
			vyska: 650,
		},
		ochutnavka: 'Americké drama zpracované podle knihy Stephena Kinga.',
		popis:
			'Paul Edgecomb se vrací ve vzpomínkách do roku 1935, kdy byl zaměstnán v louisianské věznici jako hlavní dozorce. Tenkrát se tam setkal s výjimečným, byť duchem prostým mužem, který byl obdařen nejen velkým srdcem, ale také nadpozemskými schopnostmi. Byl to John Coffey, neprávem odsouzený na smrt za vraždu dvou malých holčiček. V té době trpěl Paul těžkým zánětem močového měchýře a také neměl šanci zbavit se sadistického, všemi nenáviděného dozorce Percyho. Jednoho dne chce s Paulem mluvit Coffey. Když se k němu přiblíží, chytí ho rukou v rozkroku, pak šokovaného Paula pustí a on uvidí, jak černoch vypustil z úst černý oblak, a současně si uvědomí, že jeho bolestivý zánět zmizel. Coffey má zvláštní schopnost, díky které vyléčí ženu správce věznice, ke které ho tajně v noci převezou, dokonce oživí cvičenou myš jednoho vězně, kterou zabil zlomyslný Percy. John Coffey, kterého čeká smrt, přijímá svůj úděl odevzdaně a bez hořkosti. (csfd.cz)',
		premiera: '1999-12-10',
	},
]

//bod číslo 5 a 6, extra bonus chybí
//vypis detailu filmu podle id + prace s knihovnou dayjs

const filmID = window.location.hash.slice(1)

const currentFilm = filmy.find((film) => film.id === filmID)

const mainElement = document.querySelector("#detail-filmu")

mainElement.innerHTML = `
<div class="container-lg mt-5">
			<div class="card mb-3" id="detail-filmu">
				<div class="row g-0">
					<div class="col-md-5">
						<img
							src="${currentFilm.plakat.url}"
							alt="plakát"
							class="img-fluid rounded-start"
							width="${currentFilm.plakat.sirka}"
							height="${currentFilm.plakat.vyska}"
						/>
					</div>
					<div class="col-md-7">
						<div class="card-body">
							<h5 class="card-title">${currentFilm.nazev}</h5>
							<p class="card-text">${currentFilm.popis}</p>
							<p class="card-text">
								<small class="text-muted" id="premiera">Premiéra <strong>${dayjs(currentFilm.premiera).format("DD.MM.YYYY")}</strong>, což bylo před ${Math.abs(dayjs(currentFilm.premiera).diff(dayjs(), 'days'))} dny.</small
								>
							</p>
							<h6>Hodnocení</h6>
							<div class="stars">
								<button
									class="far fa-star button-star"
									data-mdb-toggle="tooltip"
									title="Nic moc"
								>
									1
								</button>
								<button
									class="far fa-star button-star"
									data-mdb-toggle="tooltip"
									title="Ucházející"
								>
									2
								</button>
								<button
									class="far fa-star button-star"
									data-mdb-toggle="tooltip"
									title="Dobrý"
								>
									3
								</button>
								<button
									class="far fa-star button-star"
									data-mdb-toggle="tooltip"
									title="Skvělý"
								>
									4
								</button>
								<button
									class="far fa-star button-star"
									data-mdb-toggle="tooltip"
									title="Úžasný"
								>
									5
								</button>
							</div>

							<h6 class="mt-4">Poznámka</h6>
							<form id="note-form">
								<div class="row">
									<div class="col-md-6 col-lg-7 col-xl-8 mb-2">
										<div class="form-outline">
											<textarea
												class="form-control"
												id="message-input"
												rows="4"
											></textarea>
											<label class="form-label" for="message-input"
												>Text poznámky</label
											>
										</div>
									</div>
									<div class="col-md-6 col-lg-5 col-xl-4">
										<div class="form-check d-flex justify-content-center mb-2">
											<input
												class="form-check-input me-2 mb-2"
												type="checkbox"
												value=""
												id="terms-checkbox"
											/>
											<label class="form-check-label" for="terms-checkbox">
												Souhlasím se všeobecnými podmínky užívání.
											</label>
										</div>
										<button type="submit" class="btn btn-primary btn-block">
											Uložit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
							
		`
//bod číslo 7
//hodnoceni pomoci hvezdicek

const highlightStars = (number) => {
	const stars = document.querySelectorAll(".fa-star")

	stars.forEach((star, index) => {
		if (index < number) {
			star.classList.remove("far")
			star.classList.add("fas")
		} else {
			star.classList.remove("fas")
			star.classList.add("far")
		}
	})
}

document.querySelectorAll(".fa-star").forEach(star => {
	star.addEventListener("click", (e) => {
		const starValue = e.target.textContent

		highlightStars(starValue)
	})

	star.addEventListener("mouseenter", (e) => {
		const starValue = e.target.textContent

		highlightStars(starValue)
	})

	star.addEventListener("mouseleave", (e) => {
		const selectedValue = document.querySelector(".fa-star.fas")
		const starValue = selectedValue ? e.target.textContent : 0

		highlightStars(starValue)
	})
	
})


//bod číslo 8
//pridani komentare

document.querySelector("#note-form").addEventListener("submit", (e) => {
	e.preventDefault()
		
	const messageInput = document.querySelector("#message-input")
	const checkbox = document.querySelector("#terms-checkbox")
	const note = document.querySelector("#note-form")

	if (messageInput.value === "") {
		messageInput.classList.add("is-invalid")
		messageInput.focus()
	} else if (!checkbox.checked) {
		checkbox.classList.add("is-invalid")
		checkbox.focus()
	} else {
		note.innerHTML = `<p class="card-text">${messageInput.value}</p>`
	}
	})

//bod číslo 9 není dodělaný bonus

document.querySelector("#prehravac").addEventListener("click", (e) => {
	const video = document.querySelector("video")
	const prehravac = document.querySelector("#prehravac")
	const pauseButton = prehravac.querySelector(".pause")
	const playButton = prehravac.querySelector(".play")
	const currentTimeElement = document.querySelector(".current-time")

	playButton.addEventListener("click", () => {
        video.play()
    })

	video.addEventListener("playing", (e) => {
		prehravac.classList.add("playing")
	})

    pauseButton.addEventListener("click", (e) => {
	video.pause()
	})

	video.addEventListener("pause", (e) => {
		prehravac.classList.remove("playing")
	})

	video.addEventListener("timeupdate", (e) => {
		const currentTime = video.currentTime
		const minutes = Math.floor(currentTime / 60)
		const seconds = Math.floor(currentTime % 60)
		const formatedTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`

        currentTimeElement.textContent = formatedTime
	})
})


/*

Bonus

Spusťte/pozastavte přehrávání, pokud uživatel na stránce zmáčkne klávesu mezerník.

Všimněte si, že video se pozastavuje a přehrává, když uživatel píše do formuláře pro poznámku text a dělá u toho mezery. Spusťte/pozastavte přehrávání pouze v případě, že uživatel nebyl ve formuláři, když mačkal mezerník.

if (
event.code === 'Space' &&
event.target.tagName !== 'TEXTAREA' &&
event.target.tagName !== 'INPUT' &&
event.target.tagName !== 'BUTTON'
) {
// …
}

Extra bonus
Skryjte ovládací panel, pokud uživatel po dobu tří sekund nepohnul myší ani nestiskl žádnou klávesu. Využijte časovač. S každým pohnutím nebo stiskem ho zrušte a nastavte znovu na tři sekundy. Po uplynutí přidejte prvku .player-controls třídu hidden. Pro opětovné zobrazení (s každým pohybem, stiskem) třídu hidden zase odeberte, aby se ovládání zpět objevilo.
*/
