import "./styles.css"
import { initailPageLoader, menupage } from "./greeting.js"

const homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", initailPageLoader)

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", menupage)