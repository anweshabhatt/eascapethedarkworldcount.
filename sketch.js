var bgImage, bunny1, bunny2
var gardenImage, portalAnimation
var barrierImage
var ObstacleGroup
var live = 10
var gameState = 'play';
function preload() {
  bgImage = loadImage("./assets/Horror image.jpg");
  bunnyImage = loadImage("./assets/bunny 1 image.png");
  gardenImage = loadImage("./assets/Garden image.jpg");
  barrierImage = loadImage("./assets/Hurdle Barrier Obstacle.png");
  bunny2Image = loadImage("./assets/Bunny image.png");
  portalAnimation = loadAnimation("./assets/Portal Animation Gif.gif");
  wolfAnimation = loadAnimation("./assets/worlf.gif");
  foxAnimation = loadAnimation("./assets/fox.gif");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImage);
  bg.velocityX = 2;
  bg.scale = 3

  bunny = createSprite(75, height - 80, 20, 20)
  bunny.addImage("bunny", bunnyImage);
  bunny.addImage("bunny2", bunny2Image);
  bunny.debug = true

  bunny.scale = 0.25;

  edges = createEdgeSprites()



  ObstacleGroup = new Group()



}

function draw() {
  background(0);

if(gameState=='play'){
  gamePlay()
}






  

  

  drawSprites()

  textSize(22)
  fill("white")
  text("Lives: " + live, 60, 40)

  if (live == 0) {
    gameState = 'end'
    text("you lost the game!!",300,300)
  }

}

function gamePlay() {
  if (bg.position.x > 800) {
    bg.position.x = width / 2
  }

  bunny.collide(edges);
  addObstacle();
  bunny.velocityY += 0.5

  if (bunny.overlap(ObstacleGroup, function (a, b) {
    b.remove();
  })) {
    live--
  }
}

function keyPressed() {
  if (keyCode === 39 && bunny.position.x < width - 20) {
    bunny.velocityX = +4
    bunny.changeImage("bunny2", bunny2Image);
  }

  if (keyCode === 37) {
    bunny.velocityX = -5
    bunny.changeImage("bunny", bunnyImage);
  }

  if (keyCode === 38) {
    bunny.velocityY = -10
  }

  if (keyCode === 40) {
    bunny.velocityY = 5
  }
}


function addObstacle() {
  var x = Math.round(random(100,width-100))
  var y = Math.round(random(50,height-50))
  if (frameCount % 200 == 0) {
    obstacleImage = createSprite(x,y)
    obstacleImage.velocityX = -2
    obstacleImage.addAnimation("wolf",wolfAnimation)
    obstacleImage.scale = 0.5
    obstacleImage.debug = true
    ObstacleGroup.add(obstacleImage)
  }
}




