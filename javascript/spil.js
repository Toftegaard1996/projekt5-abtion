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
    
    let getSpilStartet = document.querySelector(".choice1");
    let getMap2 = document.querySelector(".mapLevel2");
    
    if (rigtigtValgParaplyStatus === true){
        getRigtigtValgParaply.style.visibility = "visible";
        getChoice1.style.visibility = "hidden"; 
        setTimeout(function(){ 
            getRigtigtValgParaply.style.visibility = "hidden";
            getSpilStartet.style.visibility = "hidden";
            getMap2.style.visibility = "visible";
        },2000);
    }
}

let forkertValgSolbrillerStatus = true;

let forkertValgSolbriller = function() {
    let getForkertValgSolbriller = document.querySelector(".choice3");
    let getChoice1 = document.querySelector(".choice1");
    
    let getSpilStartet = document.querySelector(".choice1");
    let getMap = document.querySelector(".map");
    
    if (forkertValgSolbrillerStatus === true){
        getForkertValgSolbriller.style.visibility = "visible";
        getChoice1.style.visibility = "hidden"; 
                setTimeout(function(){ 
            getForkertValgSolbriller.style.visibility = "hidden";
        getChoice1.style.visibility = "visible"; 
                    
            
        },2000);
    }
}

/* LEVEL 2: TEST */












