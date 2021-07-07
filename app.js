const content = document.querySelector('.content')

function changeColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    const cur = e.target
    cur.style.background = '#000'
}

function createDiv() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div')
        box.classList.add('styleBox')
        content.appendChild(box)
        box.addEventListener('mouseover', changeColor)
    }
}

function clearGrid() {
    const child = content.childNodes
    child.forEach(el => {
        console.log(typeof el)
    })
}

createDiv()
