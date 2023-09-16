
// Manipulação do select


const customSelect = document.querySelector(".conteudo__campo-de-contato__custom-select");
const selectedImage = document.getElementById("selectedImage");
const options = document.querySelectorAll(".conteudo__campo-de-contato__custom-select__options__option");


customSelect.addEventListener("click", function () {
    const optionsContainer = customSelect.querySelector(".conteudo__campo-de-contato__custom-select__options");
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
});


options.forEach(function (option) {
    option.addEventListener("click", function () {
        const selectedValue = option.getAttribute("data-value");
       
        selectedImage.src = selectedValue;
    });
});


// Manipulação do input do telefone

const input = document.getElementById("telefone");
        
        
input.addEventListener("focus", () => {
    input.placeholder= "(00) 0-0000-0000"
})

input.addEventListener("focusout", () => {
    input.placeholder= "Digite o telefone"
})

input.addEventListener("keypress", () => {

    let tamanhoInput = input.value.length

    let valorInput = input.value

    if(tamanhoInput === 2){
       input.value = `(${valorInput}) `
    }else if(tamanhoInput === 10){
        input.value += "-"
    }

    if (tamanhoInput === 14) {
    input.value = valorInput.replace(/(.{6})/, "$1-");
}
})


 // Verificação do número de telefone

 const botaoProximo = document.querySelector(".conteudo__botao-proximo");

 botaoProximo.addEventListener("click", () => {

    const tamanhoAtualDoinput = input.value.length
    
    if(tamanhoAtualDoinput === 16){
        window.location.href = "./otp.html"
    }else{
        alert("Preencha o campo de telefone corretamente!")
    }


 })

