
// GLOBAL
const $ = {};
window.$ = $;

// ARRAYS
const colors = {red: 'bg-danger', yellow: 'bg-warning', blue: 'bg-primary'}

const btns = [
    {title: 'Show Text',  background: `${colors.yellow}`,  color: 'text-black', data: 'data-text="true"'},
    {title: 'Open Modal', background: `${colors.blue}`,    color: 'text-white', data: 'data-open="true"'},
    {title: 'Delete',     background: `${colors.red}`,     color: 'text-white', data: 'data-delete="true"'}
]


// create elements
function _createButtons() {

    const buttons = document.createElement('div');

    const toHtml = btns => `
        <button class="btn py-2 px-3 ${btns.background} ${btns.color}" ${btns.data}>${btns.title}</button>
    `

    const html = btns.map(toHtml).join('')
    
    buttons.classList.add('d-flex', 'justify-content-between', 'w-100');
    buttons.insertAdjacentHTML('afterbegin', html)

    return buttons
}

function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal-my')
    modal.setAttribute('id', `${options.id}`)

    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-my__overlay" data-close="true">
            <div class="modal-my__content">
                <div class="modal-my__header">
                    ${options.title}
                </div>
                <div class="modal-my__main"></div>
                <div class="modal-my__footer">
                    <button class="modal-my__button button" data-close="true">close</button>
                </div>
            </div>
        </div>
    `)

    document.body.appendChild(modal)
    return modal
}

function _createArticle(options) {
    const article = document.createElement('div')

    article.classList.add('article', 'text-center', 'py-45', 'bg-light', 'text-success', 'my-4')
    article.insertAdjacentHTML('afterbegin', `
        <h2 class="mb-3 text-primary h2">${options.caption}</h2>
        <p>${options.text}</p>
    `)

    return article
}

//objects
$.modal = function(options) {
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) {
                return alert('modal is destroyed')
            } 
            !closing && $modal.classList.add('open');
        },

        close() {
            closing = true
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false
            }, 200)
        },
        
        destroy() {
            destroyed = true
            $modal.remove()
        }
    }

    const listener = event => {
        if (event.target.dataset.open) {
            modal.open()
        } else if (event.target.dataset.close) {
            modal.close()
        }
    }

    document.addEventListener('click', listener)
    return modal
    
}

$.render = function() {
    const cols = document.querySelectorAll('.col-buttons');
    const render = _createButtons();

    cols.forEach(col => {
    col.appendChild(render.cloneNode(true)) 
 });   
}

$.article = function(options) {
    const $article = _createArticle(options); 
    const container = document.querySelectorAll('.col');
    
    container.forEach(container => {
        const text = container.querySelector('.div')
        const btnText = container.querySelector('[data-text]')
        const btnDel = container.querySelector('[data-delete]')
        var exist = false

        const check = function() {
            if (exist) {
                btnText.setAttribute('disabled', '');
                btnDel.removeAttribute('disabled');

                text.classList.add('text-decoration-line-through');
            } else {
                btnText.removeAttribute('disabled');
                btnDel.setAttribute('disabled', '');

                text.classList.remove('text-decoration-line-through');
            }
        }

        const showText = event => {
            if (event.target.dataset.text) {
                text.insertAdjacentElement('afterend', $article.cloneNode(true))
                exist = true

                check()

            } else if (event.target.dataset.delete) {
                container.querySelector('.article').remove()
                exist = false

                check()
            }
        }

        container.addEventListener('click', showText)
        check()
    
    })

    

    

    
}

const render = $.render()
const modal = $.modal({
    id: 'modal-1',
    title: 'modal'
});

const article = $.article({
    caption: 'Text is shown',
    text: 'Congrats!'
})



