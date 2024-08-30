/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

const students = [

    {

    name: "Sabrina",
    FirstTest: 6,
    SecondTest: 8,
    },

    {

    name: "Keven",
    FirstTest: 10,
    SecondTest: 10,
    },

    {

    name: "Jullia",
    FirstTest: 2,
    SecondTest:1,
    },

    {
    name:"Rayane",
    FirstTest: 9,
    SecondTest:8,
    },
]

 function media(FirstTest,SecondTest){
   return (FirstTest + SecondTest) / 2
    
    
 }

 function mediaStudent(student){
  return `Estudante ${student.name} possui a media: ${media(student.FirstTest, student.SecondTest)}\n`   
 
 }



 for(let student of students){

    let ResulFinal = mediaStudent(student)
    let requid = media(student.FirstTest, student.SecondTest)
    
       if(requid > 6){       
          alert(ResulFinal + ` Parabens, ${student.name}! Você foi aprovado!` )

        
     }else{
     alert(ResulFinal + `Não foi dessa vez ${student.name}!Tente novamente!`)
   }

 }

 /*let listaDeEstudantes = [
   {
       nomeDoEstudante: 'Murilo',
       primeiraNota: 6,
       segundaNota: 9,
   },

   {
       nomeDoEstudante: 'Ana',
       primeiraNota: 5,
       segundaNota: 3,
   },

   {
       nomeDoEstudante: 'Sara',
       primeiraNota: 8,
       segundaNota: 8,
   }        
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}
  

for(let estudante of listaDeEstudantes){
   mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
   let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

   alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}*/       


 
 

