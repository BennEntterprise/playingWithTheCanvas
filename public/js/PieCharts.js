let data;
let expenditureArray = [];
let percentArray = [];
let colorArray= [];


function drawChart(){
  data = document.getElementById('json-data').value ;
  console.log(data);
  populateArray(data);
  console.log(expenditureArray);

  percentArray = createPercentArray();
  console.log(percentArray);

  colorArray  = createRandomColorArray();
  console.log(colorArray);
  drawPie();
}

function createPercentArray(){
  let perArr =[];
  for(i=0; i < expenditureArray.length; i++){
    perArr[i]= expenditureArray[i].percent * 0.02;
  }
  return perArr;
}
function populateArray(jsonData){
  let expenseArray = JSON.parse(jsonData);
  for(i=0; i< expenseArray.expenditures.length ; i++){
    let expense= expenseArray.expenditures[i];
    expenditureArray[i] = expense;
  }
}
function createRandomColorArray(){
  let randColorArr = [];
  //Black = 16777215 = ffffff
  for(i=0; i < expenditureArray.length; i++){
    randColorArr[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return randColorArr;
}
function drawPie(){
  var cavas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  let startAngle = 0;
  let endAngle = 0;

  for(i=0; i < percentArray.length; i++){
    startAngle = endAngle;
    endAngle = endAngle + (percentArray[i] * Math.PI);
    //drawSlice(context, XCoord, Y Coord, Radius, startAngle, end Angle, Color)
    drawSlice(context, 300, 200, 150, startAngle, endAngle, colorArray[i]);
    drawSliceText(context, 300, 200, 150, startAngle, endAngle, percentArray[i]*50);
  }
}
function drawSlice(ctx, sliceCenterX, sliceCenterY, radius, startAngle, endAngle,color){
  ctx.fillStyle = color;
  ctx.beginPath();
  let medianAngle = (startAngle+endAngle)/2 * radius;

  let xOffset = Math.cos(medianAngle) *30;
  let yOffset = Math.sin(medianAngle) * 30;


  ctx.moveTo(sliceCenterX, sliceCenterY);
  ctx.arc(sliceCenterX + xOffset, sliceCenterY + yOffset, radius, startAngle, endAngle);
  ctx.closePath;
  ctx.fill();
}

function drawSliceText(ctx, sliceCenterX, sliceCenterY, radius, startAngle,endAngle, percentText ){
  let textX = sliceCenterX + Math.cos((startAngle+endAngle)/2) * radius;
  let textY = sliceCenterY + Math.sin((startAngle+endAngle)/2) * radius;

  ctx.fillStyle = 'black';
  ctx.font = '4px Calibri';
  ctx.fillText(percentText, textX, textY);
}
