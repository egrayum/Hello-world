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
  // triggers phase 1
  if (solidity > 0.9 && solidity < 1) {
   phase = "circle"
  }
  // phase 1- circling
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
   if (bY > 70 && bX < 75) {
    bY -= 8;
   }
   if (bX > 250 && bX < 260 && bY < 100) {
    phase = "barricade";
   }
   // for firing fireballs
   if (bX > 575 && bY > 225 && bY < 233) {
    fY = bY + 15;
    fX = bX;
    fireball = true;
    fDirect = "left";
   }
   if (bX < 75 && bY > 225 && bY < 233) {
    fY = bY + 15;
    fX = bX + 55;
    fireball = true;
    fDirect = "right";
   }
  }
  // fireball
  if (fireball == true) {
   ctx.fillStyle = "#dd1111";
   ctx.fillRect(fX, fY, 45, 45);
   if (fDirect == "left") {
    fX -= 7;
    if (fX < pX + 40 && fY > pY - 45 && fY < pY + 45 || fX < 50) {
     fireball = false;
    }
   }
   if (fDirect == "right") {
    fX += 7;
    if (fX > pX - 40 && fY > pY - 45 && fY < pY + 45 || fX > 705) {
     fireball = false;
    }
   }
   if (fDirect == "down") {
    fY += 7;
    if (fX > pX - 40 && fX < pX + 50 && fY > pY - 40 || fY > 510) {
     fireball = false;
    }
   }
  }
  // barricade phase
  if (phase == "barricade") {
   ctx.strokeStyle = "#000";
   ctx.lineWidth = 10;
   ctx.strokeRect(pX - 25, pY - 25, 100, 100);
   barricaded();
  }
  // boss
  ctx.fillStyle = "rgba(255, 30, 30, " + solidity + ")";
  ctx.fillRect(bX, bY, 100, 75);
  }
 }
function barricaded() {
 if (fireball == false) {
  bY = 75;
  function randomX(min, max) {
   bX = Math.random() * (max - min) + min;
  }
  randomX(75, 425);
  fireBallDown();
 }
}
function fireBallDown() {
 fX = bX + 15;
   fY = bY + 45;
   fireball = true;
   fDirect = "down";
}
