let a1 = Array.from({length: 5},(x,i) => i);
console.log(a1);


let a2 = [...Array(5).keys()];
console.log(a2);



//Annonomoys function that uses from.
const range = (start, stop, step) => Array.from({length:(stop-start)/step + 1}, (x,i) => start + i*step);
//50 -10 /10 + 1
 //10 + 0 , 10 + 10, 10 + 20 , ...
 let a3= range(10,50,10);
 console.log(a3);

 //Array of Square Values using (from)
let a4 = Array.from({length:5}, (x,i) => i*i);
console.log(a4);

for(let i in a4){
  console.log(i);
}
