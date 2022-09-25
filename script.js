const closeBtn = document.getElementById("btn-close");
const openBtn = document.getElementById("btn-open");

const nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
    nav.classList.remove("navigation-open")  
})

openBtn.addEventListener("click", () => {
    nav.classList.add("navigation-open")  
})
