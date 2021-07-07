const content = document.querySelector('.content')

function changeColor(e) {
    //const randomColor = Math.floor(Math.random()*16777215).toString(16)
    const cur = e.target
    cur.style.background = 'pink'
    cur.style.border = 'solid .1rem'
}

function createDiv() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.style.gridTemplateColumns = 'repeat(16, 1fr)'
        content.style.gridTemplateRows = 'repeat(16, 1fr)'
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

function create32() {
    content.innerHTML = ''

    for (let i = 0; i < 1024; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.style.gridTemplateColumns = 'repeat(32, 1fr)'
        content.style.gridTemplateRows = 'repeat(32, 1fr)'
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

function create48() {
    content.innerHTML = ''

    for (let i = 0; i < 2304; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.style.gridTemplateColumns = 'repeat(48, 1fr)'
        content.style.gridTemplateRows = 'repeat(48, 1fr)'
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

function create64() {
    content.innerHTML = ''

    for (let i = 0; i < 4096; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.style.gridTemplateColumns = 'repeat(64, 1fr)'
        content.style.gridTemplateRows = 'repeat(64, 1fr)'
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

function create80() {
    content.innerHTML = ''

    for (let i = 0; i < 6400; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.style.gridTemplateColumns = 'repeat(80, 1fr)'
        content.style.gridTemplateRows = 'repeat(80, 1fr)'
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

// Maybe it's being lazy or clever lol. But I came up with this 
// solution to clear the grid and set it's color back to original one.
// But I want to find other solutions to clear the grid.

function clearGrid() {
    content.innerHTML = ''
    createDiv()
}

createDiv()
