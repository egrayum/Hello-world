// For add-ons for the maze generator.
// Currenty being used for testing enemy AI.
var bX = 350;
var bY = 125;
var solidity = 0;
var phase = "none";

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
   if (bY < 150 && bX < 675) {
    bX += 8;
   } 
   if (bY < 400 && bX > 650) {
    bY += 8;
   } 
   if (bY > 375 && bX > 125) {
    bX -= 8;
   }
   if (bY > 140 && bX < 200) {
    bY -= 8;
   }
  }
  ctx.fillStyle = "rgba(255, 30, 30, " + solidity + ")";
  ctx.fillRect(bX, bY, 100, 75);
 }
 //if (pX > bX - 50 && pX < bX + 100 && pY > bY - 50 && pY < bY + 75) {
  //damage = true;
 //}
}
