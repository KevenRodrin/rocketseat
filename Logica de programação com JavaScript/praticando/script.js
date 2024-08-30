let NumberOne = prompt("Digite o primeiro numero:")
let SecundNumber = prompt("Digite o segundo numero:")

NumberOne = Number(NumberOne)
SecundNumber = Number(SecundNumber)

let soma = NumberOne + SecundNumber
const sub = NumberOne - SecundNumber
const multi = NumberOne * SecundNumber
const div = NumberOne / SecundNumber
const RestDiv = NumberOne % SecundNumber

alert(`A soma dos dois numero é: ${soma}`)
alert(`A subtração dos dois numero é: ${sub}`)
alert(`A multiplicação dos dois numero é:${multi}`)
alert(`A divisão dos dois numero é: ${div}`)
alert(`O resto da divisão dos dois numero é: ${RestDiv}`)
   





   if(soma % 2 == 0){
    
     
    alert(`A soma dos dois numeros é par: ${soma}`)

} else{
    alert(`A soma dos dois numeros é impar: ${soma}`)

} if(NumberOne != SecundNumber){
    alert("Os numeros inseridos são diferentes.")
}

