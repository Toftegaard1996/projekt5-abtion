/* Knapper */

function tilbage() {
    window.location.href = 'index.html';
}

function spil() {
    window.location.href = 'spil.html';
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
        getMenuBoksTitle.style.opacity = "1";
        
        let arrayLength = getMenuBoksLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuBoksLinks[i].style.opacity = "1";
        }
        
        toggleMenuStatus = true;
    }
    
    else if (toggleMenuStatus === true) {
        getMenuBoks.style.width = "80px";
        getMenuBoksTitle.style.opacity = "0";
        
        let arrayLength = getMenuBoksLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuBoksLinks[i].style.opacity = "0";
        }
        
        getMenuBoksUl.style.visibility = "hidden";
        
        toggleMenuStatus = false;
    }
}

/* Knap til start af kort spil */

let vejrSpilStatus = true;

let vejrSpil = function() {
    let getVejr = document.querySelector(".vejr");
    let getkortSpil = document.querySelector(".spilValg");
    
    if (vejrSpilStatus === true) {
        getkortSpil.style.visibility = "visible";
        getVejr.style.visibility = "hidden";
    }
}

/* Kort spil valg rigtigt */

let valgSpilStatus = true;

let valgSpil = function() {
    let getValgSpil = document.querySelector(".spilValg");
    let getValgRigtigt = document.querySelector(".kortSpilRigtigt");
    
    if (valgSpilStatus === true) {
        getValgSpil.style.visibility = "hidden";
        getValgRigtigt.style.visibility = "visible";
        
    }
}

let rigtigtValgStatus = true;

let rigtigtValg = function() {
    let getRigtigtValg = document.querySelector(".kortSpilRigtigt");
    let getVejrSide = document.querySelector(".vejr");
    
    if (rigtigtValgStatus === true) {
        getRigtigtValg.style.visibility = "hidden";
        getVejrSide.style.visibility = "visible";
    }
}


/* Kort spil valg forkert */

let valgSpilWrongStatus = true;

let valgSpilWrong = function() {
    let getValgSpil = document.querySelector(".spilValg");
    let getValgForkert = document.querySelector(".kortSpilForkert");
    
    if (valgSpilStatus === true) {
        getValgSpil.style.visibility = "hidden";
        getValgForkert.style.visibility = "visible";
        
    }
}

let forkertValgStatus = true;

let forkertValg = function() {
    let getForkertValg = document.querySelector(".kortSpilForkert");
    let getValgSpil = document.querySelector(".spilValg");
    
    if (rigtigtValgStatus === true) {
        getForkertValg.style.visibility = "hidden";
        getValgSpil.style.visibility = "visible";
    }
}