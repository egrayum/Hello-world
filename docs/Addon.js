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
  if (solidity > 1) {
   phase = "circle"
  }
  if (phase == "circle") {
   if (bY < 100 && bX < 625) {
    bX += 8;
   } 
   if (bY < 450 && bX > 620) {
    bY += 8;
   } 
   if (bY > 425 && bX > 75) {
    bX -= 8;
   }
   if (bY > 75 && bX < 75) {
    bY -= 8;
    rounds++;
   }
   if (bX > 575 && bY > 275 && bY < 308) {
    fY = bY + 15;
    fX = bX;
    fireball = true;
    fDirect = "left";
   }
  }
  if (fireball == true) {
   ctx.fillStyle = "#dd1111";
   ctx.fillRect(fX, fY, 45, 45);
   if (fDirect == "left") {
    fX -= 7;
    if (fX < pX + 40 && fY > pY - 45 && fY < pY + 45 || fX < 50) {
     fireball = false;
    }
   }
  }
  ctx.fillStyle = "rgba(255, 30, 30, " + solidity + ")";
  ctx.fillRect(bX, bY, 100, 75);
 }
 //if (pX > bX - 50 && pX < bX + 100 && pY > bY - 50 && pY < bY + 75) {
  //damage = true;
 //}
}
