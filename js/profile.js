const voltarParaHome = document.querySelector(".perfil__opcoes__sair");
const opcaoAjuda = document.querySelector(".perfil__opcoes__opcao__perfil__temas__ajuda");

voltarParaHome.addEventListener("click", () => {
    window.location.href = "./home.html"
})

opcaoAjuda.addEventListener("click", () => {
   window.location.href = "./hellp.html"
})

