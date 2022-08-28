let rockets = [];

const ROCKET_MOVE_SPEED = 5;

const ROCKET_RECT = {
	x: 0,
	y: 0,
	w: 64,
	h: 64
}

function createRocket(x, y, angle) {
	let rocket = {
		x: x,
		y: y,
		angle: angle,
		
		dx: Math.cos(angle) * ROCKET_MOVE_SPEED,
		dy: Math.sin(angle) * ROCKET_MOVE_SPEED
	};
	
	rockets.push(rocket);
	
	return rocket;
}

function removeRocket(enemy) {
    let i = rockets.indexOf(enemy);

    if(i < 0) {
        return;
    }
    rockets.splice(i, 1);
}

function updateRockets() {
	for(let i = 0; i < rockets.length; i++) {
		let rocket = rockets[i];
		
		rocket.x += rocket.dx;
		rocket.y += rocket.dy;
		
		if(collideTileMap(rocket.x + ROCKET_RECT.x, rocket.y + ROCKET_RECT.y, ROCKET_RECT.w, ROCKET_RECT.h)) {
			removeRocket(rocket);
		}
	}
}

const ROCKET_IMAGE = loadImage("assets/rocket.png");

function drawRockets(camera) {
	for(let i = 0; i < rockets.length; i++) {
		let rocket = rockets[i];
		ctx.save();
		ctx.translate(rocket.x - camera.x, rocket.y - camera.y);
		ctx.rotate(rocket.angle);
		ctx.drawImage(ROCKET_IMAGE, ROCKET_IMAGE.width / 2 - ROCKET_IMAGE.width, ROCKET_IMAGE.height / 2 - ROCKET_IMAGE.height);
		ctx.restore();
	}
}