async function data(file, func) {
    try {
        let response = await fetch(file)
        var data = await response.json()
        func(data)
        return data
        
    } catch(error) {
        console.log(error)
    }
}


export {data}

