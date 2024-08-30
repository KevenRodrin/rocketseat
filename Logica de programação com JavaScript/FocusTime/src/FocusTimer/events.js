import { controls } from "./elements.js";
import * as actions from './action.js';
import * as el from './elements.js';
import { updateDisplay } from "./timer.js";
import state from './state.js'




export function registerControls(){
 controls.addEventListener('click', (event) =>{
    const action = event.target.dataset.action
    if( typeof actions[action] != 'function'){
        return

    }

    
    actions[action]()

 })       

}
 //eventos de click q ira acontecer no botão

export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""

    })
        el.minutes.onkeypress = (event) => /\d/.test(event.key)  /*para aceitar apenas numeros essa logica*/

        el.minutes.addEventListener('blur', (event) => {
            let time = event.currentTarget.textContent
            time = time > 60 ? 60 : time  // ternario simples primeira parte time é maior q 60 ai vem o ? se for sim a pergunta mantem como 60 e o : é o não ent se ele nap for maior q 60 deixa o time 

            state.minutes = time
            state.seconds = 0

            updateDisplay()
            el.minutes.removeAttribute('contenteditable')
        })

 }

