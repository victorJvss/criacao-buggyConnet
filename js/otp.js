const slotsInputs = document.querySelectorAll(".conteudo__sessao-principal__codigo__slot");
const botaoProximo = document.querySelector(".conteudo__sessao-principal__botoes-voltar-proximo__proximo");

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

botaoProximo.addEventListener('click', () => {
    
    const slotFilter = [];

    slotsInputs.forEach((slots) => {
        if(slots.value.length === 0){
            slotFilter.push(slots)
        }
    })

    if(slotFilter.length > 0){
        alert("Digite os 4 digitos corretamente!");
    }else{
        window.location.href = "./home.html"
    }


})


function voltarLogin(){
    window.location.href ="./login.html"
}

