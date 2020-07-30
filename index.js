import {caesarCipher} from './algorithms'

const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const text = 'hola como'
const key = 1

console.log(caesarCipher(text,key))