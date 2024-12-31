import "./styles.css"
import { initailPageLoader, menupage, clearContent } from "./greeting.js"

const homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", () => {
    clearContent()
    initailPageLoader()
})

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    clearContent()
    menupage()
})

