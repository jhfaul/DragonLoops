var display = document.body.querySelector(".display");
var endEle = document.body.querySelector(".endEle");
var HP = 5;
var attack = "";
var dragHP = 10;
var dragattack = "";

while (dragHP > 0 || HP > 0) {
  attack = prompt("Enter your number of times to hit the dragon");
  dragattack = Math.floor(Math.random()*2)+1;
  attack = Math.floor(Math.random()*4)+1;
  dragHP = dragHP - attack;
  HP = HP - dragattack;
}
if(HP<0) {
  endEle.innerHTML = "You've been defeated by the dragon";
 if(dragHP<0){
  endEle.innerHTML = "You've defeated the dragon";
}}