const hamburger = document.querySelector("#bar")
const navmenu = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})