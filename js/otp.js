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
    const verificaslots = slotsInputs.forEach(slot => slot.value.length === 1? window.location.href ="./home.html" : alert("Digite os 4 digitos corretamente!"));
    return verificaslots;

})


function voltarLogin(){
    window.location.href ="./login.html"
}

