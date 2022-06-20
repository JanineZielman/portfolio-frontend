var font;

async function setup() {
  createCanvas(windowWidth, windowHeight); 
  smooth();
  reload();
}

function reload(){
  // background(255,255,255);
  var notdefPath = new opentype.Path();
  notdefPath.moveTo(100,0);

  var notdefGlyph = new opentype.Glyph({
      name: ".notdef",
      unicode: 0,
      advanceWidth: 300,
      path: notdefPath
  });

// {//Letter a

//   var aPath = new opentype.Path();
//   aPath.moveTo(random(90, 125),random(12, 0)); //1
//   aPath.lineTo(random(60, 90),random(12, 0)); //2
//   aPath.lineTo(random(25, 60),random(25, 12)); //3
//   aPath.lineTo(random(0, 60),random(60, 25)); //4
//   aPath.lineTo(random(25, 60),random(110, 60)); //5
//   aPath.lineTo(random(60, 90),random(125, 100)); //6
//   aPath.lineTo(random(180, 230),random(130, 100)); //7
//   aPath.lineTo(random(180, 230),random(150, 100)); //8
//   aPath.lineTo(random(160, 200),random(160, 145)); //9
//   aPath.lineTo(random(100, 160),random(160, 145)); //10
//   aPath.lineTo(random(25, 100),random(145, 130)); //10


//   // aPath.moveTo(103,200); 
//   // aPath.lineTo(76,140); 
//   // aPath.lineTo(129,140); 


//   var aGlyph = new opentype.Glyph({
//     name: "a",
//     unicode: 97,
//     advanceWidth: 300,
//     path: aPath
//   })
// }

//CAPITAL LETTERS

  {//Letter A

    var APath = new opentype.Path();
    APath.moveTo(random(25, 80),random(50, 0)); //1
    APath.lineTo(random(0, 15),random(50, 0)); //2
    APath.lineTo(random(0, 50),random(80, 50)); //3
    APath.lineTo(random(0, 115),random(265, 230)); //4
    APath.lineTo(random(0, 75),random(300, 255)); //5
    APath.lineTo(random(80, 300),random(300, 255)); //6
    APath.lineTo(random(180, 300),random(130, 0)); //7
    APath.lineTo(random(200, 300),random(55, 0)); //8
    APath.lineTo(random(135, 165),random(55, 0)); //9
    APath.lineTo(random(145, 175),random(80, 50)); //10
    APath.lineTo(random(100, 150),random(125, 65)); //11
    APath.lineTo(random(45, 175),random(125, 95)); //12
    APath.lineTo(random(30, 60),random(80, 50)); //13

    APath.moveTo(103,200); //14
    APath.lineTo(76,140); //15
    APath.lineTo(129,140); //16


    var AGlyph = new opentype.Glyph({
      name: "A",
      unicode: 65,
      advanceWidth: 300,
      path: APath
    })
  }

  {//Letter I

    var IPath = new opentype.Path();
    IPath.moveTo(random(0, 15),random(50, 0)); //1
    IPath.lineTo(random(75, 125),random(80, 50)); //2
    IPath.lineTo(random(75, 125),random(265, 230)); //3
    IPath.lineTo(random(0, 150),random(300, 255)); //4
    IPath.lineTo(random(150, 300),random(300, 255)); //5
    IPath.lineTo(random(175, 225),random(265, 230)); //6
    IPath.lineTo(random(175, 225),random(55, 0)); //7
    IPath.lineTo(random(200, 300),random(55, 0)); //8


    var IGlyph = new opentype.Glyph({
      name: "I",
      unicode: 73,
      advanceWidth: 300,
      path: IPath
    })
  }

  {//Letter L

    var LPath = new opentype.Path();
    LPath.moveTo(random(0, 15),random(25, 0)); //1
    LPath.lineTo(random(40, 65),random(80, 50)); //2
    LPath.lineTo(random(40, 65),random(265, 230)); //3
    LPath.lineTo(random(0, 75),random(300, 255)); //4
    LPath.lineTo(random(75, 175),random(300, 255)); //5
    LPath.lineTo(random(75, 150),random(265, 230)); //6
    LPath.lineTo(random(75, 150),random(100, 55)); //7
    LPath.lineTo(random(75, 175),random(55, 25)); //8
    LPath.lineTo(random(150, 225),random(55, 25)); //9
    LPath.lineTo(random(125, 225),random(100, 55)); //10
    LPath.lineTo(random(225, 300),random(100, 55)); //11
    LPath.lineTo(random(225, 300),random(25, 0)); //12



    var LGlyph = new opentype.Glyph({
      name: "L",
      unicode: 76,
      advanceWidth: 300,
      path: LPath
    })
  }

  {//Letter R

    var Rpath = new opentype.Path();
    Rpath.moveTo(random(25, 80),random(50, 0)); //1
    Rpath.lineTo(random(0, 15),random(50, 0)); //2
    Rpath.lineTo(random(0, 50),random(80, 50)); //3
    Rpath.lineTo(random(0, 115),random(265, 230)); //4
    Rpath.lineTo(random(0, 75),random(300, 255)); //5
    Rpath.lineTo(random(80, 300),random(300, 255)); //6
    Rpath.lineTo(random(75, 125),random(250, 230)); //7
    Rpath.lineTo(random(130, 200),random(300, 265)); //8
    Rpath.lineTo(random(200, 300),random(300, 250)); //9
    Rpath.lineTo(random(250, 300),random(250, 200)); //10
    Rpath.lineTo(random(225, 300),random(200, 150)); //11
    Rpath.lineTo(random(150, 300),random(150, 100)); //12
    Rpath.lineTo(random(225, 300),random(50, 0)); //13
    Rpath.lineTo(random(125, 200),random(50, 0)); //14
    Rpath.lineTo(random(150, 225),random(80, 50)); //15
    Rpath.lineTo(random(75, 125),random(80, 150)); //16
    Rpath.lineTo(random(30, 60),random(80, 50)); //17

    Rpath.moveTo(150,220); //14
    Rpath.lineTo(150,150); //15
    Rpath.lineTo(200,175); //16

    var RGlyph = new opentype.Glyph({
      name: "R",
      unicode: 82,
      advanceWidth: 300,
      path: Rpath
    })
  }

  {//Letter V

    var VPath = new opentype.Path();
    VPath.moveTo(random(100, 150),random(50, 0)); //1
    VPath.lineTo(random(50, 100),random(50, 0)); //2
    VPath.lineTo(random(0, 50),random(150, 0)); //3
    VPath.lineTo(random(0, 50),random(300, 250)); //4
    VPath.lineTo(random(50, 100),random(300, 250)); //5
    VPath.lineTo(random(75, 125),random(250, 200)); //6
    VPath.lineTo(random(135, 165),random(75, 125)); //7
    VPath.lineTo(random(150, 200 ),random(250, 200)); //8
    VPath.lineTo(random(150, 200 ),random(300, 250)); //9
    VPath.lineTo(random(250, 300 ),random(300, 250)); //10
    VPath.lineTo(random(250, 300 ),random(250, 200)); //11
    VPath.lineTo(random(250, 300 ),random(150, 25)); //12

    var VGlyph = new opentype.Glyph({
      name: "V",
      unicode: 86,
      advanceWidth: 300,
      path: VPath
    })
  }

  var glyphs = [notdefGlyph, AGlyph, IGlyph, LGlyph, RGlyph, VGlyph];

 font = new opentype.Font({
    familyName:'Var',
    styleName: 'Version' + int(random(100)),
    unitsPerEm: 1000,
    ascender: 350,
    descender: -150,
    glyphs: glyphs
  })



  // font.download();
}


