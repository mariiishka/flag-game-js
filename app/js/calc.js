const result = document.querySelector('.js-calc-result')
const btns = document.querySelectorAll('.js-num')


console.log(result.innerText)

let arr = []
let isCalculated = false

btns.forEach(btn => {
    
    function clear() {
        result.innerHTML = ''
        arr = []
    
        console.log(arr)
    }

    function del() {
        arr.pop()
        result.innerText = arr.join('')
    
        console.log(arr)
    }

    function outputResult() {
        result.innerText = arr.join('');
    }

    function makeResult() {
        let btnInner = btn.innerHTML;
        let i = arr.length - 1;
        let check = arr[i] !== "*" && arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "/";

        switch(btnInner) {
                
            case "+":
            case "/":
            case "*":
                isCalculated = false
                if(check) {
                    if(result.innerHTML !== '') {
                        arr.push(`${btnInner}`)
                        outputResult()
                        console.log(arr)
                    }            
                }
                break;
            case "-":
                isCalculated = false
                if(check) {
                    arr.push(`${btnInner}`)
                    outputResult()
                    console.log(arr)
                }
                break;
            case "=":
                if(check && !isCalculated) {
                    let calculate = Function('return ' + arr.join(''));

                    result.innerText = calculate()
                    arr = []
                    arr.push(calculate())
                    console.log(arr)

                    isCalculated = true
                }
                break;
            case "Ac":
                clear()
                break;
            case "del":
                del()
                break;
            case ".":
                isCalculated = false
                if(check && arr[i] !== ".") {
                    if(result.innerHTML !== '') {
                        arr.push(`${btnInner}`)
                        outputResult()
                        console.log(arr)
                    }
                }
                break;
            default:
                if(isCalculated) {
                    clear()
                    isCalculated = false
                }

                arr.push(`${btnInner}`)
                outputResult()
                console.log(arr)

        }
    }

    btn.addEventListener('click', makeResult)
    document.addEventListener('keydown', makeResult)
})
