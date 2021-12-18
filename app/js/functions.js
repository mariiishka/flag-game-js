var test = () => {
    return 'function works'
}

console.log(test())

function _after() {
    function makeCounter() {
        var count = 0

        return function() {
            return count++
        }
    }

    var count = makeCounter()
    count()
}

