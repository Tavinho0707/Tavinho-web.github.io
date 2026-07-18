// ===== FECHAS =====
const fechaConocimos = new Date(2025, 7, 7, 12, 47, 0);
const fechaNovios = new Date(2025, 10, 1, 22, 2, 0);

// ========= FRASES =========

const frases = [
    "❤️ Cada segundo contigo vale la pena.",
    "🌙 Mi cielo oscuro.",
    "💖 Gracias por llegar a mi vida.",
    "✨ Siempre elegiría volver a conocerte.",
    "🥰 Mi lugar favorito siempre será contigo.",
    "💍 Nuestro tiempo apenas comienza."
];

function cambiarFrase() {
    const random = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerHTML = frases[random];
}

cambiarFrase();
setInterval(cambiarFrase,60000);

// ========= CONTADOR =========

function actualizar(fecha,id){

    const ahora = new Date();

    let diff = ahora - fecha;

    if(diff<0) return;

    const segundos = Math.floor(diff/1000)%60;
    const minutos = Math.floor(diff/(1000*60))%60;
    const horas = Math.floor(diff/(1000*60*60))%24;

    const diasTotales = Math.floor(diff/(1000*60*60*24));

    const años = Math.floor(diasTotales/365);
    const meses = Math.floor((diasTotales%365)/30);
    const dias = (diasTotales%365)%30;

    document.getElementById(id+"-anios").textContent =
        String(años).padStart(2,"0");

    document.getElementById(id+"-meses").textContent =
        String(meses).padStart(2,"0");

    document.getElementById(id+"-dias").textContent =
        String(dias).padStart(2,"0");

    document.getElementById(id+"-horas").textContent =
        String(horas).padStart(2,"0");

    document.getElementById(id+"-minutos").textContent =
        String(minutos).padStart(2,"0");

    document.getElementById(id+"-segundos").textContent =
        String(segundos).padStart(2,"0");

}

function iniciar(){

    actualizar(fechaConocimos,"c");
    actualizar(fechaNovios,"n");

}

iniciar();

setInterval(iniciar,1000);

const musica = document.getElementById("bgMusic");
const boton = document.getElementById("musicBtn");

musica.volume = 0.20;

// Empieza con el primer toque en cualquier parte
document.addEventListener("pointerdown", iniciarMusica, { once: true });

function iniciarMusica() {
    musica.play().then(() => {
        boton.innerHTML = "♫";
        boton.classList.remove("mute");
    }).catch(() => {});
}

boton.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        boton.innerHTML = "♫";
        boton.classList.remove("mute");

    } else {

        musica.pause();
        boton.innerHTML = "♪";
        boton.classList.add("mute");

    }

});