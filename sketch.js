function rotatex( point , center , angle ){

  var output = createVector( 0 , 0 );

  var point1 = p5.Vector.sub( point , center );

  output.x = point1.x*cos( angle ) - point1.y*sin( angle );

  output.y = point1.x*sin( angle ) + point1.y*cos( angle );

  output.add( center );

  return output;

}

function setup(){
  
  createCanvas( windowWidth , windowHeight);
 
  background( 0 , 0 , 0 );

}

function draw(){

//  ellipse( width*0.3 , height*0.3 , 20 , 20 );

  var r = random( 0 , 35 );
  var g = random( 0 , 150 );
  var b = random( 0 , 255 );

  var p0 = createVector( 80 , 80 );

  var c = createVector( width*0.3 , height*0.3 );

  var p1 = rotatex( p0 , c , frameCount*0.1 );
  push();
  translate(0.5*width , 0.5*height);
  
  var N = 60;
  for(var n= 0 ; n < N ; n++){
  push();
  var ang = n/N*2*PI;
  rotate(ang);
  fill( r ,g ,b );
  ellipse( p1.x , p1.y , 10 , 10);
  
 
  pop();
    
  }
}
