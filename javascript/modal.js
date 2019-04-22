// henter modal
var modal = document.getElementById('myModal');

// sætter billedet inde i modal- alt på billede bliver brugt som tekst
var img = document.getElementById('myImg');
var modalImg = document.getElementById("bigVen");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// span elementet bliver hentet til at lukke
var span = document.getElementsByClassName("close")[0];

// når man klipper på x, lukker modal ned
span.onclick = function() { 
  modal.style.display = "none";
}