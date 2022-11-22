const nav = document.querySelector('.navbar')
const btnzin = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
function depois(event) {
    if (event.type === "touchstart") event.preventDefault()
    nav.classList.toggle("active")
}

btnzin.addEventListener("click", depois)
btnzin.addEventListener("touchstart", depois)