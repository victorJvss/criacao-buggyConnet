const voltarParaHome = document.querySelector(".perfil__opcoes__sair");
const opcaoAjuda = document.querySelector(".perfil__opcoes__opcao__perfil__temas__ajuda");
const opcoesCarteira = document.querySelector(".perfil__opcoes__opcao__perfil__temas__carteira");
const opcoesViagens =  document.querySelector(".perfil__opcoes__opcao__perfil__temas__viagens");

voltarParaHome.addEventListener("click", () => {
    window.location.href = "./home.html"
})

opcaoAjuda.addEventListener("click", () => {
   window.location.href = "./hellp.html"
})

opcoesCarteira.addEventListener("click", () => {
    window.location.href = "./wallet.html"
})

opcoesViagens.addEventListener("click", () => {
    window.location.href = "./trips.html"
})