const canvas=document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
canvas.width=550;
canvas.height=500;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
let painting =false;

function startPainting(){
  painting=true;

}
function onMouseMove(event){
//offsetX,offsetY 전체가 아닌 엘레멘트기준의 위치
const x=event.offsetX;
const y=event.offsetY;
if(!painting){
  ctx.beginPath();
  ctx.moveTo(x,y);
}else{
  ctx.lineTo(x,y);
  ctx.stroke();
}
}


function onMouseDown(event){
  painting=true;
}
function stopPainting(){
  painting=false;
}
if(canvas){
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",startPainting);
  canvas.addEventListener("mouseup",stopPainting);
  canvas.addEventListener("mouseleave",stopPainting);
}