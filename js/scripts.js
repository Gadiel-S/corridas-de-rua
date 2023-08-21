const menu = document.querySelector(".menu");
const menubtn = document.querySelector(".botao-menu");
const links = document.querySelector(".links-menu");
const botaoFechar = document.querySelector(".links-menu button");
const botaoVoltar = document.querySelector(".botao-voltar");
const botaoProx = document.querySelector(".botao-proximo");
const carroselImagens = document.querySelectorAll(".destaque-fundo");
const carroselEventos = document.querySelectorAll(".evento-destaque");
const botaoSubir = document.querySelector(".botao-subir");

// setInterval(myFunction, 5 * 1000);

document.addEventListener("scroll", () => {
    if(window.scrollY > 220) {
        menu.classList.add("encolher-cabecalho");
        botaoSubir.classList.add("mostrar-botao-subir");
    } else if(window.scrollY < 180) {
        menu.classList.remove("encolher-cabecalho");
        botaoSubir.classList.remove("mostrar-botao-subir");
    }
})

menubtn.addEventListener("click", () => {
    links.classList.toggle("abrir-menu");
})

function sumirMenu () {
    links.classList.add("mostrar-menu");
}

botaoFechar.addEventListener("click", () => {
    links.classList.remove("abrir-menu");
})

botaoVoltar.addEventListener("click", () => {
    let eventoAtivo = document.querySelector(".evento-ativo");
    let imagemAtiva = document.querySelector(".imagem-ativa");
    eventoAtivo.classList.remove("evento-ativo");
    imagemAtiva.classList.remove("imagem-ativa");

    let carroselEventosArray = Array.from(carroselEventos);
    let carroselImagensArray = Array.from(carroselImagens);
    let indiceEvento = carroselEventosArray.indexOf(eventoAtivo);
    let indiceImagem = carroselImagensArray.indexOf(imagemAtiva);

    if(indiceEvento == 0 && indiceImagem == 0) {
        carroselEventosArray[carroselEventosArray.length-1].classList.add("evento-ativo");
        carroselImagensArray[carroselImagensArray.length-1].classList.add("imagem-ativa");
    } else {
        carroselEventosArray[indiceEvento-1].classList.add("evento-ativo");
        carroselImagensArray[indiceImagem-1].classList.add("imagem-ativa");
    }
})

botaoProx.addEventListener("click", () => {
    let eventoAtivo = document.querySelector(".evento-ativo");
    let imagemAtiva = document.querySelector(".imagem-ativa");
    eventoAtivo.classList.remove("evento-ativo");
    imagemAtiva.classList.remove("imagem-ativa");

    let carroselEventosArray = Array.from(carroselEventos);
    let carroselImagensArray = Array.from(carroselImagens);
    let indiceEvento = carroselEventosArray.indexOf(eventoAtivo);
    let indiceImagem = carroselImagensArray.indexOf(imagemAtiva);

    if(indiceEvento == carroselEventosArray.length-1 && indiceImagem == carroselImagensArray.length-1) {
        carroselEventosArray[0].classList.add("evento-ativo");
        carroselImagensArray[0].classList.add("imagem-ativa");
    } else {
        carroselEventosArray[indiceEvento+1].classList.add("evento-ativo");
        carroselImagensArray[indiceImagem+1].classList.add("imagem-ativa");
    }
})