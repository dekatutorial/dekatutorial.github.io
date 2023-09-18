document.querySelector(".wm").children[0].textContent = tag;
var bgku = document.querySelector(".bg").children;

document.querySelector(".row").children[0].src = "https://dekatutorial.github.io/yolandzu-c/kado.png";

bgku[5].style = 'background-image: url("' + background1 + '")';
bgku[4].style = 'background-image: url("' + background2 + '")';
bgku[3].style = 'background-image: url("' + background3 + '")';
bgku[2].style = 'background-image: url("' + background4 + '")';
bgku[1].style = 'background-image: url("' + background5 + '")';
bgku[0].style = 'background-image: url("' + background6 + '")';

var audio = new Audio(musik);
audio.autoplay = true;
audio.loop = true;
function ilang() {
  audio.play();
  open = document.querySelector(".open");
  open.style = "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(-20px); filter: brightness(0);";
  setTimeout(function () {
    open.style = "display:none;";
  }, 1500);

  start();
}
var bisaklik = true;

function start() {
  if (bisaklik) {
    setTimeout(bgZoomIn, 500);

    setTimeout(() => {
      tampilContent1();
    }, 1000);
  }
  bisaklik = false;
}

// Input Background
bg = document.querySelector(".bg");

function bgZoomIn() {
  bg.style = "transform: scale(" + 1.3 + ");";
}
function bgZoomOut() {
  bg.style = "transform: scale(" + 1 + ");";
}

function showBtnNext() {
  btnLanjut.style = "opacity: 1";
}
function hideBtnNext() {
  btnLanjut.style = "opacity: 0";
}

function ketik(text, elmId, fungsiSelesai) {
  var elem = document.querySelector(elmId);
  elem.innerHTML = "";
  var txt = text;
  var speed = 50;
  var start = 0;
  var arr = [];

  for (i = 0; i < txt.length; i++) {
    arr.push(txt[i]);
  }
  var indexKata = 0;
  arr.forEach((element) => {
    setTimeout(() => {
      indexKata++;
      if (element == "#") {
        elem.innerHTML += "<br>";
      } else {
        elem.innerHTML += element;
      }

      if (indexKata == arr.length) {
        setTimeout(fungsiSelesai, 100);
      }
    }, start);
    start += speed;
  });
}

function ketik5(text, elmId, fungsiSelesai) {
  var elem = document.querySelector(elmId);
  elem.innerHTML = "";
  var txt = text;
  var speed = 50;
  var start = 0;
  var arr = [];

  for (i = 0; i < txt.length; i++) {
    arr.push(txt[i]);
  }
  var indexKata = 0;
  arr.forEach((element) => {
    setTimeout(() => {
      indexKata++;
      updatescroll();
      if (element == "#") {
        elem.innerHTML += "<br>";
      } else {
        elem.innerHTML += element;
      }

      if (indexKata == arr.length) {
        setTimeout(fungsiSelesai, 100);
      }
    }, start);
    start += speed;
  });
}

function tampilLope() {
  bgLove = document.querySelector(".bg-love");
  x = innerWidth / 15;
  for (i = 0; i < x; i++) {
    delay = Math.random() * 5 + "s";
    durasi = Math.random() * (7 - 3) + 3 + "s";

    var div = document.createElement("div");
    div.setAttribute("style", "animation-delay: " + delay + ";animation-duration: " + durasi);
    div.innerHTML = '<i class="love material-icons-sharp"> favorite </i>';
    console.log(i);

    bgLove.appendChild(div);
  }
}

$(window).on("load", function () {
  $(".preload").fadeOut("slow");
});

const swalo = Swal.mixin({ allowOutsideClick: false, showCancelButton: false, customClass: { popup: "border-radius" } });

function slide1() {
  var txt = ucapan1;

  function showlanjut1() {
    document.querySelector(".lanjut1").style = "opacity: 1";
  }

  ketik(txt, ".typetxt1", showlanjut1);
}

