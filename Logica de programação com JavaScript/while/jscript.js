/*
    ** Jogo da Advinhação**

Apresente a mensagem ao usuário
'Advinhe o número que estou pensando? Está entre 0 a 10

Crie uma logica para gerar um número aleatorio
e verificar se o número digitado é o mesmo que o aleatorio
gerado pelo sistema.

Enquanto o usuário não advinhar o numero, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuario acerte o numero, apresente a mensagem:
"Parabens! Você advinhou o numero em x tentativas"

Substitua o "x" da mensagem,pelo numero de tentativas


random = é uma função que não precisa de argumentos ela gera um numero aleatorio
entre 0 e 1 

ceil = é uma outra função que espera um argumento dentro dos parenteses, ele é 
um aredondamento pra cima

floor = é uma função que irar aredondar para baixo

round = ele vai aredondar para o mais proximo
 */

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber){
    result = prompt("Erro, tente novamente:")
    xAttempts++
}

alert(`Parabens! Você advinhou o numero em ${xAttempts} tentativas`)