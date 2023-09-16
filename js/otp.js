const slotsInputs = document.querySelectorAll(".conteudo__sessao-principal__codigo__slot");
const botaoProximo = document.querySelector(".conteudo__sessao-principal__botoes-voltar-proximo__proximo");

slotsInputs.forEach( (slot) => {
    slot.addEventListener("keyup", () => {
        const tamanhoSlot = slot.value.length;
        if (tamanhoSlot > 0) {
            const proximoInput = slot.nextElementSibling;
            if(proximoInput === null){
              slot.blur() 
              botaoProximo.classList.add("botao-branco"); 
              console.log(botaoProximo) 
            }else{
                proximoInput.focus()
            }
        }
    });
});

