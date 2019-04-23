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

