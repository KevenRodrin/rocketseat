import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import {  calculeteIMC, notNumber  } from "./ultis.js";

//variaveis
export const form = document.querySelector('form')
export const inputWeight= document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')

 



/*const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')*/
form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

    if (weightOrHeightIsNotNumber) {
        AlertError.open();
        return;
    }
    AlertError.close();


    const result = calculeteIMC(weight, height);
    displayResultMessage(result)    
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`;
    //modalWrapper.classList.add('open')
    Modal.message.innerText = message;
    Modal.open();

}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close() //ele(oninput) vai verificar se meu input esta sendo 
                                               //alterado ent ele ira executar o event toda vez em q eu alterar

