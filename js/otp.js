const slotsInputs = document.querySelectorAll(".conteudo__sessao-principal__codigo__slot");
const botaoProximo = document.querySelector(".conteudo__sessao-principal__botoes-voltar-proximo__proximo");

     // verificação para saber se é o último input e para dar destaque no botão proximo

slotsInputs.forEach( (slot) => {

    slot.addEventListener("keyup", () => {
        const tamanhoSlot = slot.value.length;
    
        if (tamanhoSlot > 0) {
            const proximoInput = slot.nextElementSibling;

            if(proximoInput === null){
                slot.blur() 
                botaoProximo.style.opacity = "100%"
            }else{
                proximoInput.focus()
            }
        }

        if(tamanhoSlot === 0){
            botaoProximo.style.opacity = "49%"
        }
    });
});

    // verificação para saber se os valores apresentados pelo usuário está correto!

botaoProximo.addEventListener('click', () => {
    
    const slotVazio = [];
    const slotDoisDigitos = [];

    let verificaSlotVazio 
    let verificaQuantidadeSlot

    slotsInputs.forEach((slots) => {
        
        verificaSlotVazio = slots.value.length === 0? slotVazio.push(slots) : false;  
        verificaQuantidadeSlot = slots.value.length > 1?   slotDoisDigitos.push(slots) : false;
        
    })
  
    if(slotVazio.length === 0 && slotDoisDigitos.length === 0){
        window.location.href = "./home.html"
    }else{
        alert("Código inválido!"); 
    }
})

function voltarLogin(){
    window.location.href ="./login.html"
    
}

