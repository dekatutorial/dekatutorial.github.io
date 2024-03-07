var noo = true;
DisableDevtool({
  ondevtoolopen(type, next) {
    if (noo) {
      noo = false;
      window.open(window.location.origin, "_blank");
      window.close();
    }
  },
});
window.addEventListener("contextmenu", (e) => e.preventDefault());
document.body.addEventListener("contextmenu", (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  console.log(e.key);
  if (event.keyCode === 123 || ctrlShiftKey(e, "F12") || ctrlShiftKey(e, "I") || ctrlShiftKey(e, "J") || ctrlShiftKey(e, "C") || (e.ctrlKey && e.keyCode === "U".charCodeAt(0))) return false;
};
