/*
Capture 2 num 
e fazer as operações matematicas
de soma, subtração,multipliacação,
divisão e resto da divisão
*/

let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundp numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const resDiv = firstNumber % secondNumber

alert( 'soma:' + sum)
alert( 'subtração:' + sub)
alert( 'multipliacação:' + multi)
alert( 'divisão:' + div)
alert( 'resto da divisão:' + resDiv)
