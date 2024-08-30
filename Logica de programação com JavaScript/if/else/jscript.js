/*Solicitar o nome do aluno e as 3 notas
do bimestre calcular a média daquele aluno.

A media positiva deverá ser maior que 6 


Se o aluno passou no bimestre,dar os parabens

se o aluno não passou no bimestre,
motivar o aluno a dar seu melhor na prova de 
recuperação.

Em ambos os casos,mostre uma mensagem com o nome do aluno e a nota*

*/ 

/*prompt("qual é seu nome?")
alert("Solicitação da nota do bimestre.")
let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
alert( 'soma:' + sum)
let resul = sum

if( resul > 6){
    alert("Parabens,você passou do ano")

} else{ ( resul < 6)
    alert("Você esta de recuperação")
}

forma de eu encontrar o resultado
*/

let student = prompt("Qual o nome do(a) aluno(a)")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
 
let resul = average > 6

alert(resul)

if(resul){
    alert("Parabens," + student + "! sua media foi de:" +  average.toFixed(2)) 
}else{
    alert(student + "estude para sua prova de recuperação! sua media foi de:" + average.toFixed(2))
}