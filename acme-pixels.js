const hex = [
    '00',
    '33',
    '66',
    '99',
    'CC',
    'FF'
]

const colorIterater = () => {
    const colorList = []
    let colorTag = '#'
        for (let i = 0; i < hex.length; i++) {
            let iColor = colorTag + hex[i]

            for (let j = 0; j < hex.length; j++) {
                let jColor = iColor + hex[j]

                for (let k = 0; k < 6; k++) {
                    let kColor = jColor + hex[k]
                    colorList.push(kColor)

                }
            }
        }
    return colorList
}

const colorPalatte = colorIterater()

//console.log(colorPalatte)

const colorControls = document.querySelector('#palette')

const renderPalatte = () => {
    let html = colorPalatte.map((color) => {
        return `<div style="background-color:${color}"></div>`
    }).join('')

    colorControls.innerHTML = html
}

renderPalatte()

const xInput = document.querySelector('#x')
const yInput = document.querySelector('#y')
const button = document.querySelector('button')
const grid = document.querySelector('#grid')




button.addEventListener('click', (ev) => {
    ev.preventDefault()

    let columns = new Array(Number(xInput.value)).fill('<div class="cols"></div>').join('')
    let html = new Array(Number(yInput.value)).fill(`<div>${columns}</div>`).join('')
    console.log(html)

    grid.innerHTML = html

    console.log(grid.innerHTML)
})

