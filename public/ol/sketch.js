const radius = 100;
const altitude = Math.sqrt(3)/2 * radius;
let hexagons, hexagonPattern, rotations;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	let hexagonMask = createGraphics(radius*2, radius*2);
	hexagonMask.beginShape();
	for(let a = 0; a < TWO_PI; a+=TWO_PI/6){
		let x = sin(a) * radius + radius;
		let y = cos(a) * radius + radius;
		hexagonMask.vertex(x, y);
	}
	hexagonMask.endShape();
	
	let hexagonLines = createGraphics(radius*2, radius*2);
	let r = random(255);
	let g = random(255);
	let b = random(255);

	let r1 = random(200);
	let r2 = random(250);
	let r3 = random(100);
	let r4 = random(150);

	hexagonLines.noFill();
	hexagonLines.stroke(255,255,b);
	hexagonLines.strokeWeight(r1);
	hexagonLines.ellipse(radius - altitude, radius - radius / 2, radius, radius);
	hexagonLines.stroke(r,255,255);
	hexagonLines.ellipse(radius + altitude * 2, radius, radius * 3, radius * 3);
	hexagonLines.strokeWeight(r2);
	hexagonLines.stroke(255,g,255);
	hexagonLines.ellipse(radius + altitude, radius + radius * 1.5, radius * 3, radius * 3);
	hexagonLines.strokeWeight(r3);
	hexagonLines.stroke(255,g,50);
	hexagonLines.ellipse(radius - altitude, radius - radius / 2, radius, radius);
	hexagonLines.strokeWeight(r4);
	hexagonLines.ellipse(radius + altitude * 2, radius, radius * 3, radius * 3);
	hexagonLines.stroke(r,50,255);
	hexagonLines.ellipse(radius + altitude, radius + radius * 1.5, radius * 3, radius * 3);
	
	hexagonPattern = createGraphics(radius*3, radius*3);
	hexagonPattern.image(hexagonMask, 0, 0);
	hexagonPattern.drawingContext.globalCompositeOperation="source-in";
	hexagonPattern.image(hexagonLines, 0, 0);
	
	rotations = [];
	hexagons = [];
	for(let x = - radius; x < width; x += altitude * 2){
		let rowCount = 0;
		for(let y = - radius; y < height; y += radius * 1.5){
			hexagons.push({
				x: x + (rowCount%2==0 ? 0 : altitude),
				y: y,
				rotation: 0
			});
			rotations.push(TWO_PI / 6 * floor(random(6)));
			rowCount++;
		}
	}
}

function draw() {
	background("white");
	hexagons.forEach((hexagon, index) => {
		hexagon.rotation += (rotations[index] - hexagon.rotation) * 0.09; 
		push();
			translate(hexagon.x + radius, hexagon.y + radius);
			rotate(hexagon.rotation);
			translate(- (hexagon.x + radius), - (hexagon.y + radius));
			image(hexagonPattern, hexagon.x, hexagon.y);
		pop();
	});
}

function mousePressed() {
	let closestIndex = 0;
	let closestDistance = 9999;
	hexagons.forEach((hexagon, index) => {
		let d = dist(mouseX, mouseY, hexagon.x + radius, hexagon.y + radius);
		if(d < closestDistance) {
			closestDistance = d;
			closestIndex = index;
		}
	});
	rotations[closestIndex] += TWO_PI/6;
}