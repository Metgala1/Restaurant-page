import "./styles.css"
import { greeting } from "./greeting.js";

console.log(greeting)
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

h1.textContent = greeting;
body.appendChild(h1)