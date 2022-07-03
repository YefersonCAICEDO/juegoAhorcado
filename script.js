//Seletores
let canvas = document.querySelector("canvas");
let agregar = document.getElementById("agregar-palabra").style.display = 'none';
let nuevooo = document.getElementById("nuevoJuego").style.display = 'none';
let volver = document.getElementById("volver").style.display = 'none';



var palabras = ['ALURA', 'Linkedin', 'HTML', 'ORACLE', 'JAVASCRIPT', 'CSS', 'PROGRAMACION', 'YEFERSON', 'JUEGO', 'IF', 'FOR', 'FUNCTION'];
var tablero = document.getElementById('horca').getContext('2d');
var palabraSecreta = "";
var letras = [];
var palabraCorrecta = "";
var errores = 8;
let letrasIncorrectas = [];
let numeroDeErrores = 8
let letraElegida = [];

document.getElementById("iniciar-juego").onclick = () => {
    iniciarJuego();
}

document.getElementById("btn-guardar").onclick = () => {
    guardarPalabra();

}

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    return palabra
}

function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key)
        return false

    } else {
        letras.push(key)
        return true
    }
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
        errores -= 1
    }
}

function verificarFinJuego(letra) {
    if (letraElegida.length < palabraSecreta.length) {
        letrasIncorrectas.push(letra);
        if (letrasIncorrectas.length > numeroDeErrores) {
            perdiste()
        } else if (letraElegida.length < palabraSecreta.length) {
            adicionarLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores)
        }
    }
}

function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
        ganaste()
    }
}

function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
        return true;
    } else {
        return false;
    }
}

function ensenarPantallaDeAgregarPalabra() {
    document.getElementById("dPrincipal").style.display = 'none';
    document.getElementById("nuevoJuego").style.display = 'none';
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementById("volver").style.display = "block";

}

function guardarPalabra() {
    let nuevaPalabra = document.getElementById('input-nueva-palavra').value;
    if (nuevaPalabra !== "") {
        palabras.push(nuevaPalabra.toUpperCase());
        alert("Guardada.. A JUGAR")
        document.getElementById("agregar-palabra").style.display = "none";
        iniciarJuego();
    } else {
        alert("Digita una palabra")
    }

}



function iniciarJuego() {
    document.getElementById("dPrincipal").style.display = 'none';
    document.getElementById("nuevoJuego").style.display = 'block';
    document.getElementById("volver").style.display = "block";

    escojerPalabraSecreta();
    dibujarLineas();

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase()

        if (letrasIncorrectas.length <= numeroDeErrores) {
            if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
                if (palabraSecreta.includes(letra)) {
                    adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                    for (let i = 0; i < palabraSecreta.length; i++) {
                        if (palabraSecreta[i] === letra) {
                            escrribirLetraCorrecta(i)
                            verificarVencedor(letra)
                        }
                    }
                } else {
                    if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
                    dibujarAhorcado(errores)
                    verificarFinJuego(letra)
                }
            }
        } else {
            recargar()
        }
    };
}