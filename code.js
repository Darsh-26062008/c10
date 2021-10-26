var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af69a527-3943-4961-b4b8-8e28b7b225ef","fa26d6a3-8196-4faa-8a60-2c7b7affa565","5f459366-d847-4c3f-8936-8fdfe01af2ef","13127f7a-0cf7-4760-9e86-4e7651ead07f"],"propsByKey":{"af69a527-3943-4961-b4b8-8e28b7b225ef":{"name":"briefcase","sourceUrl":"assets/api/v1/animation-library/gamelab/NooKrq0X1BvvCVNJ4EWLW1t.WtkNIJBv/category_school_objects/briefcase.png","frameSize":{"x":155,"y":116},"frameCount":1,"looping":true,"frameDelay":2,"version":"NooKrq0X1BvvCVNJ4EWLW1t.WtkNIJBv","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":116},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NooKrq0X1BvvCVNJ4EWLW1t.WtkNIJBv/category_school_objects/briefcase.png"},"fa26d6a3-8196-4faa-8a60-2c7b7affa565":{"name":"gameplay_greendiamond2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"5f459366-d847-4c3f-8936-8fdfe01af2ef":{"name":"gameplay","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"13127f7a-0cf7-4760-9e86-4e7651ead07f":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var line1 =createSprite(100,200,20,10)
line1.shapeColor="red"

var line2 =createSprite(300,200,20,10)
line2.shapeColor="red"

var line3 =createSprite(200,200,20,10)
line3.shapeColor="red"

var briefcase=createSprite(20,200,50,50)
briefcase.setAnimation("briefcase");
briefcase.scale=0.3

var gameplay=createSprite(380,200,20,20)
gameplay.setAnimation("gameplay")
gameplay.scale=0.1

var kild=0;

function draw() {
  

background("green")

createEdgeSprites()
line1.bounceOff(edges)
briefcase.bounce(edges)
line2.bounceOff(edges)
line3.bounceOff(edges)
            
  
   textSize(18);
  fill("maroon");
  text(kild,25,185);
  
            
    

 
  if(keyDown("LEFT")){
briefcase.x = briefcase.x-5;
}

if(keyDown("space")){
line1.velocityX =0
line1.velocityY=-10
}

if(keyDown("RIGHT")){
briefcase.x = briefcase.x+5;
}

if(keyDown("space")){
line2.velocityX =0
line2.velocityY=-10
}

if(keyDown("space")){
line3.velocityX =0
line3.velocityY=-15
}

if(line1.isTouching(briefcase)|| line2.isTouching(briefcase)||line3.isTouching(briefcase)){
stroke(0)
fill("yellow")
textSize(40)
text("you are out",120,200)
line1.setVelocity(0,0)
line2.setVelocity(0,0)
briefcase.setVelocity(0,0)
}

if(briefcase.isTouching(gameplay)|| briefcase.isTouching(gameplay)){
stroke(0)
fill("black")
textSize(40)
text("you are wine",120,200)
line1.setVelocity(0,0)
line2.setVelocity(0,0)
gameplay.setVelocity(0,0)
briefcase.setVelocity(0,0)
}

if(briefcase.isTouching(line1)){
  kild=kild +1
}
if(briefcase.isTouching(line2)){
  kild=kild +1
}
if(briefcase.isTouching(line3)){
  kild=kild +1
}

drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
