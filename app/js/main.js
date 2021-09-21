

// const box = document.createElement('div')
// box.classList.add('bg-dark','p-4','text-white', 'mt-2')
// box.innerText = 'Hello!'

// const button = document.querySelectorAll('.btn')
// col.forEach(cols => {
//     insertAdjacentHTML('afterend', box)
// })

// button.forEach(btn => {
//     btn.addEventListener('click', function() {
//         this.insertAdjacentElement('afterend', box.cloneNode(true))
//     })
// })

const $ = {};
window.$ = $;

const colors = {red: 'bg-danger', yellow: 'bg-warning', blue: 'bg-primary'}

const btns = [
    {title: 'Show Text',  background: `${colors.yellow}`,  color: 'text-black', data: 'data-text'},
    {title: 'Open Modal', background: `${colors.blue}`,    color: 'text-white', data: 'data-open="true"'},
    {title: 'Delete',     background: `${colors.red}`,     color: 'text-white', data: 'data-delete="true"'}
]

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
    const dmodal = document.createElement('div')
    dmodal.classList.add('modal-my')

    dmodal.insertAdjacentHTML('afterbegin', `
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

    document.body.appendChild(dmodal)
    return dmodal
}

$.modal = function(options) {
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) {
                return console.log('modal is destroyed')
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

const cols = document.querySelectorAll('.col');
const render = _createButtons();

cols.forEach(col => {
    col.appendChild(render.cloneNode(true)) 
 });

 const modal = $.modal({
    title: 'modal'
});