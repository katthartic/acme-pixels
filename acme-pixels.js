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
        for (let i = 0; i < hex.length; i++) {
            let iColor = hex[i]

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

console.log(colorPalatte)