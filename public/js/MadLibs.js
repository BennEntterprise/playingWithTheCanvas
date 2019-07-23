//PI = 4/1 - 4/3 + 4/5 - 4/7 + 4/8
function calcPI(iterations){
  let pi = 0, divisor = 1;
  for(let i = 0; i <= iterations; i++){
    pi = pi + (4/divisor) - (4/(divisor+2));
    divisor+=4;
  };
  document.getElementById('output1').value = pi.toFixed(10);
}

// 1 ,1,2,3,5,8,13...
let fibList = [];
function getFibList(howMany){
    for(i=0; i<howMany; i++){
      fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById('output1').value = fibList.join(", ");

}

function fib(whichNumber){
  let num1 = 1;
  let num2 = 0;
  let temp;
  let i = 0;

  while(i<whichNumber){
    temp = num1;
    num1 = num1 + num2;
    num2 = temp;
    i++;
  }
  return num2;
}

let mLText="My dear old ~ sat me down to hear some words of wisdom \n 1.Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever. \n 2. He who ~ at the right time can ~ again. \n 3. Always wear ~ ~ in case you're in a ~ \n4. Don't use your ~ to wipe your ~ always have a clean ~ with you.";

//Convert String to Array
let mLArray = mLText.split(" ");

//Create array for user input
let inputArray = [];

function madLibGenerator(){
  createInputArray();
  if(checkForMissingInput()){
    document.getElementsByClassName("output1").value = "Enter all values above."
  }else{
    createMLSentance();
  }
}

function createInputArray(){
  for(i = 0; i<=13; i++){
    inputArray[i]=document.getElementById("i"+i).value;
  }
}

function checkForMissingInput(){
  let defaultArrayVals = [
    "Person",
    "Noun",
    "Verb",
    "Adjective",
    "Plural Verb",
    "Body Part",
    "Event"
  ];

  for(i=0; i< inputArray.length; i++){
    if(defaultArrayVals.indexOf(inputArray[i])> -1){
      return true;
    }
  }
  return false;
}

function createMLSentance(){
  let arrIndex = 0 ;
  for(i=0; i< mLArray.length; i++){
    let matchIndex= mLArray.indexOf("~");
    mLArray[matchIndex]= inputArray[arrIndex];
    arrIndex++;
  }
  document.getElementById("output1").value = mLArray.join(" ");
}
