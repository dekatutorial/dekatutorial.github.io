var musik, idtelegram;
function htmlscript(musik, idtele) {
  var open = document.querySelector(".open");
  var openleft = document.querySelector(".left");
  var openright = document.querySelector(".right");
  var lock = document.querySelector(".lock");
  var opentxt = document.querySelector(".text");
  // ==============

  if (musik != "") {
    musiku = new Audio(musik);
    musiku.autoplay = true;
    musiku.loop = true;
  }

  var wmwm = "Yang Mau Custom Order Aja di Deka Tutorial 😎";

  console.log("%c" + wmwm, "color: white; font-size: 2.5em; font-weight: 800; text-shadow: 2px 1.5px 0 red, -2px -1.5px 0 blue;");
  // =========

  lock.addEventListener("click", () => {
    if (musik != "") {
      musiku.play();
    }
    ilangGembok();
    setTimeout(() => {
      slideGembok();
      ilangBawah();
    }, 500);
    setTimeout(kurangBorder, 900);
    setTimeout(() => {
      open.style = "display: none;";
    }, 1300);
  });

  function slideGembok() {
    openleft.style = "transition: .8s ease-out; width: 0";
    openright.style = "transition: .8s ease-out; width: 0";
  }

  function kurangBorder() {
    openleft.style = "transition: .4s ease-out; opacity: 0; width: 0";
    openright.style = "transition: .4s ease-out; opacity: 0; width: 0";
  }

  function ilangGembok() {
    lock.style = "transition: .2s ease-out all; scale: 1.2";
    setTimeout(() => {
      lock.style = "transition: .3s ease-out all; scale: 0";
    }, 300);
  }

  function ilangBawah() {
    opentxt.style = "transition: .5s ease all; transform: translateY(50px); opacity: 0";
  }
  // =========

  if (tampil) {
    var eHelp = document.createElement("div");
    eHelp.setAttribute("class", "help");

    var eDesc = document.createElement("div");
    eDesc.setAttribute("class", "desc");

    var eA = document.createElement("a");
    eA.setAttribute("href", "#");
    eA.textContent = "Tutorial Bikin";

    var eInput = document.createElement("input");
    eInput.setAttribute("hidden", "");
    eInput.setAttribute("type", "checkbox");
    eInput.setAttribute("name", "menu");
    eInput.setAttribute("id", "menu");

    var eLabel = document.createElement("label");
    eLabel.setAttribute("for", "menu");

    var eIcon = document.createElement("div");
    eIcon.setAttribute("class", "icon");

    var eLine = document.createElement("div");
    eLine.setAttribute("class", "line");

    var eClose = document.createElement("div");
    eClose.setAttribute("class", "close");

    var eDiv1 = document.createElement("div");
    var eDiv2 = document.createElement("div");
    var eDiv3 = document.createElement("div");
    var eDiv4 = document.createElement("div");
    var eDiv5 = document.createElement("div");

    eHelp.appendChild(eDesc);
    eDesc.appendChild(eA);

    eHelp.appendChild(eInput);

    eHelp.appendChild(eLabel);
    eLabel.appendChild(eIcon);

    eIcon.appendChild(eLine);
    eLine.appendChild(eDiv1);
    eLine.appendChild(eDiv2);
    eLine.appendChild(eDiv3);

    eIcon.appendChild(eClose);
    eClose.appendChild(eDiv4);
    eClose.appendChild(eDiv5);
    open.after(eHelp);

    var menu = document.querySelector("#menu");
    var icon = document.querySelector(".icon");
    var line = document.querySelector(".line");
    var close = document.querySelector(".close");
    var menudesc = document.querySelector(".desc");

    menu.addEventListener("change", (e) => {
      menuku(e.currentTarget);
    });
    menu.checked = false;
    function menuku(ini) {
      if (ini.checked) {
        menuTampil();

        setTimeout(() => {
          descTampil();
        }, 100);
      } else {
        descTutup();
        menuTutup();
      }
    }

    function menuTampil() {
      icon.style = "transition: .2s ease all; scale: 0";
      setTimeout(() => {
        line.style = "display: none";
        close.style = "display: flex";
        icon.style = "transition: .2s ease all; scale: 1";
      }, 200);
    }
    function menuTutup() {
      icon.style = "transition: .2s ease all; scale: 0";
      setTimeout(() => {
        line.style = "display: flex";
        close.style = "display: none";
        icon.style = "transition: .2s ease all; scale: 1";
      }, 200);
    }

    function descTampil() {
      menudesc.style = "transition: .2s ease all; scale: 1;";
    }
    function descTutup() {
      menudesc.style = "transition: .2s ease all; scale: 0;";
    }

    // ======================
    var eWm = document.createElement("div");
    eWm.setAttribute("class", "tandaair");

    var eAwm = document.createElement("a");
    eAwm.setAttribute("href", "#");
    eAwm.textContent = "Made by Deka Tutorial";

    eWm.appendChild(eAwm);
    document.querySelector("body").appendChild(eWm);
  }
  // ===================
  var slider = document.getElementById("slider"),
    sliderItems = document.getElementById("items");
  // prev = document.getElementById("prev"),
  // next = document.getElementById("next");
  var wrapper = slider,
    items = sliderItems;
  // =============================================
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = document.querySelector("#items").children,
    slidesLength = slides.length,
    slideSize = document.querySelector("#items").children[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(false),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  // items.appendChild(cloneFirst);
  // items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add("loaded");

  // Mouse and Touch events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  // prev.addEventListener("click", function () {
  //   if (index != 0) {
  //     shiftSlide(-1);
  //   }
  // });
  // next.addEventListener("click", function () {
  //   if (index != slidesLength - 1) {
  //     shiftSlide(1);
  //   }
  // });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
    // console.log(posX2);
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold && index != slidesLength - 1) {
      if (index == slidesLength - 2) {
        openmodal();
      }
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold && index != 0) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
      }
    }
    // console.log(index);

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");

    // if (index == -1) {
    //   items.style.left = -(slidesLength * slideSize) + "px";
    //   index = slidesLength - 1;
    // }

    // if (index == slidesLength) {
    //   console.log(slidesLength);
    //   items.style.left = -(1 * slideSize) + "px";
    //   index = 0;
    // }

    allowShift = true;
  }
  // console.log(index);
  // =============================

  var pesanku;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var link = location.href;

  var swalo = Swal.mixin({ allowOutsideClick: false, confirmButtonText: "OK" });
  async function openmodal() {
    await swalo.fire({ title: "Tulis pesan", input: "textarea", confirmButtonText: "Kirim", showCloseButton: true }).then(async (result) => {
      if (result.isConfirmed) {
        swalo.fire({
          title: "Mengirim pesan",
          didOpen: () => {
            swalo.showLoading();
          },
        });
        swalo.showLoading();
        pesanku = result.value;
        console.log(pesanku);

        var dates = new Date();
        var date = dates.getDate();
        var month = months[dates.getMonth()];
        var year = dates.getFullYear();
        var hours = dates.getHours();
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = dates.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;

        var fulldate = date + " " + month + " " + year + " (" + hours + ":" + minutes + ")";
        console.log(fulldate);

        if (pesanku) {
          // local
          $.ajax({
            url: "",
            type: "POST",
            data: {
              pesan: pesanku,
            },
            cache: false,
            success: async function (dataResult) {
              if (idtele == "") {
                console.log(dataResult);
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                  await swalo.fire({
                    icon: "success",
                    title: "Pesan berhasil dikirim!",
                  });
                } else if (dataResult.statusCode == 201) {
                  await swalo.fire({
                    icon: "error",
                    title: "Pesan gagal terkirim!",
                    text: "Silahkan ulangi lagi",
                  });
                }

                shiftSlide(-1);
              }
            },
          });
          // tele
          if (idtele != "") {
            pesanku = "Pesan : \n" + pesanku + "\n\n" + fulldate + "\n" + link;
            $.ajax({
              url: "https://dekatutorial.codingbucin.my.id/",
              type: "POST",
              data: {
                chat_id: idtele,
                pesan: pesanku,
              },
              cache: false,
              success: async function (dataResult) {
                console.log(dataResult);
                if (dataResult.statusCode == 200) {
                  await swalo.fire({
                    icon: "success",
                    title: "Pesan berhasil dikirim!",
                  });
                } else if (dataResult.statusCode == 201) {
                  await swalo.fire({
                    icon: "error",
                    title: "Pesan gagal terkirim!",
                    text: "Silahkan ulangi lagi",
                  });
                }

                shiftSlide(-1);
              },
            });
          }
        } else {
          await swalo.fire({ confirmButtonText: "Ok", title: "Jangan dikosongin dong" });

          openmodal();
        }
      } else {
        shiftSlide(-1);
        console.log("close");
      }
    });
  }

  if (sbs) {
    subscribe();
  }

  async function subscribe() {
    await swalo.fire({ title: "Sebelum lanjut silahkan subscribe dulu...", confirmButtonText: "Subscribe" }).then(async (result) => {
      window.open("https://www.youtube.com/Dekatutorial");
    });

    $.ajax({
      url: "?subscribe",
      cache: false,
      success: async function (dataResult) {
        console.log(dataResult);
        var dataResult = JSON.parse(dataResult);
        if (dataResult.statusCode == 200) {
          await swalo.fire({
            title: "Terimakasih...  ",
          });
        }
      },
    });
  }
}

// <div class="help">
//   <div class="desc">
//     <a href="">Tutorial Bikin</a>
//   </div>
//   <input hidden type="checkbox" name="menu" id="menu" />
//   <label for="menu">
//     <div class="icon">
//       <div class="line">
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div class="close">
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   </label>
// </div>

// <a style="display: none" id="prev" class="control prev"></a>
// <a style="display: none" id="next" class="control next"></a>
