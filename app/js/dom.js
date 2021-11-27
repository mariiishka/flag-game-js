function _createElement(options) {
    // Создать div
    const div = document.createElement('div')
    // Добавить к нему класс wrapper
    div.classList.add('wrapper')
    // Поместить его внутрь тэга body
    document.body.appendChild(div)
    // Создать заголовок H1 "DOM (Document Object Model)"
    const h1 = `<h1>${options.title}</h1>`
    // Добавить H1 перед DIV с классом wrapper
    div.insertAdjacentHTML('beforebegin', h1)
    // Создать список <ul></ul>
    const ul = document.createElement('ul')
    // Добавить в него 3 элемента с текстом "один, два, три"
    ul.insertAdjacentHTML('afterbegin', `
        <li>1</li>
        <li>2</li>
        <li>3</li>
    `)
    // Поместить список внутрь элемента с классом wrapper
    div.insertAdjacentElement('afterbegin', ul)
    // =================================================
    // Создать изображение
    const img = document.createElement('img')
    // Добавить следующие свойства к изображению
    // 1. Добавить атрибут source
    img.src = 'https://picsum.photos/240'
    // 2. Добавить атрибут width со значением 240
    img.width = '240'
    // 3. Добавить класс super
    img.classList.add(`${options.imgClass}`)
    // 4. Добавить свойство alt со значением "Super Man"
    img.alt = `${options.imgAlt}`
    // Поместить изображение внутрь элемента с классом wrapper
    div.appendChild(img)
    // Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
    const div2 = `
        <div class="pDiv">
            <p>Параграф 1</p>
            <p>Параграф 2</p>
        </div>
    `
    // Поместить этот DIV до элемента <ul></ul>
    div.insertAdjacentHTML('afterbegin', div2)
    // Добавить для 2-го параграфа класс text
    const pDiv = document.querySelector('.pDiv')
    pDiv.children[1].classList.add('text')
    // Удалить 1-й параграф
    pDiv.children[0].remove()
    // Создать функцию generateAutoCard, 
    // которая принимает 3 аргумента: brand, color, year
    const generateAutoCard = (options) => {
        const date = new Date()
        const age = date.getFullYear() - `${options.year}`
        return `
            <div class="autoCard">
              <h2>${options.brand} ${options.year}</h2>
              <p>Автомобиль ${options.brand} - ${options.year} года. Возраст авто - ${age} лет.</p>
              <p>Цвет автомобиля: ${options.color}</p>
              <button type='button' class='button'>Удалить</button>
            </div>
        `
    }
    // Функция должна возвращать разметку HTML:
    // <div class="autoCard">
    //   <h2>BRAND YEAR</h2>
    //   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
    // </div>

    // Создать новый DIV с классом autos
    const autos = document.createElement('div')
    autos.classList.add('autos')
    // Создать 3 карточки авто, используя функцию generateAutoCard
    const carsList = [
        {brand: 'Tesla', year: 2015, color: 'Красный'},
        {brand: 'Lexus', year: 2016, color: 'Серебристый'},
        {brand: 'Nissan', year: 2012, color: 'Черный'},
    ]

    const autoCard = carsList.map(generateAutoCard).join('')
    // Поместить эти 3 карточки внутрь DIV с классом autos
    autos.insertAdjacentHTML('afterbegin', autoCard)
    // Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
    div.insertAdjacentElement('beforebegin', autos)
    // Добавить кнопку Удалить на каждую карточку авто

    // При клике на кнопку - удалять карточку из структуры DOM
    // 1. Выбрать все кнопки
    // 2. Создать функцию удаления
    // 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
    const btns = document.querySelectorAll('.button')

    function handleClick(e) {
        const currentButton = e.currentTarget;
        currentButton.closest('.autoCard').remove();
    }

    btns.forEach(btn => {
        btn.addEventListener('click', handleClick)
    })
}

const create = _createElement({
    title: 'DOM (Document Object Model)',
    imgClass: 'super',
    imgAlt: 'Super Man'
})