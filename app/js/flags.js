import {data} from './data.js'
import {_shuffle, _randomNumber} from './global.js'

const BASE_URL = 'https://mariiishka.github.io/flads-data/flags.json'

const $ = {};
window.$ = $;


$.game = function(params) {

	let cont = params.continent;
	let flagsContinent = [];
	let newArr;
	let score = 0;
	let newData;
	let isStarted = false;

	function getArray(data) {
		switch(cont) {
			case 'europe':
				flagsContinent = data.europe
				break;
			case 'southaAerica':
				flagsContinent = data.southAmerica
				break;
			default:
				flagsContinent = data.europe
		}
	}

	data(BASE_URL, getArray)

	const game = {
		
		starting() {
			newArr = []
			params.containerStart.classList.add('hiding')
			params.containerFlag.classList.add('hiding')
			newData = _shuffle(flagsContinent).slice(0, params.amount)
			newData.forEach((dat) => {
				newArr.push(dat)
			})
			setTimeout(() => {
				params.containerStart.remove()
				setTimeout(() => {
					params.containerFlag.classList.remove('hiding')
				}, 2900)
			}, 2900)
		},
		gameStarted() {
			let arrId = flagsContinent.map((item) => item.url)
			
			params.btnsCountry.forEach((cont) => {
				let arrLength = arrId.length
				let randomNum = arrId[_randomNumber(1, arrLength -1)]

				cont.innerHTML = flagsContinent[randomNum].name

				
				let indexed = arrId.indexOf(randomNum)
				arrId.splice(indexed, 1)
				return arrId
			})

			params.flag.innerHTML = `<img src="../img/${params.continent}/${newArr[0].url}.png" alt="flag">`
			let rand = _randomNumber(1, 5) - 1
			params.btnsCountry[rand].innerHTML = newArr[0].name 
		},
		isCorrect(event) {
			let current = flagsContinent.find((c) => {
				return c.url == newArr[0].url
			 }).name
			 
			 if(event.target.innerText == current) {
				 event.target.classList.add('true')
				 score++
				 setTimeout(() => {
					event.target.classList.remove('true')
				 }, 500)
			 } else {
				 event.target.classList.add('false')
				 setTimeout(() => {
					 event.target.classList.remove('false')
				 }, 500)
			 }
			 newArr.splice(0, 1)
		},
		restart() {
			score = 0;
			params.containerCount.innerText = `Score: ${score}`;
			game.starting()
			game.gameStarted()
		}
	}
	
	
	params.btnsCountry.forEach((btn) => {
		btn.addEventListener('click', () => {
			
			if(newArr.length > 0) {
				game.isCorrect(event)
				params.containerCount.innerText = `Score: ${score}`;
				if(newArr.length > 0) {
					setTimeout(() => {
						game.gameStarted()
					}, 1000)
				} else {
					setTimeout(() => {
						alert(`${score}`)
						game.restart()
					}, 500)
				}

			} 
		})
	})

	const listener = (event) => {
		const eTarget = event.target.classList
		
		if (eTarget.contains(params.btnStart)) {
			game.starting()
			game.gameStarted()
			isStarted = true
		} 

		if (eTarget.contains(params.btnRestart)) {
			game.restart()
		}
	}

	document.addEventListener('click', listener)

	return game
}

const game = $.game({
	continent: 'europe',
	amount: '15',
	containerStart: document.querySelector('.flag-start'),
	btnStart: 'js-start',
	containerFlag: document.querySelector('.flag-game'),
	flag: document.querySelector('.js-flag'),
	btnsCountry: document.querySelectorAll('.js-country'),
	containerCount: document.querySelector('.js-count'),
	btnRestart: 'js-restart'
})

