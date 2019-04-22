/* Knapper */

function tilbage() {
    window.location.href = 'index.html';
}

function spil() {
    window.location.href = 'spil.html';
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

/* Burgermenu (Jeg har fulgt en tutoriel fra mmtuts på youtube, men rettet koden til hvor jeg mente det er nødvendigt)*/

let toggleMenuStatus = false;

let toggleMenu = function() {
    let getMenuBoks = document.querySelector(".menu-boks");
    let getMenuBoksUl = document.querySelector(".menu-boks ul");
    let getMenuBoksTitle = document.querySelector(".menu-boks span");
    let getMenuBoksLinks = document.querySelectorAll(".menu-boks a");
    
    if (toggleMenuStatus === false) {
        getMenuBoksUl.style.visibility = "visible";
        getMenuBoks.style.width = "272px";
        getMenuBoksTitle.style.opacity = "0.5";
        
        let arrayLength = getMenuBoksLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            
        }
    }
}