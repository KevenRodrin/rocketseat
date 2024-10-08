export const Modal= {        //objeto literal
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose:document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')

    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}
Modal.buttonClose.onclick = ()=>{
    //modalWrapper.classList.remove('open')
        Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
    if(event.key === "Escape"){
        Modal.close()
    }
}