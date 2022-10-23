var inputSayang = "";
var inputKangen = "";
var inputPesan = "";
function formKu() {
  var body = document.querySelector("body");
  var formm = document.createElement("form");
  formm.setAttribute("hidden", "");

  body.appendChild(formm);
  var myForm = document.querySelector("form");

  var newInput1 = document.createElement("input");
  var newInput2 = document.createElement("input");
  var newInput3 = document.createElement("input");

  newInput1.setAttribute("type", "text");
  newInput2.setAttribute("type", "text");
  newInput3.setAttribute("type", "text");

  newInput1.setAttribute("name", "sayang");
  newInput2.setAttribute("name", "kangen");
  newInput3.setAttribute("name", "pesan");

  newInput1.setAttribute("value", "Tidak");
  newInput2.setAttribute("value", "Tidak");
  newInput3.setAttribute("value", "-");

  myForm.appendChild(newInput1);
  myForm.appendChild(newInput2);
  myForm.appendChild(newInput3);
}

function kirim() {
  var form = document.querySelector("form");
  var data = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "");
  xhr.onload = function () {
    console.log("OK");
  };
  xhr.send(data);
  form.remove();
  return false;
}

const dekatutorial = Swal.mixin({
  imageHeight: 150,
  customClass: {
    popup: "customSweetalert",
  },
  allowOutsideClick: false,
  reverseButtons: true,
});
