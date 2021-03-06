//Set Constants
const RADIUS = 200;
const X_CIRCLE_CENTER = 300;
const Y_CIRCLE_CENTER = 300;

//Allocate Space for GLobals.
let canvas;
let ctx;

// Declare mouse class and initial value.
class MousePosition{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
let mousePos = new MousePosition(0,0);

//Initiate our Canvase once DOM is ready
document.addEventListener('DOMContentLoaded', setupCanvas);
function setupCanvas(){
  canvas = document.getElementById('my-canvas');
  ctx = canvas.getContext('2d');
  //First Draw of Canvas
  drawCanvas();

  // Subsequent Draws of Canvas
  canvas.addEventListener('mousemove', reDrawCanvas);
}

//Draw Template Canvas Using Constants
function drawCanvas(){
  drawRectangle('#839192', 5, 0, 0, 600, 600);
  drawCircle('#839192', 1, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0 , 2 * Math.PI);
  drawLine('#839192',1, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
  drawLine('#839192',1, 0, Y_CIRCLE_CENTER  , 600, Y_CIRCLE_CENTER);
}

//n+1 Drawings of Canvas
function reDrawCanvas(evt){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvas();
  getMousePosition(evt);
  drawTextAtPoint(ctx, "X : " + mousePos.x , 15, 25);
  drawTextAtPoint(ctx, "Y : " + mousePos.y , 15, 45);
  //Get Angle and Draw Text)
  let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
  drawTextAtPoint(ctx, "Degrees: " , 15, 65);
  drawTriangle(angleOfMouseDegrees);
}
function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY){
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(startX, startY, endX, endY);
}
function drawCircle(strokeColor, lineWidth, xCircleCenter, yCirceleCenter, radius, arcStart, arcEnd){
  ctx.strokeStyle= strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(xCircleCenter, yCirceleCenter, radius, arcStart, arcEnd);
  ctx.stroke();
}
function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd){
  ctx.moveTo(xStart,yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
}

function drawTextAtPoint(ctx, text, x, y){
  ctx.font = "15px Arial";
  ctx.fillText(text, x, y);
}

function getMousePosition(evt){
  let canvasDimensions = canvas.getBoundingClientRect();
  mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
  mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
  mousePos.x -= 300;
  mousePos.y = -1* (mousePos.y -300);
  return mousePos;
}

function getAngleUsingXAndY(x,y){
  let adjacent = x;
  let opposite = y
  return radiansToDegrees(Math.atan2(opposite,adjacent));
}

function radiansToDegrees(rad){
  if(rad < 0){
    return (360.0 + (rad *(180/Math.PI))).toFixed(2);
  }else{
    return (rad *(180/Math.PI)).toFixed(2);
  }
}

function degreesToRadians(degree){
  return degree * (Math.PI/180);
}

function drawTriangle(angleDegrees){
  ctx.moveTo(X_CIRCLE_CENTER, Y_CIRCLE_CENTER);
  //Cos = adj/hyp
  let xEndPoint = X_CIRCLE_CENTER + RADIUS* Math.cos(degreesToRadians(angleDegrees));
  let yEndPoint = Y_CIRCLE_CENTER + RADIUS* -Math.sin(degreesToRadians(angleDegrees));

  drawTextAtPoint(ctx, "Radians: " + degreesToRadians(angleDegrees).toFixed(2), 15,85);
  ctx.lineTo(xEndPoint, yEndPoint);
  ctx.stroke();
  ctx.moveTo(xEndPoint, yEndPoint);
  ctx.lineTo(xEndPoint, 300);
  ctx.stroke();

  drawTextAtPoint(ctx, "(" + xEndPoint.toFixed(2) + "," + yEndPoint.toFixed(2) +")", xEndPoint+ 10 , yEndPoint -10);

  let hypotenuseLength = getLineLength(X_CIRCLE_CENTER, Y_CIRCLE_CENTER, xEndPoint, yEndPoint);
  drawTextAtPoint(ctx, "Hypot Len: " + hypotenuseLength.toFixed(2), 15, 105);

  let oppositeLength = getLineLength(xEndPoint, yEndPoint, xEndPoint, 300);
  drawTextAtPoint(ctx, "Opp L: " + oppositeLength.toFixed(2), 15, 125);

  let adjacentLength = mousePos.x;
  drawTextAtPoint(ctx, "Adj L: "+ adjacentLength.toFixed(2), 15,145)
}

function getLineLength(x1,y1,x2,y2){
  let xS = x2 -x1;
  xS= xS *xS

  let yS = y2 -y1;
  yS= yS *yS

  return Math.sqrt(xS + yS);
}