async function dapethadiah() {
  await swalo.fire({ title: "Yeayy kamu dapet " + kado, confirmButtonText: "OK" });
  await swalo.fire({ title: "Lanjut gak nihh", confirmButtonText: "Lanjuttt" });
  tampilContent4();
}
function munculkado() {
  var kadoku = document.querySelectorAll(".kado");
  setTimeout(() => {
    kadoku[0].style = "animation: anmkado 0.5s ease; opacity: 1;";
  }, 100);
}
function slide2() {
  ketik(ucapan2, ".typetxt2", munculkado);
}

async function sendwish() {
  pesanku = valuewish.value;
  if (pesanku) {
    await swalo.fire({ confirmButtonText: "OK", title: "Kirim ke wa aku yah" });
    location.assign("https://wa.me/?text=" + pesanku);
  } else {
    await swalo.fire({ confirmButtonText: "OK", title: "Jangan dikosongin dong" });
  }
}

function slide3() {
  function munculwish() {
    document.querySelector("#valuewish").style = "animation: anmwish 0.7s ease; opacity: 1";

    setTimeout(munculbtnwish, 500);
  }
  function munculbtnwish() {
    document.querySelector(".kirimwish").style = "animation: anmkado 0.7s ease; opacity: 1";
  }
  function showlanjut1() {
    document.querySelector(".lanjut6").style = "opacity: 1";
  }

  ketik(ucapan6, ".typetxt3", munculwish);
}

function slide4() {
  var txt = ucapan3;

  function showlanjut1() {
    document.querySelector(".lanjut4").style = "opacity: 1";
  }

  ketik(txt, ".typetxt4", showlanjut1);
}

function slide5() {
  var txt = ucapan4;
  function showlanjut1() {
    document.querySelector(".lanjut5").style = "opacity: 1";
  }

  ketik5(txt, ".typetxt5", showlanjut1);
}

function updatescroll() {
  valcontainer = document.querySelector(".slidekuy");
  valcontent = document.querySelector(".typetxt5");

  valcontainer.scrollTop = valcontent.scrollHeight;
}

function slide6() {
  var txt = ucapan5;

  function showlanjut1() {
    document.querySelector(".lanjut6").style = "opacity: 1";
  }

  ketik(txt, ".typetxt6", showlanjut1);
}

var bgs = document.querySelector(".bg").children;

function tampilContent1() {
  document.querySelector(".contentslide1").style = " display: block";
  slide1();
}

function tampilContent2() {
  bgZoomOut();
  document.querySelector(".contentslide1").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide1").style = "opacity: 0; display: none";
  }, 1000);

  bgs[5].style = "opacity: 0";
  document.querySelector(".contentslide2").style = " display: flex";
  setTimeout(slide2, 1000);
}
// ============

function tampilContent4() {
  bgZoomIn();
  document.querySelector(".contentslide2").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide2").style = "opacity: 0; display: none";
  }, 1000);

  bgs[4].style = "opacity: 0";
  document.querySelector(".contentslide4").style = " display: block";
  setTimeout(slide4, 1000);
}

function tampilContent5() {
  bgZoomOut();
  document.querySelector(".contentslide4").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide4").style = "opacity: 0; display: none";
  }, 1000);

  bgs[3].style = "opacity: 0";
  document.querySelector(".contentslide5").style = " display: block";
  setTimeout(slide5, 1500);
}

function tampilContent6() {
  bgZoomIn();
  document.querySelector(".contentslide5").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide5").style = "opacity: 0; display: none";
  }, 1000);

  bgs[2].style = "opacity: 0";
  document.querySelector(".contentslide6").style = " display: block";
  setTimeout(slide6, 1500);
}

function tampilContent3() {
  bgZoomOut();
  tampilLope();
  document.querySelector(".contentslide6").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide6").style = "opacity: 0; display: none";
  }, 1000);

  bgs[1].style = "opacity: 0";
  document.querySelector(".contentslide3").style = " display: flex";
  setTimeout(slide3, 1000);
}
