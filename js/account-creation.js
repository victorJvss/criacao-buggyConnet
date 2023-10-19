// Formúlario
const form = document.querySelector(".dados-form");

// Campos formúlarios
const cep = document.getElementById("cep-campo");
const enderecoComplementos = document.querySelector(".dados-endereco");
const telefoneCampo = document.getElementById("telefone-campo");
const cpfCampo = document.getElementById("cpf-campo");

// Checkbox formúlarios
const contaPessoal = document.getElementById("conta-pessoal-input");
const contaProfissional = document.getElementById("conta-profissional-input");

// Span erros
const telefoneErro = document.querySelector(".telefone-erro");
const cpfErro = document.querySelector(".cpf-erro");
const erroCheckbox = document.querySelector(".erro-checkbox");
const cepErro = document.querySelector(".cep-erro");



let tamanhoInputCpf;
let tamanhoInputTelefone;

// mascara de CPF

cpfCampo.addEventListener("keypress", () => {
    
    tamanhoInputCpf = cpfCampo.value.length;
    
    
    if(tamanhoInputCpf === 3 || tamanhoInputCpf === 7){
        cpfCampo.value += "."
    }else if (tamanhoInputCpf === 11){
        cpfCampo.value += "-"
    }
})

//  Mascara de telefone

telefoneCampo.addEventListener("focus", () => {
    telefoneCampo.placeholder= "(00) 0-0000-0000"
})

telefoneCampo.addEventListener("focusout", () => {
    telefoneCampo.placeholder= "Digite o telefone"
})

telefoneCampo.addEventListener("keypress", () => {

    let tamanhoInput = telefoneCampo.value.length

    let valorInput = telefoneCampo.value

    if(tamanhoInput === 2){
       telefoneCampo.value = `(${valorInput}) `
    }else if(tamanhoInput === 10){
        telefoneCampo.value += "-"
    }

    if (tamanhoInput === 14) {
    telefoneCampo.value = valorInput.replace(/(.{6})/, "$1-");
}
})

   
// Verificação de checkbox
contaProfissional.addEventListener('click', () => {
    contaPessoal.checked = false
})

contaPessoal.addEventListener("click", () => {
    contaProfissional.checked = false
})


// Aparecer os outros inputs de complementação do endereço

cep.addEventListener("focus", () => {
    enderecoComplementos.style.display = "block"
})

// Buscar a função para puxar o cep

cep.addEventListener("focusout", () => {
    buscaCep(cep.value)
})


// função para puxar o cep

async function buscaCep(cep){
    try{

        const api = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const converteCep = await api.json()
        if(converteCep.erro){
            cepErro.textContent = "CEP inválido!"
            throw new Error ("CEP inválido!");
        }else{
            cepErro.textContent = ""
            preencherComplementos(converteCep)
        }

    }catch(erro){
        console.log(erro)
    }
}

// Preenchimento dos outros complementos do cep

async function preencherComplementos(dadosCep){
    document.querySelector("[data-estado]").value = dadosCep.uf
    document.querySelector("[data-cidade]").value = dadosCep.localidade
    document.querySelector("[data-bairro]").value = dadosCep.bairro
    document.querySelector("[data-rua]").value = dadosCep.logradouro
    
}

// Função para conferir se o CPF é válido 

async function validacaoCpf(cpf){
    const buscaCpf = await fetch(`https://cpf_validator.p.rapidapi.com/cpf?cpf=${cpf}`,{
        method: 'GET',
        headers: {
            Authorization: 'c3e8636c410379ef76c737033b269cf5130a7f4e739f19068e633046d643b4244e3a1b67b93bb4ab00fb0b11b7026d2e',
            'X-RapidAPI-Key': '15b0bb526dmsh88c1b7513c4fca7p1782e2jsn8805646feea8',
            'X-RapidAPI-Host': 'cpf_validator.p.rapidapi.com'

        }
    });
    
    const converteCpf = await buscaCpf.json()
    return converteCpf.bool
}

let numeros = "" ;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    try{
        // verificação do CPF
        tamanhoInputCpf = cpfCampo.value.length;
        
        if(tamanhoInputCpf != 14){
            cpfErro.textContent = "Preencha o campo de CPF corretamente!"
            throw new Error ("Preencha o campo de CPF corretamente!")
        }else{
            cpfErro.textContent = ""
            let cpfValidado =  validacaoCpf(cpfCampo.value)
            cpfValidado.then( (resultado) => {
                if(resultado){
                    console.log("Ok")
                }else{
                    cpfErro.textContent = "CPF inválido!"
                    throw new Error ("CPF inválido!")
                }
            })
        }
        
        // verificação de telefone
         tamanhoInputTelefone = telefoneCampo.value.length
        
        if(tamanhoInputTelefone != 16){
            telefoneErro.textContent = "Preencha o campo de telefone corretamente!"
            throw new Error ("Preencha o campo de telefone corretamente!")
        }else{
            telefoneErro.textContent = ""
        }

        // Verifica qual checkbox esta marcado
        
        if(contaProfissional.checked){
            console.log("Conta profissional")
            erroCheckbox.textContent = ""
        }else if(contaPessoal.checked){
            console.log("Conta pessoal")
            erroCheckbox.textContent = ""
        }else{
            erroCheckbox.textContent = "Escolha o tipo de conta"
            throw new Error("Escolha o tipo de conta")
        }

    }catch(erro){
        console.log(erro)
        event.preventDefault()
    }

})
