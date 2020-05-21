// For add-ons for the maze generator.
// Currenty being used for testing enemy AI.
var bX = 350;
var bY = 75;
var solidity = 0;
var phase = "none";
var fX = 100;
var fY = 100;
var rounds = 0;
var fireball = false;
var fDirect;
var bossHealth = 250;
var destX;
var destY;
var xDist;
var yDist;
var bulletSpeed = 10;

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
  ctx.fillText("Sceris, Spirit of Evil: " + bossHealth + "/250", 200, 530);
  if (fireball == true) {
   xVel = xDist/bulletSpeed * 10;
   yVel = yDist/bulletSpeed * 10;
   fX += xVel;
   fY += yVel;
   ctx.fillRect(fX - 15, fY - 15, 30, 30);
  }
  if (fX < 0 || fY < 0 || fX > 770 || fY > 570) {
   fireball = false;
  }
 }
}