function drawPath( path ){
	// start drawing path
	drawingContext.beginPath();

	// loop through all the commands (points) of the glyph path
    for (var i = 0; i < path.commands.length; i += 1) {
    	// grab the comands and store in a var
	    var cmd = path.commands[i];

	    var x = cmd.x;
	    var y = cmd.y;

	    // check the type and draw 
	    if (cmd.type === 'M') {
	        drawingContext.moveTo( x, y );
	    } else if (cmd.type === 'L') {
          drawingContext.lineTo(x, y);
	    } else if (cmd.type === 'C') {
	        drawingContext.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, x, y);
	    } else if (cmd.type === 'Q') {
	        drawingContext.quadraticCurveTo(cmd.x1, cmd.y1, x, y);
	    } else if (cmd.type === 'Z') {
	        drawingContext.closePath();
	    }
	}
	// do not touch this
	drawingContext.fill();
	drawingContext.stroke();
  drawingContext.closePath();
  
}

function draw(){
  background(0)
  fill(255);
  stroke(0);
  strokeWeight(0);

  var options = {
    // xScale: 0.1,
    // yScale: 0.15
  }

  var startX = width/30;
  var startY = 200;
  var variable = width/14;
  var fontSize = width/5;

  // var aGlyph = font.glyphs.get(1);
  // var aPath = aGlyph.getPath(startX + 100, startY, fontSize, options);

  var AGlyph = font.glyphs.get(1);
  var APath = AGlyph.getPath(startX + 200, startY, fontSize, options);
  
  var IGlyph = font.glyphs.get(2);
  var IPath = IGlyph.getPath(startX + 300, startY, fontSize, options);

  var LGlyph = font.glyphs.get(3);
  var LPath = LGlyph.getPath(startX + 400, startY, fontSize, options);

  var RGlyph = font.glyphs.get(4);
  var RPath = RGlyph.getPath(startX + 500, startY, fontSize, options);

  var VGlyph = font.glyphs.get(5);
  var VPath = VGlyph.getPath(startX + 600, startY, fontSize, options);

  scale(2.5);
  translate(-200, -10)

  drawPath(APath);
  drawPath(IPath);
  drawPath(LPath);
  drawPath(RPath);
  drawPath(VPath);
}

// function mousePressed(){
//   font.download();
// }