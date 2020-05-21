// For add-ons for the maze generator.
// Currenty being used for testing enemy AI.
var bX = 350;
var bY = 75;
var solidity = 0;
var fX = 100;
var fY = 100;
var rounds = 0;
var fireball = false;
var fDirect;
var bossHealth = 250;
var fireX;
var fireY;

function boss() {
 if (bossFight == true) {
  if (phase == "none") {
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
   if (bY < 100) {
    bX += 8;
   }
   if (bX > 580) {
    bY += 8;
   }
   if (bY > 450) {
    bX -= 8;
   }
   if (bX < 100) {
    bY -= 8;
   }
   if (bX > 510 && bY < 300 && bY > 250) {
    fDirect = "left";
    fireX = bX;
    fireY = bY - 15;
   }
  }
  if (phase == "barricade") {
   
  }
  ctx.fillStyle = "rgba(250, 20, 20," + solidity + ")";
  ctx.fillRect(bX, bY, 100, 75);
  ctx.fillRect(150, 500, bossHealth * 2, 40);
  ctx.fillStyle = "#fff";
  ctx.fillText("Sceris, Spirit of Evil: " + bossHealth + "/250", 200, 530);
  if (fX < 0 || fY < 0 || fX > 770 || fY > 570) {
   fireball = false;
  }
  if (fDirect == "left") {
   fireX -= 10;
   ctx.fillStyle = "#d6a192";
   ctx.fillRect(fireX, fireY, 40, 40);
  }
 }
 if (fireball == true) {
   fX += xVel;
   fY += yVel;
   ctx.fillRect(fX - 15, fY - 15, 30, 30);
   if (fX < 0 || fY < 0 || fY > 585 || fX > 785) {
    fireball = false;
   }
  }
}
