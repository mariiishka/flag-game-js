const dropItems = document.querySelectorAll('.drag-drop__item');
const dropZones = document.querySelectorAll('.drag-drop__zone');

dropItems.forEach(dropItem => {
    dropItem.setAttribute('draggable', 'true')
    dropItem.addEventListener('dragstart', handlerDragstart);
    dropItem.addEventListener('dragend', handlerDragend);
    
    // dropItem.addEventListener('dragleave', handlerDragLeave)
})

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', handlerDragenter);
    dropZone.addEventListener('dragleave', handlerDragleave);
    dropZone.addEventListener('dragover', handlerDragover);
    dropZone.addEventListener('drop', handlerDrop);
})

let draggedItem = null

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
    this.append(draggedItem)
}