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


function _randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export {_shuffle, _randomNumber}