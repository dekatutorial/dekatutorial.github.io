let swalo = Swal.mixin({ allowOutsideClick: false });
const openC = document.querySelector(".open");
const btnOpen = document.querySelector(".mail");
const content = document.querySelector(".content");
const stiker = document.querySelector(".stiker");
const teks = document.querySelector(".teks");
const btnG = document.querySelector(".btn-group");
const btnY = document.querySelector("#yes");
const btnN = document.querySelector("#no");

let audio = new Audio(musik);
audio.loop = true;
audio.autoplay = true;
async function popupawal() {
  swalo = Swal.mixin({ allowOutsideClick: false, confirmButtonText: "Next" });
  for (i = 0; i < popupAwal.length; i++) {
    await swalo.fire({
      imageUrl: popupAwal[i][0],
      title: popupAwal[i][1],
    });
  }
  showContent();
}
async function jikaiya() {
  for (i = 0; i < jikaIya.length; i++) {
    await swalo.fire({
      imageUrl: jikaIya[i][0],
      title: jikaIya[i][1],
    });
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lari(tombol) {
  let randY = getRandomInt(0, 90);
  let randX = getRandomInt(0, 90);
  tombol.style.position = "absolute";
  tombol.style.top = randY + "%";
  tombol.style.left = randX + "%";
}
function typing() {
  let i = 0;
  let speed = 80;
  let txtsatu = ucapanMaaf;
  teks.innerHTML = "";
  function typeWriter() {
    if (i < txtsatu.length) {
      if (txtsatu.charAt(i) == "#") {
        teks.innerHTML += "<br>";
      } else {
        teks.innerHTML += txtsatu.charAt(i);
      }

      teks.scrollTop = teks.scrollHeight;

      i++;
      console.log(txtsatu.length + " " + i);
      if (i == txtsatu.length) {
        btnG.classList.add("show");
      }
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}
function showContent() {
  content.classList.remove("d-none");
  setTimeout(typing, 1000);
}

btnOpen.addEventListener("click", () => {
  audio.play();
  openC.classList.add("hide");
  setTimeout(() => {
    popupawal();
    openC.remove();
  }, 1000);
});
btnY.addEventListener("click", () => {
  btnY.classList.remove("shake");
  jikaiya();
});
btnN.addEventListener("mouseover", () => {
  btnY.classList.add("shake");
  lari(btnN);
});
