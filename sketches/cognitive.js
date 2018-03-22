var sketch1 = function( p ) {

  var illusions = 7;
  var current = 1;
  var active = true;
  var i = 0;
  var xStartingPoint = [];
  var yStartingPoint = [];
  var xSpeed = [];
  var ySpeed = [];

  p.setup = function() {
    var myCanvas = p.createCanvas(800, 800);
    myCanvas.parent( 'mysketch_1' );
    ballsSetup();
  };

  p.draw = function() {
    p.background(255);
    p.push();
    if(p.mouseIsPressed){
      p.fill(0);
    } else {
      p.fill(255);
    }
    switch ( current ) {
      case 1:
      p.resizeCanvas(800, 800, true);
      scintillating();
      break;
      case 2:
      p.resizeCanvas(500, 500, true);
      whitesilu();
      break;
      case 3:
      p.resizeCanvas(400, 400, true);
      mbind();
      break;
      case 4:
      p.resizeCanvas(600, 500, true);
      anstis();
      break;
      case 5:
      p.createCanvas(800, 100);
      // p.resizeCanvas(800, 100, true);
      bars();
      break;
      case 6:
      p.resizeCanvas(600, 600, true);
      biohazard();
      break;
      case 7:
      p.resizeCanvas(800, 380, true);
      balls();
      break;
    }
    p.pop();
  };

  p.keyPressed = function() {
    if (p.key == ' '){
      current = current < illusions ? current+1 : 1;
    }
    if (p.key == 'A'){
      active = !active;
      console.log( active );
    }
  };

  function scintillating() {
    p.background(0);          // black background

    //style
    p.strokeWeight(3);        // medium weight lines
    p.smooth();               // antialias lines
    p.stroke(100, 100, 100);  // dark grey colour for lines

    var step = 25;          // grid spacing

    //vertical lines
    for (var x = step; x < p.width; x = x + step) {
      p.line(x, 0, x, p.height);
    }

    //horizontal lines
    for (var y = step; y < p.height; y = y + step) {
      p.line(0, y, p.width, y);
    }

    // Circles
    if (active) {
      p.ellipseMode('CENTER');
      p.stroke(255, 255, 255);  // white circles
      for (var i = step; i < p.width -5; i = i + step) {
        for (var j = step; j < p.height -15; j = j + step) {
          p.strokeWeight(6);
          p.point(i, j);
          p.strokeWeight(3);
        }
      }
    }
  };

  function whitesilu(){
    p.noStroke();
    for( var i = 1; i < p.height/25; i+=2 ){
      p.fill( 0, 0, 0 );
      p.rect( 0, 25*i, 300, 25 );
      p.rect( 400, 25*i, 300, 25 );
      p.fill( 100, 100, 100 );
      p.rect( 300, 25*i, 100, 25 );
      p.rect( 100, 25*(i-1), 100, 25 );
    }
    if(!active){
      p.noStroke();
      p.fill( 0, 0, 0 );
      for( var i = 1; i < p.height/25; i+=2 ){
        p.rect( 0, 25*(i-1), 100, 25);
        p.rect( 200, 25*(i-1), 300, 25);
      }
    }
  }

  var ox1 = -20, oy1 = -20, ox2 = 0, oy2 = 0;
  var s1 = true, s2 = true;
  var speed = 1;

  function mbind(){
    p.background( 180, 180, 180 );
    var o = 20;
    p.strokeWeight(2);
    p.line( 100+o+ox1, 200-o+oy1, 200-o+ox1, 100+o+oy1 );
    p.line( 200+o+ox2, 100+o+oy2, 300-o+ox2, 200-o+oy2 );
    p.line( 300-o+ox1, 200+o+oy1, 200+o+ox1, 300-o+oy1 );
    p.line( 200-o+ox2, 300-o+oy2, 100+o+ox2, 200+o+oy2 );

    if( s1 ){
      ox1 += speed;
      oy1 += speed;
      if( ox1 == 20 && oy1 == 20 ){
        s1 = false;
      }
    }
    else {
      ox1 -= speed;
      oy1 -= speed;
      if( ox1 == -20 && oy1 == -20 ){
        s1 = true;
      }
    }

    if( s2 ){
      ox2 += speed;
      oy2 -= speed;
      if( ox2 == 20 && oy2 == -20 ){
        s2 = false;
      }
    }
    else {
      ox2 -= speed;
      oy2 += speed;
      if( ox2 == -20 && oy2 == 20 ){
        s2 = true;
      }
    }

    if( !active ){
      p.noStroke();
      p.ellipseMode('RADIUS');
      p.fill( 140, 10, 20 );
      p.ellipse(100,200,80,80);
      p.ellipse(200,100,80,80);
      p.ellipse(300,200,80,80);
      p.ellipse(200,300,80,80);
    }
  }

  var oc = 0, cnt = 0;
  var anstate = true;

  function anstis(){
    if( active ){
      p.stroke(0);
      p.strokeWeight(13);
      for( var i = 0; i <= p.width/25; i += 1 ){

        p.line( 25*i, 0, 25*i, p.height );
      }
    }
    p.noStroke();
    p.fill(255, 255, 80);
    p.rect(0+oc, 200, 50, 20);
    p.fill(0, 0, 80);
    p.rect(0+oc, 280, 50, 20);
    if( true ){
      if( anstate ){
        oc += 1;
        if( oc == p.width - 50 ){ anstate = false; }
      }
      else{
        oc -=1 ;
        if( oc == 0 ){ anstate = true; }
      }
    }
    cnt += 1;
  }

  function biohazard(){
    p.background(125);
    p.translate(p.width/2, p.height/2);
    p.noStroke();
    p.fill(0,255,0);
    p.ellipse(0,0,450,450);
    p.fill(255,0,0);
    p.ellipse(0,0,350,350);
    //pushMatrix();
    p.push();
    p.fill(0,255,0);
    if(active){
      p.rotate(p.frameCount*p.radians(90) / 40);
    }
    p.translate(0, 90);
    p.triangle(-90, 90, 0, -90, 90, 90);
    p.rotate(p.radians(120));
    p.translate(-77, 133);
    p.triangle(-90, 90, 0, -90, 90, 90);
    p.rotate(p.radians(120));
    p.translate(-77, 133);
    p.triangle(-90, 90, 0, -90, 90, 90);
    p.pop();
    //popMatrix();
    p.fill(255,0,0);
    p.ellipse(0,0,100,100);
    //rotate(frameCount*radians(90) / 30);
    p.fill(255);
    p.ellipse(0,0,10,10);
    p.fill(0);
    p.ellipse(0,0,5,5);
  }

  function bars(){
    p.background(255);
    p.fill(0);
    while(i < 800){
      p.rect(i, 0, 16, 100);
      i += 32;
    }
    if(p.frameCount % 2 == 0){
      if(active)
      i = 16;
      else
      i = 0;
    }else
    i = 0;
  }

  function ballsSetup(){
    //initialization for first layer circles
    for(j = 0; j <30; j++){
      xStartingPoint[j] = p.random(20, 780);
      yStartingPoint[j] = p.random(20, 360);
      ySpeed[j] = p.random(0.4, 0.8);
    }
    //initialization for second layer circles
    for(j = 30; j <70; j++){
      xStartingPoint[j] = p.random(20, 780);
      yStartingPoint[j] = p.random(20, 360);
      xSpeed[j] = p.random(-5,-8);
      ySpeed[j] = p.random(-0.3, 0.3);
    }
    //initialization for the third layer circles
    for(j = 70; j <110; j++){
      xStartingPoint[j] = p.random(20, 780);
      yStartingPoint[j] = p.random(20, 360);
      xSpeed[j] = p.random(6, 9);
      ySpeed[j] = p.random(-0.3, 0.3);
    }
  }

  function balls(){
    p.background(225);
    p.fill(0);
    //movement for first layer cicrcles
    for(j = 0; j < 30; j++){

      p.ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);
      //photo.resize(15,15);
      //image(photo,xStartingPoint[j],yStartingPoint[j]);
      if(active){
        yStartingPoint[j] += ySpeed[j];
        if (yStartingPoint[j] > 380) {
          yStartingPoint[j] = -7;
          xStartingPoint[j] = p.random(0,780);
        }
      }
    }
    //movement for second layer cicrcles

    for(j = 30; j < 70; j++){

      p.ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);

      if(active){
        xStartingPoint[j] += xSpeed[j];
        yStartingPoint[j] += ySpeed[j];

        if (yStartingPoint[j] > 380 || yStartingPoint[j] < 0 || xStartingPoint[j] < 0) {
          yStartingPoint[j] = p.random(20, 360);
          xStartingPoint[j] = 807;
        }
      }
    }
    //movement for third layer cicrcles
    for(j = 70; j < 110; j++){

      p.ellipse(xStartingPoint[j], yStartingPoint[j], 15, 15);
      if(active){
        xStartingPoint[j] += xSpeed[j];
        yStartingPoint[j] += ySpeed[j];

        if (yStartingPoint[j] > 380 || yStartingPoint[j] < 0 || xStartingPoint[j] > 800) {
          yStartingPoint[j] = p.random(20, 360);
          xStartingPoint[j] = -7;
        }
      }
    }
  }

};

var myp5_1 = new p5( sketch1, 'mysketch_1' );
