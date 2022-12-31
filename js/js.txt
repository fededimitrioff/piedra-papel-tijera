let puntosUsuario = 0;
let puntosPc = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");

botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
})

function iniciarTurno(e) {
    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionPc === 0) {
        eleccionPc = "piedra ✊";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel 🖐";
    } else {
        eleccionPc = "tijera ✌";
    }

    if (
        (eleccionUsuario === "piedra ✊" && eleccionPc === "tijera ✌") ||
        (eleccionUsuario === "papel 🖐" && eleccionPc === "piedra ✊") ||
        (eleccionUsuario === "tijera ✌" && eleccionPc === "papel 🖐")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPc === "piedra ✊" && eleccionUsuario === "tijera ✌") ||
        (eleccionPc === "papel 🖐" && eleccionUsuario === "piedra ✊") ||
        (eleccionPc === "tijera ✌" && eleccionUsuario === "papel 🖐")
    ) {
        ganaPc();
    } else {
        empate();
    }

    mensaje.classList.remove("disable");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;

    if (puntosUsuario === 5 || puntosPc === 5) {
        if (puntosUsuario === 5){
            instrucciones.innerText = "🏅 ¡Felicitaciones! Ganaste la partida 🏅"
        } else if(puntosPc === 5){
            instrucciones.innerText = "😣 ¡Oh no! Perdiste la partida 😣"
        }
        elegiTuArma.classList.add("disable");
        reiniciar.classList.remove("disable");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}


function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPc() {
    puntosPc++;
    contenedorPuntosPc.innerText = puntosPc;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 💀"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 🤝"
}

function reiniciarJuego() {
    reiniciar.classList.add("disable");
    elegiTuArma.classList.remove("disable");
    mensaje.classList.add("disable");

    puntosUsuario = 0;
    puntosPc = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPc.innerText = puntosPc;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana"
}