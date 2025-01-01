import "./styles.css"
import { initailPageLoader, menupage, clearContent, about } from "./greeting.js"

const homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", () => {
    const body = document.querySelector("body")
     body.style.backgroundColor = "white";
     const header = document.querySelector("header")
     header.style.position = "static"
    clearContent()
    initailPageLoader()
})

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    clearContent()
    menupage()
    const body = document.querySelector("body")
     body.style.backgroundColor = "black";
     const header = document.querySelector("header")
     header.style.position = "fixed"
   
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
    clearContent()
    about()
    const header = document.querySelector("header")
     header.style.position = "static"
})

