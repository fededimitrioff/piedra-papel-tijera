let contadorUsuario = 0;
let contadorPc = 0;

let puntosUsuario = document.querySelector("#puntos-usuario");
let puntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let ganaPunto = document.querySelector("#gana-punto");
let botonReiniciar = document.querySelector("#reiniciar");
let elegiTuArma = document.querySelector ("#elegi-tu-arma");
let instrucciones = document.querySelector ("#instrucciones");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

let arma = document.querySelectorAll(".arma");

arma.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
})

function iniciarTurno(e) {

    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionPc === 0) {
        eleccionPc = "piedra ✊";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel 🖐";
    } else{
        eleccionPc = "tijera ✌";
    }

    contenedorEleccionPc.innerText = eleccionPc;
    contenedorEleccionUsuario.innerText = eleccionUsuario;

    if(
        (eleccionUsuario === "piedra ✊" && eleccionPc === "tijera ✌") ||
        (eleccionUsuario === "papel 🖐" && eleccionPc === "piedra ✊") ||
        (eleccionUsuario === "tijera ✌" && eleccionPc === "piedra ✊")
    ) {
        ganaUsuario();
    } else if(
        (eleccionPc === "piedra ✊" && eleccionUsuario === "tijera ✌") ||
        (eleccionPc === "papel 🖐" && eleccionUsuario === "piedra ✊") ||
        (eleccionPc === "tijera ✌" && eleccionUsuario === "piedra ✊")
    ) {
        ganaPc();
    } else{
        empate();
    }

    mensaje.classList.remove("disable");
    puntosUsuario.innerText = contadorUsuario;
    puntosPc.innerText = contadorPc;

    if(contadorPc === 5 || contadorUsuario === 5){
        partidaFinalizada();
    }
}

function ganaUsuario(){
    contadorUsuario++;
    ganaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPc(){
    contadorPc++;
    ganaPunto.innerText = "¡La Computadora ganó un punto! 💀";
}

function empate(){
    ganaPunto.innerText = "¡Punto empatado! 🤝";
}

function partidaFinalizada(){
    botonReiniciar.classList.remove("disable");
    elegiTuArma.classList.add("disable");
    if (contadorPc === 5){
        instrucciones.innerText = "😣 ¡Oh no! Perdiste la partida 😣"
    }else if (contadorUsuario === 5){
        instrucciones.innerText = "🏅 ¡Felicitaciones! Ganaste la partida 🏅"
    }
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function reiniciarJuego(){
    contadorUsuario = 0;
    contadorPc = 0;

    mensaje.classList.add("disable");
    elegiTuArma.classList.remove("disable");
    puntosUsuario.innerText = contadorUsuario;
    puntosPc.innerText = contadorPc;

}