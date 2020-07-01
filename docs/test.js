    var c = document.getElementById("gameCanvas");
    var ctx = c.getContext("2d");
    var i;
    var j;
    var c;
    var jump = false;
    var level = 2;
    var collectibles = 0;
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var ms = 000;
    var deaths = 0;
    var play = false;
    var move = false;
    var posStore = [];
    var posChangeX;
    var posChangeY;
    var jumpgrade = 0; // jump upgrade
    var k = {
      up: 0,
      left: 0,
      right: 0
    }
    var rows = [];
    // map
    function levelData() {
      if (level == 1) {
        rows[0] = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
        rows[1] = ["a","a","0","a","0","a","a","a","a","0","a","a","a","a","b","0","a","a","a","a","a","0"];
        rows[2] = ["a","0","0","0","0","0","a","a","0","0","0","a","a","a","0","0","0","a","a","0","0","0"];
        rows[3] = ["a","0","0","0","0","a","a","0","0","0","0","0","a","a","l","0","0","a","0","0","a","0"];
        rows[4] = ["a","0","0","a","a","a","0","0","a","l","a","0","a","a","a","a","0","a","a","0","0","a"];
        rows[5] = ["a","0","a","a","a","0","0","0","a","a","0","0","a","ll","0","0","0","a","ll","0","a","a"];
        rows[6] = ["a","0","a","a","a","0","0","a","a","ll","0","0","a","ll","0","a","a","a","a","0","0","a"];
        rows[7] = ["a","0","0","a","a","a","0","0","a","0","0","0","a","a","0","0","a","a","a","a","0","a"];
        rows[8] = ["a","0","0","0","a","a","0","0","a","0","0","l","a","a","a","0","a","a","0","0","0","a"];
        rows[9] = ["a","a","0","0","lr","a","0","a","a","0","a","a","0","0","0","0","a","0","0","a","a","a"];
        rows[10] = ["a","a","0","0","lr","ll","0","0","f","0","a","a","0","a","0","a","a","0","a","a","0","a"];
        rows[11] = ["a","a","ll","0","0","a","a","0","a","0","0","0","0","a","0","0","a","0","0","0","0","a"];
        rows[12] = ["a","a","ll","0","0","0","0","0","a","a","a","l","a","a","a","0","0","a","a","a","0","a"];
        rows[13] = ["a","a","a","a","a","a","0","a","a","a","a","a","a","a","a","a","0","0","0","0","0","a"];
        rows[14] = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
      }
      if (level == 2) {
        rows[0] = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
        rows[1] = ["0","a","a","ll","b","0","0","0","0","0","0","0","0","0","f","f","f","0","0","0","0","a"];
        rows[2] = ["0","0","0","a","a","a","pd","a","a","pu","0","a","a","0","a","f","0","0","0","a","0","a"];
        rows[3] = ["0","0","0","0","0","0","0","a","a","l","l","a","a","pu","a","a","0","0","a","a","0","a"];
        rows[4] = ["a","a","a","0","a","0","0","0","lr","a","a","ll","0","0","lr","0","0","a","a","a","0","a"];
        rows[5] = ["a","a","0","0","a","a","0","lr","a","a","a","a","ll","pu","a","0","0","a","a","0","0","a"];
        rows[6] = ["a","a","a","0","0","a","0","lr","a","a","a","a","ll","0","lr","0","a","a","ll","0","0","a"];
        rows[7] = ["a","a","a","a","0","a","0","0","a","0","0","a","0","pu","a","0","0","a","ll","0","lr","a"];
        rows[8] = ["a","ll","0","0","0","a","l","0","0","0","0","0","0","l","a","a","0","a","ll","0","lr","a"];
        rows[9] = ["a","ll","0","a","a","a","a","a","a","a","a","a","a","a","0","0","0","a","ll","0","lr","a"];
        rows[10] = ["a","ll","0","lr","a","0","0","0","0","0","a","a","a","a","0","0","a","a","a","0","0","a"];
        rows[11] = ["a","ll","0","0","a","0","0","a","a","0","a","0","0","0","a","0","0","a","0","0","0","0"];
        rows[12] = ["a","a","ll","0","lr","a","0","a","ll","0","a","0","l","0","a","0","a","a","0","0","0","0"];
        rows[13] = ["a","a","ll","0","0","0","0","a","ll","0","0","0","a","0","0","0","a","ll","0","a","0","a"];
        rows[14] = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
      }
    }
    var p = {
      x: 2,
      y: 2
    }
    function setjump() {
      jump = false;
    }
    function jumpy() {
      jump = true;
      upone();
      window.setTimeout(upone, 75);
      // higher jump
      if (jumpgrade == 1) {
        window.setTimeout(upone, 125);
        window.setTimeout(upone, 150);
      }
      function upone() {
        if (rows[p.y - 1][p.x] != "a" && rows[p.y - 1][p.x] != "pd") {
          p.y -= 1;
        }
      }
      window.setTimeout(setjump, 250 * (jumpgrade + 1));
    }
    c.onclick = function() {
      if (play == false) {
        play = true;
      }
    }
    document.addEventListener("keydown", function(event) {
      if (event.keyCode == 37) {
        if (play == true) {
          k.left = 1;
        } else if (play == false) {
          play = true;
        }
      }
      if (event.keyCode == 39) {
        if (play == true) {
          k.right = 1;
        } else if (play == false) {
          play = true;
        }
      }
      if (event.keyCode == 38 && rows[p.y + 1][p.x] == "a" || event.keyCode == 38 && rows[p.y + 1][p.x] == "pu") {
        if (play == true) {
          jumpy();
        } else if (play == false) {
          play = true;
        }
      }
      if (event.keyCode == 82) {
        level = 1;
        collectibles = 0;
        p.x = 2;
        p.y = 2;
        ms = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        deaths = 0;
        play = false;
        jumpgrade = 0;
        jump = false;
        levelData();
      }
    })
    document.addEventListener("keyup", function(event) {
      if (event.keyCode == 37 && play == true) {
        k.left = 0;
      }
      if (event.keyCode == 39 && play == true) {
        k.right = 0;
      }
      if (event.keyCode == 38 && play == true) {
        k.up = 0;
      }
    })
    function fall() {
      if (rows[p.y + 1][p.x] != "a" && jump == false && rows[p.y + 1][p.x] != "pu") {
        p.y += 1;
      }
    }
    function mover() {
      move = false;
    }
    function renderCanvas() {
      ctx.fillStyle = "#618291";
      ctx.fillRect(0, 0, c.width, c.height);
    }
    function renderMap() {
      ctx.fillStyle = "#000";
      ctx.font = "60px Arial";
      ctx.fillText ("Snaze 2", 280, 65);
      if (play == false) {
        ctx.font = "20px Arial";
        ctx.fillText('Arrow key to start', 70, 40);
        ctx.fillText("Arrow keys to move", 70, 65)
      } else {
        ctx.font = "30px Arial";
        ctx.fillText("Deaths: " + deaths, 70, 65);
      }
      ctx.font = "30px Arial";
      ctx.fillText(hours + ":" + minutes + ":" + seconds + "." + ms, 540, 65);
      for (i = 0; i < rows.length; i ++) {
        for (j = 0; j < rows[i].length; j++) {
          if (rows[i][j] == "pu") {
            ctx.fillStyle = "#222";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 30, 15);
          } else if (rows[i][j] == "pd") {
            ctx.fillStyle = "#222";
            ctx.fillRect(70 + (j * 30), 85 + (i * 30), 30, 15);
          } else if (rows[i][j] == "a") { // block
            ctx.fillStyle = "#000";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 30, 30);
          } else if (rows[i][j] == "b") { // berry
            ctx.fillStyle = "#116101";
            ctx.fillRect(75 + (j * 30), 75 + (i * 30), 20, 20);
          } else if (rows[i][j] == "f") { // fake block
            ctx.fillStyle = "#090909";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 30, 30);
          } else if (rows[i][j] == "l") { // lava
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(70 + (j * 30), 85 + (i * 30), 30, 15);
          } else if (rows[i][j] == "of") { // obvious fake block
            ctx.fillStyle = "#222";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 30, 30);
          } else if (rows[i][j] == "p") { // powerup
            ctx.fillStyle = "#d4af37";
            ctx.fillRect(75 + (j * 30), 75 + (i * 30), 20, 25);
          } else if (rows[i][j] == "ll") { // lava left
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 15, 30);
          } else if (rows[i][j] == "lr") { // lava right
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(85 + (j * 30), 70 + (i * 30), 15, 30);
          } else if (rows[i][j] == "e") { // end token
            ctx.fillStyle = "#f17221";
            ctx.fillRect(75 + (j * 30), 75 + (i * 30), 20, 20);
          } else if (rows[i][j] == "lt") {
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(70 + (j * 30), 70 + (i * 30), 30, 15);
          }
        }
      }
      // player
      ctx.fillStyle = "#1362a3";
      ctx.fillRect(70 + (p.x * 30), 70 + (p.y * 30), 30, 30);
      if (play == 2) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "#f17221";
        ctx.fillText("Congratulations!", 280, 300);
      }
      ctx.fillStyle = "#000";
      ctx.font = "30px Arial";
      ctx.fillText("Berries: " + collectibles, 70, 555);
      ctx.fillText("Level " + level, 600, 555);
    }
    function update() {
      renderCanvas();
      if (p.x == 21) {
        if (level == 1 || level == 2) {
          level++;
          p.x = 0
          levelData()
        }
      }
      if (p.x == 0) {
        if (level == 4) {
          level++;
          p.x = 21
          levelData()
        }
      }
      if (p.y == 0) {
        if (level == 3 || level == 5) {
          level++;
          p.y = 14
          levelData()
        }
      }
      // collect berry
      if (rows[p.y][p.x] == "b") {
        rows[p.y][p.x] = "0";
        collectibles++;
      }
      // die to lava
      if (rows[p.y][p.x] == "l" || rows[p.y][p.x] == "ll" || rows[p.y][p.x] == "lr"  || rows[p.y][p.x] == "lt") {
        p.x = 2;
        p.y = 2;
        deaths++;
      }
      // collect upgrade
      if (rows[p.y][p.x] == "p") {
        rows[p.y][p.x] = "0";
        jumpgrade = 1;
      }
      // timer
      if (play == true) {
        ms += 20;
        if (ms > 999) {
          seconds++;
          ms -= 1000;
        }
        if (seconds > 59) {
          minutes++;
          seconds -= 60;
        }
        if (minutes > 59) {
          hours++;
          minutes -= 60;
        }
      }
      if (rows[p.y][p.x] == "e") { // touch end
        play = 2;
        k.up = 0;
        k.left = 0;
        k.right = 0;
      }
      if (k.right == 1 && move == false) {
          if (rows[p.y][p.x + 1] != "a") {
            p.x += 1;
            move = true;
            window.setTimeout(mover, 150);
          }
        }
        if (k.left == 1 && move == false) {
          if (rows[p.y][p.x - 1] != "a") {
            p.x -= 1;
            move = true;
            window.setTimeout(mover, 150);
          }
        }
        renderMap();
    }
    // set canvas size and stuff
    function init2() {
      c.width = 800;
      c.height = 600;
      levelData();
      renderCanvas();
      renderMap();
      window.setInterval(update, 20);
      window.setInterval(fall, 100);
      window.setInterval(move, 150);
    }
