const canvas = document.getElementById("jsCanvas");

let painting = fasle;

function stopPainting(event) {
  painting = fasle;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}
//offset이 캔버스안의 내용이다. client 사이즈는 윈도우의 커서위치
function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onmouseLeave(event) {
  painting = false;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onmouseLeave);
}
