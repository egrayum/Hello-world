// For add-ons for the maze generator.
// Currenty being used for testing enemy AI.
var bX = 350;
var bY = 75;
var solidity = 0;
var phase = "none";
var fX;
var fY;
var rounds = 0;
var fireball = false;
var fDirect;
var bossHealth = 250;
var dX;
var dY;
var oX;
var oY;
var iFrames = false;

function boss() {
 if (bossFight == true) {
  if (phase = "none") {
   phase = "spawn"; 
  }
  screen = 2;
  room = 100;
  if (phase == "spawn" && solidity < 1.1) {
   solidity += 0.01;
  }
  if (solidity > 1 && solidity < 1.05) {
   phase = "circle";
  }
  if (phase == "circle") {
   
  }
  if (phase == "barricade") {
   
  }
  ctx.fillStyle = "rgba(250, 20, 20," + solidity + ")";
  ctx.fillRect(bX, bY, 100, 75);
  ctx.fillRect(150, 500, bossHealth * 2, 40);
  ctx.fillStyle = "#fff";
  ctx.fillText("Sceris, Spirit of Evil: " + bossHealth + "/250", 200, 550);
 }
 c.onclick = function fire() {
  if (fireball == false) {
   dX = event.pageX;
   dY = event.pageY;
   fX = pX + 10;
   fY = pY + 10; 
   oX = pX;
   oY = pY;
   fireball = true;
  }
 }
 if (fireball == true) {
  if (dX > pX) {
   fX += (dX - oX)/50;
  }
  if (dX < pX) {
   fX -= (oX - dX)/50;
  }
  if (dY < pY) {
   fY -= (oY - dY)/50;
  }
  if (dY > pY) {
   fY += (dY - oY)/50;
  }
  if (fY < 0 || fY > 570 || fX < 0 || fX > 770) {
   fireball = false;
  }
  ctx.fillStyle = "#c97f1d";
  ctx.fillRect(fX - 15, fY - 15, 30, 30);
  if (fX > bX - 15 && fX < bX + 115 && fY > bY - 15 && fY < bY + 90 && iFrames == false) {
   bossHealth -= 10;
   iFrames = true;
   window.setTimeout(resetFrames, 50);
  }
 }
}
function resetFrames() {
 iFrames = false;
}
