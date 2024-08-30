let option;
let items = []
   
while(option !=3) {

 option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

/* 
   // aqui no switch vc passa o dado que vai analisar e nada de boleanos e nem verdadeiro ou falso
    switch(option){

        case 1:
            //caso seja o um vc vai fazeer uma sequencia de codigo aqui
            //exemplo como vimos no if(option === 1)
            break;
        case 2:
            // mesmo exemplo que coloquei no case 1
            break;
            
            case 3:
                break
            default:
                //aqui se aplicação for terminar no 3, caminho padrão quando não é um dos casos acima
    }*/

if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item)  
}
else if (option == 2) {
    
    if(items.length == 0){
        alert("Não existem itens cadastrados")
    } else{
        alert(items)
    }
} else {
    alert("tchau")
}

}

