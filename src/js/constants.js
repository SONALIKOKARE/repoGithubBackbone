define(function(require) {

	"use strict";
	/*
		Defines application constants.
	*/
	return {
		"viewSession": {
			"TT": "tt",	
			"WTR": "wtr",	
			"KIT": "kit",	
			"SC": "story",		
			"NR": "rhymes",		
			"SG": "songs"
		},
		"routesURL": {
			"TT":"treksTravels",
			"WTR":"welcometoreading",
			"KIT":"knowit",
			"SC": "classicModule/story",
			"NR": "classicModule/rhymes",
			"SG": "classicModule/songs",
			"watch": "watchVid"
		},
		"watch": {
			"defaultMaxCol": 4,
			"defaultMaxWatches": 12
		},
		"os":{
			"Windows":"Windows",
			"Mac":"Mac",
			"iPhone":"iPhone/iPod",
			"iPad":"iPad",
		},
		"browsers":{
			"Chrome":"Chrome",
			"OmniWeb":"OmniWeb",
			"Safari":"Safari",
			"iCab":"iCab",
			"Konqueror":"Konqueror",
			"Firefox":"Firefox",
			"Explorer":"Explorer",
			"Mozilla":"Mozilla",
		},
		"modal": {
			"mExit": "modal-exit",
			"mNext": "modal-next",
			"mPlay": "modal-play",
			"mPrev": "modal-previous",
			"mStop": "modal-stop"
		},
		"status": {
			"success": "SUCCESS",
			"failure": "FAILURE"
		},
		"scrollTheme": {
			"darkBlue": "darkBlueScroll",
			"orange": "orangeScroll",
			"pinky": "pinkyScroll",
			"red": "redScroll",
			"green": "greenScroll",
			"yellow": "yellowScroll"
		},
		"audioFormat": {
			"MP3": ".mp3",
			"OGG": ".ogg",
			"WAV": ".wav"
		},
		"videoFormat": {
			"MP4": ".mp4",
			"WEBM":".webm",
			"OGG": ".ogg"
		},
		"views": {
			"WTR": {
				"Level0": "A",
				"Level1": "B",
				"Level2": "C",
				"Level3": "D"
			}
		},
		"section": {
			"locations": {
				"topleft": "top-left",
				"topcenter": "top-center",
				"topright": "top-right",
				"centerleft": "center-left",
				"centercenter": "center-center",
				"centerright": "center-right",
				"bottomleft": "bottom-left",
				"bottomcenter": "bottom-center",
				"bottomright": "bottom-right"
			},
			"standImgDim": {
				"small": "362x418",
				"mid": "725x418"
			}
		},
		"relatedMedia": {
			"type": {
				"video": "video",
				"photo": "photo",
				"read": "read",
				"print": "print & do",
				"play": "play",
				"game": "game"
			}
		},
		"knowItCategories": {
			"type": {
				"animalHomes": "Animal Homes",
				"animalSafari": "Animal Safari",
				"creepyCrawlies": "Creepy-Crawlies",
				"dinosaurs": "Rarr! Dinosaurs!",
				"glubGlub": "Glub! Glub! Sea Animals!",
				"meMyselfandI": "Me, Myself, and I",
				"peopleAtWork": "People at Work",
				"plants": "Plants",
				"rainForest": "Rain Forest Animals",
				"vRoom": "Vroom! Vroom!",
				"weather": "Weather"
			}
		},
		"isAutoPlay": false,
		"isFirstTime": true,
		"highlight": {
			"yellow": "highlight-yellow",
			"orange": "highlight-orange",
			"red": "highlight-red",
			"green": "highlight-green",
			"blue": "highlight-blue",
			"pink": "highlight-pink"
		},
		"language": {
			"isSpanish": false
		},
		"trackSwitcher": {
			"printDo": {
				"category": "categoryItem_0"
			}
		},
		"googleAnalytics":{
			"game":"Game",
			"ewol":"Early World of Learning",
			"SC":"Story Corner",
			"NR":"Nursery Rhymes",
			"SG":"Sing-along",
			"videos":"Videos",
			"wtr":"Welcome to Reading",
			"kt":"Know It",
			"tt":"Trek's Travels",
			"pnd":"Print & Do Activities",
			"games":"Games",
			"classic": "Classic"
		}
	};
});
