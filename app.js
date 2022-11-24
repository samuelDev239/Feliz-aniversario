const nav = document.querySelector('.navbar')
const btnzin = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const botao = document.querySelector('.btn-container')
const icon = document.querySelector('.icon')
const fundo = document.querySelector('.fundo')
const iconBack = document.querySelector('.seila')
const container = document.querySelector('.container')
const objeto = document.querySelector('.container-items')
const ham = document.querySelector('.hamburger')
const coracao = document.querySelector('.heart')
function depois(event) {
    if (event.type === "touchstart") event.preventDefault()
    nav.classList.toggle("active")
    coracao.classList.toggle("rem")
}
function change(event){
    if (event.type === "touchstart") event.preventDefault()
    botao.classList.toggle("active")
    container.classList.toggle("active")
    objeto.classList.toggle("active")
    coracao.classList.toggle("active")
    
    nav.classList.toggle("change")

}
function iconeChange(event){
    if (event.type === "touchstart") event.preventDefault()
    fundo.classList.toggle("active")

}
function iconeChangeE(event){
    if (event.type === "touchstart") event.preventDefault()
    fundo.classList.remove("active")

}


btnzin.addEventListener("click", depois)
btnzin.addEventListener("touchstart", depois)
botao.addEventListener("click", change)
botao.addEventListener("touchstart", change)
icon.addEventListener("click", iconeChange)
icon.addEventListener("touchstart", iconeChange)
iconBack.addEventListener("click", iconeChangeE)
iconBack.addEventListener("touchstart", iconeChangeE)