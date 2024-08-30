import state from  './state.js'
import * as el from './elements.js' 
import { reset } from './action.js'
import { kitchenTimer } from './sounds.js'

export function countDown(){

    clearTimeout(state.countdownId) // ele vai entrar na primeira rodada n terar q limpar pois ele é null la no state... irar zerar o anterior ele desce e qnd sobe dnv pois qnd desceu limpou rodou uma vez e subiu ele volts com Id e dai ele limpa dnv

    if(!state.isRunning){
        return
    }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countDown(),1000) //setTimeout é uma function espera que execute ela em determinado tempo 
    
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes // ??  - se não for passado valoe vai ser null e se for isso coloque state.minutes e coloque no lugar
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2,"0") 
    // padStart é preenchimente q a String permitiu eu usar //textContent é atuliza os minutos q eu passa aqui
    el.seconds.textContent = String(seconds).padStart(2, "0")

}