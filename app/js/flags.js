const flagsEurope = [
    {
        url: '1',
        name: 'Албания',
        capital: 'Тирана'
    },
    {
        url: '2',
        name: 'Андорра',
        capital: 'Андорра-ла-Велья'
    },
    {
        url: '3',
        name: 'Армения',
        capital: 'Ереван'
    },
    {
        url: '4',
        name: 'Австрия',
        capital: 'Вена'
    },
    {
        url: '5',
        name: 'Азербайджан',
        capital: 'Баку'
    },
    {
        url: '6',
        name: 'Бельгия',
        capital: 'Брюссель'
    },
    {
        url: '7',
        name: 'Босния и Герцеговина',
        capital: 'Сараево'
    },
    {
        url: '8',
        name: 'Болгария',
        capital: 'София'
    },
    {
        url: '9',
        name: 'Хорватия',
        capital: 'Загреб'
    },
    {
        url: '10',
        name: 'Кипр',
        capital: 'Никосия'
    },
    {
        url: '11',
        name: 'Чешская Республика',
        capital: 'Прага'
    },
    {
        url: '12',
        name: 'Дания',
        capital: 'Копенгаген'
    },
    {
        url: '13',
        name: 'Венгрия',
        capital: 'Будапешт'
    },
    {
        url: '14',
        name: 'Ватикан',
        capital: 'Святой Престол'
    },
    {
        url: '15',
        name: 'Польша',
        capital: 'Варшава'
    },
    {
        url: '16',
        name: 'Испания',
        capital: 'Мадрид'
    },
    {
        url: '17',
        name: 'Италия',
        capital: 'Барселона'
    },
    {
        url: '18',
        name: 'Фарнция',
        capital: 'Париж'
    },
    {
        url: '19',
        name: 'Эстония',
        capital: 'Таллин'
    },
    {
        url: '20',
        name: 'Финляндия',
        capital: 'Хельсинки'
    },
    {
        url: '21',
        name: 'Грузия',
        capital: 'Тбилиси'
    },
    {
        url: '22',
        name: 'Германия',
        capital: 'Берлин'
    },
    {
        url: '23',
        name: 'Греция',
        capital: 'Афины'
    },
    {
        url: '24',
        name: 'Швейцария',
        capital: 'Берн'
    },
    {
        url: '25',
        name: 'Исландия',
        capital: 'Рейкьявик'
    },
    {
        url: '26',
        name: 'Ирландия',
        capital: 'Дублин'
    },
    {
        url: '27',
        name: 'Латвия',
        capital: 'Рига'
    },
    {
        url: '28',
        name: 'Лихтенштейн',
        capital: 'Вадуц'
    },
    {
        url: '29',
        name: 'Литва',
        capital: 'Вильнюс'
    },
    {
        url: '30',
        name: 'Люксембург',
        capital: 'Люксембург'
    },
    {
        url: '31',
        name: 'Мальта',
        capital: 'Валлетта'
    },
    {
        url: '32',
        name: 'Монако',
        capital: 'Монако-Виль'
    },
    {
        url: '33',
        name: 'Черногория',
        capital: 'Подгорица'
    },
    {
        url: '34',
        name: 'Нидерланды',
        capital: 'Амстердам'
    },
    {
        url: '35',
        name: 'Северная Македония',
        capital: 'Скопье'
    },
    {
        url: '36',
        name: 'Норвегия',
        capital: 'Осло'
    },
    {
        url: '37',
        name: 'Соедененное Королевство',
        capital: 'Лондон'
    },
    {
        url: '38',
        name: 'Украина',
        capital: 'Киев'
    },
    {
        url: '39',
        name: 'Турция',
        capital: 'Анкара'
    },
    {
        url: '40',
        name: 'Швеция',
        capital: 'Стокгольм'
    },
    {
        url: '41',
        name: 'Словения',
        capital: 'Любляна'
    },
    {
        url: '42',
        name: 'Словакия',
        capital: 'Братислава'
    },
    {
        url: '43',
        name: 'Сербия',
        capital: 'Белград'
    },
    {
        url: '44',
        name: 'Сан-Марино',
        capital: 'Сан-Марино'
    },
    {
        url: '45',
        name: 'Португалия',
        capital: 'Лиссабон'
    },
    {
        url: '46',
        name: 'Румыния',
        capital: 'Бухарест'
    },
    {
        url: '47',
        name: 'Республика Молдова',
        capital: 'Кишинев'
    }
]

const containerStart = document.querySelector('.flags-start')
const btnStart = document.querySelector('.js-start')

const flag = document.querySelector('.js-flag')
const country = document.querySelectorAll('.js-country')
const containerCount = document.querySelector('.js-count')
// console.log(flagsEurope)
let newArr;
function getStarted() {
    containerStart.classList.add('hiding')
    newArr = _shuffle(flagsEurope).splice(0, 15)
    setTimeout(() => {
        containerStart.remove()
    }, 2900)
    
}

function _shuffle(arr) {

    let newArr = [...arr]

    for (let i = newArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }

    return newArr
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function fuckingShit() {
    console.log(newArr)
    let arrId = flagsEurope.map((item) => item.url)
    // console.log(arrId)
    
    country.forEach((cont) => {
        let arrLength = arrId.length
        let randomNum = arrId[randomNumber(1, arrLength -1)]
        console.log(`${arrLength}: ${randomNum}`)
        // console.log(arrId)
        cont.innerHTML = flagsEurope[randomNum].name

        
        // console.log(arrId)
        let indexed = arrId.indexOf(randomNum)
        arrId.splice(indexed, 1)
        // console.log(arrId)
        return arrId
    })

    flag.innerHTML = newArr[0].url
    let rand = randomNumber(1, 5) - 1
    country[rand].innerHTML = newArr[0].name 
}

const flagNames = _shuffle(flagsEurope).map((item) => item.url + ': ' + item.name)
// console.log(flagNames)
btnStart.addEventListener('click', () => {
    getStarted()
    fuckingShit()
    // _shuffle(flagsEurope)
})
let score = 0;
function asshole(event) {
    newArr.splice(0, 1)
    let cunt = flagsEurope.find((c) => {
       return c.url == flag.innerText
    }).name

    if(event.target.innerText == cunt) {
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
}


country.forEach((count) => {
    count.addEventListener('click', () => {
        if(newArr.length !== 0) {
            asshole(event)
            containerCount.innerText = score
            setTimeout(() => {
                fuckingShit()
            }, 1000)
        } else {
            console.log(`your score: ${score}`)
        }
    })
})