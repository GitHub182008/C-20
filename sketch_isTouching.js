var moving_rect, fixed_rect;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(200, 200, 50, 80);
  moving_rect = createSprite(400, 200, 80, 30);
  fixed_rect.shapeColor = "red";
  moving_rect.shapeColor = "red";
}

function draw() {
  background(0,0,0);  

  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;

  if(moving_rect.x - fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2 &&
    fixed_rect.x - moving_rect.x <  moving_rect.width/2 + fixed_rect.width/2 &&
    moving_rect.y - fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2 &&
    fixed_rect.y - moving_rect.y <  moving_rect.height/2 + fixed_rect.height/2){
      fixed_rect.shapeColor = "green";
      moving_rect.shapeColor = "green";   
    }
  else{
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  }
  drawSprites();
}