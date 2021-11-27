const { type } = require("jquery");

const flags = {
    ru: {
        id: 1,
        url: '../img/ru.png',
        name: 'Russia'
    },
    ua: {
        id: 2,
        url: `../img/ua.png`,
        name: 'Ukraine'
    }
}

for (const key in flags) {
    if (Object.hasOwnProperty.call(flags, key)) {
        const element = flags[key].name;
        
        console.log(element)
    }
}

const user = {}

// user.name = 'John'
// user.surname = 'Smith'
// console.log(user)

// user.name = 'Pete'
// console.log(user)

// delete user.name
console.log(user)


function isEmpty(obj) {
    for (const key in obj) {
        return false
    }

    return true
}

console.log(isEmpty(user))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let result = 0
function sum(object) {

    for (const key in object) {
        result += object[key]
    }

    return result
}

console.log(sum(salaries))
console.log(result)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(object) {
    for (const key in object) {
        if(typeof object[key] == 'number') {
            object[key] *= 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)

// клонирование объекта
let clone = {}

Object.assign(clone, menu) 

let newClone = Object.assign({}, salaries)
console.log(clone)
console.log(newClone)

clone = {}

for (const key in salaries) {
    clone[key] = salaries[key]
}

console.log(clone)