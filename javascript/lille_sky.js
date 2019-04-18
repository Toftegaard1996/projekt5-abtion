/* Knapper */

function tilbage() {
    window.location.href = 'index.html';
}

function spil() {
    window.location.href = 'spil.html';
}

function vejrSpil() {
    let getVejrKnap = document.querySelector(".vejr").style.display = "hidden";
    let getKortSpil = document.querySelector(".spilValg").style.display = "visible";
}

function dreng() {
    document.querySelector("boySelected").style.display = "block";

}

/* timing */

function lilleSky() {
    let getLilleSky = document.querySelector(".lille-sky").style.visibility = "hidden";
}

function vejr() {
    let getVejr = document.querySelector(".vejr").style.visibility = "visible";
}

setTimeout(lilleSky, 3000);

setTimeout(vejr, 3000);