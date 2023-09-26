const slotsInputs = document.querySelectorAll(".conteudo__sessao-principal__codigo__slot");
const botaoProximo = document.querySelector(".conteudo__sessao-principal__botoes-voltar-proximo__proximo");
const spanErro = document.querySelector(".conteudo__sessao-principal__erro");

     // verificação para saber se é o último input e para dar destaque no botão proximo


const totalDeInputPreenchidos = []

slotsInputs.forEach( (slot) => {
    slot.addEventListener("keyup", () => {
        const tamanhoSlot = slot.value.length; 

        if (tamanhoSlot === 1) {
            const proximoInput = slot.nextElementSibling;

            if(totalDeInputPreenchidos.length <  4){
                totalDeInputPreenchidos.push(slot)                
            }
        
            if(proximoInput === null){
                slot.blur()   
            }else{
                proximoInput.focus()
            }
        }

        if(totalDeInputPreenchidos.length === 4){
            botaoProximo.style.opacity = "100%"
        }

        if(tamanhoSlot === 0){
            botaoProximo.style.opacity = "49%"
            totalDeInputPreenchidos.splice(0,1)
            console.log(totalDeInputPreenchidos)
        }

        console.log(totalDeInputPreenchidos)
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
        spanErro.textContent = "Código inválido!"; 
    }
})

function voltarLogin(){
    window.location.href ="./login.html"
    
}

