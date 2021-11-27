const arr = [
    {name: 'Alex', age: 28},
    {name: 'Jeck', age: 20},
    {name: 'Lola', age: 23},
    {name: 'Bob', age: 18}
]

const arrNum = [4, 2, 3, 6, 5, 1]

// 1
function _each(arr, fun) {

    if (fun === 'alert') {
        // arr.forEach((item) => alert(`${item}`));
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            alert(element)
        }
    } else if (fun === 'consoleLog') {
        // arr.forEach((item) => console.log(`${item}`));
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(element)
        }
    }

    const object = [
        {first: 'one', second: 'two', third: 'three'},
        {first: 'one-2', second: 'two-2', third: 'three-2'},
        {first: 'one-3', second: 'two-3', third: 'three-3'}
    ]

    object.forEach((item, i) => console.log(`<div id="${item.first}" class="${item.second}">${item.third}</div>`, i))
}

// 2
function _map() {

    // const newArr = arr.map((item, i, arr) =>
    //     item.name + '[' + i + ']' + ' of ' + '"' + arr + '"'
    // )

    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        
    }
    console.log(newArr)

}

// 3
function _reduce() {
    // const reduce = arr.reduce((total, arr) => total + arr.age, 0)
    let reduce = 0
    for (let i = 0; i < arr.length; i++) {
        reduce += arr[i].age;
        
    }
    console.log(reduce)
}
// 4
function _reduceRight() {
    const reduceRight = arr.reduceRight((total, arr) => total + arr.age, 0)
    console.log(reduceRight)
}

// 5
function _find() {
    // const find = arr.find((item) => item.age == 20)
    // console.log(find)

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].age == 20) {
            console.log(arr[i])
        }
    }

}

// 6
function _filter() {
    // const find = arr.filter((item) => item.age !== 20)

    // const findEven = arrNum.filter((item) => item % 2 == 0)
    // const findOdd = arrNum.filter((item) => item % 2 !== 0)

    const find = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age !== 20) {
            find.push(arr[i])
        }
        
    }

    const findEven = []
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 == 0) {
            findEven.push(arrNum[i])
        }
        
    }

    const findOdd = []
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 !== 0) {
            findOdd.push(arrNum[i])
        }
        
    }
    const arrFind = [...find, {...findEven}, {...findOdd}]

    console.log(arrFind)

}

// 7
function _everySome() {
    let everySome = arrNum.every(item => item % 2 == 0)
    console.log(everySome)

    everySome = arrNum.some(item => item % 2 == 0)
    console.log(everySome)
}

// 8
function _includes() {
    const indexOf = arrNum.indexOf(4);
    const lastIndexOf = arrNum.lastIndexOf(4);
    const includes = arr.includes('Stiv');

    console.log(indexOf, lastIndexOf, includes)
}

// 9
function _pluck() {
    const pluck = arr.map((item) => item.name)

    console.log(pluck)
}

// 10 
function _max() {
    let arrN = []
    arr.forEach(arr => {
        arrN.push(arr.age)
    })
    const max = Math.max(...arrN)
    console.log(max)
}

// 11
function _min() {
    let arrN = []
    arr.forEach(arr => {
        arrN.push(arr.age)
    })
    const min = Math.min(...arrN)
    console.log(min)
}

