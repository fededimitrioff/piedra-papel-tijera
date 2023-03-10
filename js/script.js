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
        eleccionPc = "piedra β";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel π";
    } else{
        eleccionPc = "tijera β";
    }

    contenedorEleccionPc.innerText = eleccionPc;
    contenedorEleccionUsuario.innerText = eleccionUsuario;

    if(
        (eleccionUsuario === "piedra β" && eleccionPc === "tijera β") ||
        (eleccionUsuario === "papel π" && eleccionPc === "piedra β") ||
        (eleccionUsuario === "tijera β" && eleccionPc === "papel π")
    ) {
        ganaUsuario();
    } else if(
        (eleccionPc === "piedra β" && eleccionUsuario === "tijera β") ||
        (eleccionPc === "papel π" && eleccionUsuario === "piedra β") ||
        (eleccionPc === "tijera β" && eleccionUsuario === "papel π")
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
    ganaPunto.innerText = "Β‘Ganaste un punto! π₯";
}

function ganaPc(){
    contadorPc++;
    ganaPunto.innerText = "Β‘La Computadora ganΓ³ un punto! π";
}

function empate(){
    ganaPunto.innerText = "Β‘Punto empatado! π€";
}

function partidaFinalizada(){
    botonReiniciar.classList.remove("disable");
    elegiTuArma.classList.add("disable");
    if (contadorPc === 5){
        instrucciones.innerText = "π£ Β‘Oh no! Perdiste la partida π£"
    }else if (contadorUsuario === 5){
        instrucciones.innerText = "π Β‘Felicitaciones! Ganaste la partida π"
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
    instrucciones.innerText= "El primero en llegar a 5 puntos gana";
}