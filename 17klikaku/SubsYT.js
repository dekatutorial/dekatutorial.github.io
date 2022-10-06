$(window).on("load", function () { 
  $(".preload").fadeOut("slow");
});

function ucapan() {
  var ucapan = document.querySelector(".ucapan").children;
  var content = document.querySelector(".content");

  for (i = ucapan.length - 1; i >= 0; i--) {
    var element = document.createElement("div");
    element.classList.add("teks");
    element.setAttribute("onclick", "klikme(this)");
    element.textContent = ucapan[i].innerHTML;
    content.appendChild(element);
  }
}

function klikme(elemen) {
  musik.play();
  elemen.style = "transform: rotate(10deg) translateY(50px) translateX(50px); opacity: 0;";
  setTimeout(function () {
    elemen.style = "display: none;";
  }, 500);
}

function tampilModal() {
  var modalContent = document.querySelector(".container-modal");
  var modal = document.querySelector(".modal");
  modalContent.style = "display: flex;";
  setTimeout(function () {
    modalContent.style = "display: flex; opacity: 1;";
  }, 50);
  setTimeout(function () {
    modal.style = "transform: translateY(0); opacity: 1;";
  }, 500);
}

// Lope
function buatLope() {
  w = window.innerWidth;
  for (i = 0; i < w / 40; i++) {
    const para = document.createElement("span");
    const element = document.querySelector(".lope");
    element.appendChild(para);
  }
}
function makan() {
  titik = document.querySelectorAll("span");
  for (i = 0; i < titik.length; i++) {
    titik[i].innerHTML = '<i onclick="tampilModal()" class="material-icons-round"> favorite </i>';
    titik[i].style = "animation-duration:" + 40 / (Math.random() * (20 - 10) + 10) + "s; animation-delay:" + (Math.random() * 3 + 0) + "s;";
  }
}


var musik = "";
var foto = "";
var txtFoto = "";
var nomorWA = "";
var stiker = "";

function watermark(wm) {
  document.querySelector(".txtFrame").innerHTML = txtFoto;
  document.querySelector(".pesanwa").href = "https://api.whatsapp.com?phone=" + nomorWA;
  document.querySelector(".foto").src = foto;
  document.querySelector(".bg").style = 'background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("'+foto+'");';

  if(stiker){
    document.querySelector(".stiker").src = stiker;
  }
}
