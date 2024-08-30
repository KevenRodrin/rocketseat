const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//função callback, é uma função passa por um argumento de outra função
function handleTryClick(event){
    event.preventDefault() //não faça o padrão , não envie o form

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
        }
    
    inputNumber.value = "" //assim colocando o campo vazio,smo q não acertar o numero ela retornara vazio
    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e){
    if((e.key = 'Enter') && (screen1.classList.contains('hide'))) {
        handleResetClick()
    }
    }
//Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)


