let canvas = document.getElementById("view");
let ctx = canvas.getContext("2d");

function init() {
    for(let i = 0; i < 2; ++i) {
        createEnemy(100 + i * 5, 100);
    }
}

function processInput() {
    playerProcessInput();
}

function update() {
    updatePlayer();
    updateEnemies();
    updateSprites();
	updateRockets();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    let camera = {
        x: Math.floor(player.sprite.x + 64 - canvas.width / 2),
        y: Math.floor(player.sprite.y + 64 - canvas.height / 2)
    };

    drawTilemap(camera);
    drawSprites(camera);
	drawPlayerHp();
	drawRockets(camera);
	debugDraw(camera);
}

function loop() {
    if(areAllAssetsLoaded()) {
        processInput();
        update();
        draw();
    }

    requestAnimationFrame(loop);
}

init();
loop();