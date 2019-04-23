function tilbage() {
    window.location.href = 'index.html';
}

let startSpilStatus = true;

let startSpil = function() {
    let getSpilStartet = document.querySelector(".choice1");
    let getMap = document.querySelector(".map");
    
    if (startSpilStatus === true){
        getSpilStartet.style.visibility = "visible";
        getMap.style.visibility = "hidden";
    }
}

let rigtigtValgParaplyStatus = true; 

let rigtigtValgParaply = function() {
    let getRigtigtValgParaply = document.querySelector(".choice2");
    let getChoice1 = document.querySelector(".choice1");
    
    if (rigtigtValgParaplyStatus === true){
        getRigtigtValgParaply.style.visibility = "visible";
        getChoice1.style.visibility = "hidden"; 
    }
}

let forkertValgSolbrillerStatus = true;

let forkertValgSolbriller = function() {
    let getForkertValgSolbriller = document.querySelector(".choice3");
    let getChoice1 = document.querySelector(".choice1");
    
    if (forkertValgSolbrillerStatus === true){
        getForkertValgSolbriller.style.visibility = "visible";
        getChoice1.style.visibility = "hidden"; 
    }
}











