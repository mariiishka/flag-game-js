const dragItems = document.querySelectorAll('.drag-drop__item');
const dropZones = document.querySelectorAll('.drag-drop__zone');

dragItems.forEach(dragItem => {
    dragItem.setAttribute('draggable', 'true')
    dragItem.addEventListener('dragstart', handlerDragstart);
    dragItem.addEventListener('dragend', handlerDragend);
    
    dragItem.addEventListener('dragenter', () => {
        if (draggedItem !== droppedItem) {
            droppedItem = dragItem
        }
    })

    dragItem.addEventListener('dragleave', () => {
        droppedItem = null
    })
    // dropItem.addEventListener('dragleave', handlerDragLeave)
})

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', handlerDragenter);
    dropZone.addEventListener('dragleave', handlerDragleave);
    dropZone.addEventListener('dragover', handlerDragover);
    dropZone.addEventListener('drop', handlerDrop);
})

let draggedItem = null
let droppedItem = null

function handlerDragstart(event) {
    this.classList.add('active')
    draggedItem = this
}

function handlerDragend(event) {
    this.classList.remove('active')
    draggedItem = null
}

function handlerDragenter(event) {
    event.preventDefault()
    this.classList.add('active')
}

function handlerDragleave(event) {
    this.classList.remove('active')
}

function handlerDragover(event) {
    event.preventDefault()
}

function handlerDrop(event) {

    if(droppedItem) {
        if(droppedItem.parentElement === draggedItem.parentElement) {
            const children = Array.from(droppedItem.parentElement.children);
            const droppedIndex = children.indexOf(droppedItem);
            const draggedIndex = children.indexOf(draggedItem);

            if(draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
            } else {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling)
            }

        } else {
            this.insertBefore(droppedItem, droppedItem);
        }

    } else {
        this.append(draggedItem)  
    }
    
    dropZones.forEach(dropZone => {
        dropZone.classList.remove('active')
    })
}


// перетаскивание в любую точку 
function _drag() {
    const wrapper = document.querySelector('.drag');
    const container = document.querySelector('.drag-drop__wrapper')


    function onDrag({movementX, movementY}) {
        let getStyle = window.getComputedStyle(wrapper)
        let top = parseInt(getStyle.top);
        let left = parseInt(getStyle.left);

        wrapper.style.left = `${left + movementX}px`
        wrapper.style.top = `${top + movementY}px`
    }

    wrapper.addEventListener('mousedown', () => {
        wrapper.addEventListener('mousemove', onDrag)
    })

    container.addEventListener('mouseup', () => {
        wrapper.removeEventListener('mousemove', onDrag)
    })
}

const drag = _drag()