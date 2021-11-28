const result = document.querySelector('.calc__result')

const btnNum = document.querySelectorAll('.btn-num')
const btnInst = document.querySelectorAll('.btn-inst')
const btnClear = document.querySelector('.btn-ac')
const btnDel = document.querySelector('.btn-del')

const btnEquels = document.querySelector('.btn-equals')

console.log(result.innerText)

let arr = []
let isEquals = false

function clear() {
    result.innerHTML = ''

    arr = []

    console.log(arr)
}


btnInst.forEach(btn => {

    function makeResult() {
        let b = btn.innerHTML
        let i = arr.length - 1

        isEquals = false

        if(arr[i] !== "*" && arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "/") {
            if(result.innerText !== '') {
                result.insertAdjacentText('beforeend', `${b}`)
                arr.push(`${b}`)
                console.log(arr)
            }            
        }

    }

    btn.addEventListener('click', makeResult)
})

btnNum.forEach(btn => {

    function makeResult() {
        let b = btn.innerHTML

        if(isEquals) {
            clear()
            isEquals = false

            result.insertAdjacentText('beforeend', `${b}`)
            arr.push(`${b}`)
            console.log(arr)
        } else {
            result.insertAdjacentText('beforeend', `${b}`)
            arr.push(`${b}`)
            console.log(arr)
        }
    }

    btn.addEventListener('click', makeResult)
})

function equals() {
    let form = ''
    let p = arr.length - 1
    let cc = arr[p] !== "*" && arr[p] !== "+" && arr[p] !== "-" && arr[p] !== "/" && arr[p] !== "." && arr.length !== 0
    
    if(cc) {
        for (let i = 0; i < arr.length; i++) {
            form += arr[i]
        }

        let res = Function('return ' + form)

        result.innerText = res()
        arr = []
        console.log(arr)

        arr.push(res())
        console.log(arr)

        isEquals = true
    }

}

function del() {
    arr.pop()
    result.innerText = arr.join('')

    console.log(arr)
}

btnClear.addEventListener('click', clear)

btnEquels.addEventListener('click', equals)

btnDel.addEventListener('click', del)
