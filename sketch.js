var ball,ballimage,paddleimage,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimage = loadImage("ball.png");
  paddleimage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,10,10);
  ball.addImage(ballimage);
  paddle = createSprite(370,200,10,80);
  paddle.addImage(paddleimage);
  /* assign the images to the sprites */
  
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = -9;
  ball.velocityY = -2;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
 

  /* Allow the ball to bounceoff from the paddle */
  
  ball.bounceOff(paddle);
 
  /* Prevent the paddle from going out of the edges */ 
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  
  if(keyDown(UP_ARROW)){
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW)){
    /* what should happen when you press the DOWN Arrow Key */
    paddle.velocityY = 3;
  }
  

  drawSprites();
  
}


