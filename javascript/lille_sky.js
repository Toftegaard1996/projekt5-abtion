/* Knapper */

function tilbage() {
    window.location.href = 'index.html';
}

function spil() {
    window.location.href = 'spil.html';
}

function dreng() {
    document.getElementsByClassName("boySelected").style.display = "block";

}

function lilleSky() {
    let getLilleSky = document.querySelector(".lille-sky").style.visibility = "hidden";
}

setTimeout(lilleSky, 3000);