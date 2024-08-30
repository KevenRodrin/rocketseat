 let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => { //currentTarget é o butão
   document.documentElement.classList.toggle('light')
   
    const mode = darkMode ? 'light' : 'dark'    //tag boleana verdairo ou falso
    event.currentTarget
    .querySelector('span').textContent = `${mode} mode ativado!` 

    darkMode = !darkMode //! a esclamação é o contrario é uma negação
})