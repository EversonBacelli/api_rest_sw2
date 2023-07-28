import buscarDados from "./get.js";
import enviarDados from "./post.js";

buscarDados();

let btn = document.querySelector("button")
//console.log(btn)

btn.addEventListener('click', enviarDados)