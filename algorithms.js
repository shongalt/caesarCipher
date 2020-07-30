export const caesarCipher = (text,key) =>{
    const textUpper = text.toUpperCase()
    const textArray = textUpper.split('')
    const newTextArray = textArray.map(letter=>{
        const charCode = letter.charCodeAt()
        const isSpace = charCode==32
        const newLetter = isSpace ? letter : String.fromCharCode(charCode + key);
        return newLetter
    })
    return newTextArray.join('')
}
