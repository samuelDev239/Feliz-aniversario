const nav = document.querySelector('.navbar')
const btnzin = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const botao = document.querySelector('.btn-container')
function depois(event) {
    if (event.type === "touchstart") event.preventDefault()
    nav.classList.toggle("active")
}
function change(event){
    if (event.type === "touchstart") event.preventDefault()
    botao.classList.toggle("active")

}

btnzin.addEventListener("click", depois)
btnzin.addEventListener("touchstart", depois)
botao.addEventListener("click", change)
botao.addEventListener("touchstart", change)