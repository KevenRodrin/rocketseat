/*
    Crie uma lista de pacientes

    Cada pacientes dentro da lista,deverá conter
    nome
    idade
    peso
    altura

    Escreva uma lista contendo o nome dos pacientes
*/
 
/*
const patients = [
   

    {
        name: "Luiz",
        age:20,
        weight: 55,
        height:1.80,
    },

    
   {   
       name: "erica",
        age: 33,
        weight:60,
        height:1.75,
},

 {   
        name: "Carlos",
        age:18,
        weight:80,
        height:1.85
    },
]

let patientsNames = []

for(let patient of patients) {
    patientsNames.push(` Paciente ${patient.name}, tem ${patient.age} anos, tem ${patient.weight} e${patient.height}`)
   
    
}*/


const patients = [
   

    {
        name: "Luiz",
        age:20,
        weight: 55,
        height:180,
    },

    
   {   
       name: "erica",
        age: 33,
        weight:60,
        height:175,
},

 {   
        name: "Carlos",
        age:18,
        weight:80,
        height:185
    },
]

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}  // ou poderia ser assim patients.[0].height * patients.[0].height





function printPatientIMC(patient){
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight,  patient.height)} ` // ou poderia ser assim patients.[0].height * patients.[0].height

}

for(let patient of patients) {
let IMCMessagem = printPatientIMC(patient)
alert(IMCMessagem)
}