// 12
function _shuffle(arr) {
    let currentIndex = arr.length

    for (let i = currentIndex - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(arr)
}

// 13
function _set() {
    const set = [... new Set(arrNum)]
    console.log(set)
}

// 14
function _slice() {
    const slice = arr.slice(0,1)

    console.log(slice)
}

// 15
function _splice() {
    arr.splice(0,2, {name: 'Den', age: 38})

    console.log(arr)
}

// 16
function _concat() {
    const concat = arr.concat(arrNum) 

    console.log(concat)
}

// 17
function _indexOf() {
    const indexOf = arrNum.indexOf(2,2)
    console.log(indexOf)
}

// 18
function _sort() {
    function _sortL() {
        const sort = arrNum.sort((a, b) => a - b)
        console.log('Sort arrNum from left to right: ', sort)
    }
    
    function _sortR() {
        const sort = arrNum.sort((a,b) => b - a)
        console.log('Sort arrNum from right to left: ', sort)
    }
    
    function _sortAgeL() {
        const sort = arr.sort((a,b) => a.age - b.age)
        console.log('Sort arr.age from left to right: ', sort)
    }

    function _sortAgeR() {
        const sort = arr.sort((a,b) => a.age - b.age)
        console.log('Sort arr.age from right to left: ', sort)
    }

    function _sortNameL() {
        const sort = arr.sort((a,b) => {
            var nameA = a.name.toLowerCase()
            var nameB = b.name.toLowerCase()

            if(nameA > nameB) {
                return 1
            } else if(nameA < nameB) {
                return -1
            } else {
                return 0
            }
        })

        console.log('Sort arr.name from left to right: ', sort)
    }

    function _sortNameR() {
        const sort = arr.sort((a,b) => {
            var nameA = a.name.toLowerCase()
            var nameB = b.name.toLowerCase()

            if(nameA > nameB) {
                return -1
            } else if(nameA < nameB) {
                return 1
            } else {
                return 0
            }
        })

        console.log('Sort arr.name from right to left: ', sort)
    }

    _sortL(), _sortR(), _sortAgeL(), _sortAgeR(), _sortNameL(), _sortNameR()
}


// 19
function _reverse() {
    console.log(
        arr.reverse()
    )
}

// 20
function _split() {
    let names = ['Den:2233', 'Mari:3545', 'Rita:4556']
    const newArr = {}
    names.forEach(name => {
        let splitName = name.split(':')
        console.log(splitName)
    })

    // console.log(names)
    // console.log(split)
}

// 21
function _counter() {
    let count = 0

    return function() {
        return count++
    }
}

// 22
function _sum(a) {
    return function(b) {
        return a + b
    }
}

// 23
function _interval() {
    let isInterval = true
    const box = document.querySelector('.box')

    class IntervalTimer {
        constructor(callback, interval) {
            let timerId, remaining = 0;
            let state = 0;

            this.pause = function () {
                if (state != 1)
                    return;

                console.log(timerId)
                window.clearInterval(timerId);
                state = 2;
            };

            this.resume = function () {
                if (state != 2)
                    return;

                state = 3;
                window.setTimeout(this.timeoutCallback, remaining);
            };

            this.timeoutCallback = function () {
                if (state != 3)
                    return;

                callback();

                timerId = window.setInterval(callback, interval);
                state = 1;
            };

            timerId = window.setInterval(callback, interval);
            state = 1;
        }
    }

    let right = true;
    let bottom = true;

    let interval = new IntervalTimer(function() {
        let getStyle = window.getComputedStyle(box)
        let top = parseInt(getStyle.top);
        let left = parseInt(getStyle.left);
        // box.style.top = `${top + 5}px`  

        if (right) {
            box.style.left = `${left + 100}px`;
            box.style.top = `${top + 100}px`;
            right = false
            // if (right == false) {
            //     setTimeout(backBottom, 500)
            // }
            setTimeout(() => {
                box.style.left = `${left}px`;
                box.style.top = `${top + 200}px`;
            }, 500)
        

        } else {
            box.style.left = `${left - 100}px`
            box.style.top = `${top - 100}px`
            right = true
            
            setTimeout(() => {
                box.style.left = `${left}px`;
                box.style.top = `${top - 200}px`;
            }, 500)
        } 
    }, 1000)

    box.addEventListener('click', () => {
        if(isInterval) {
            interval.pause()
            isInterval = false 
        } else if (isInterval == false) {
            interval.resume()
            isInterval = true
        }
    })
}

// 24
function _pow(x, n) {
    // if(n==1) {
    //     return x
    // } else {
    //     let i = x * _pow(x, n-1)
    //     console.log(i)

    //     return i
    // }

    return (n==1) ? x : (x * _pow(x, n-1))
}

let user = {
    name: 'Pete',
    age: 27
}
console.log(user)

user.age = 23
console.log(user)

user["likes birds"] = true
console.log(user)

let key = 'height'
user[key] = ''

console.log(user)

let fruit = 'apple'

let tree = {
    [fruit]: 5,
    orange: 3
}

console.log()

function makeUser(name, age) {
    let uset = {
        name,
        age,
        height: 1.78
    }

    let obj = {
        name,
        let: 2,
        in: 3,
        function: 4,
        return: 5
    }

    console.log(uset, obj)
}

console.log(makeUser('Mary', 18))

