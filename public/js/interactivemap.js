let stateArray = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Deleware",
  "District_Of_Columbia",
  "Florida",
  "Gerogia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New_Hampshire",
  "New_Jersey",
  "New_Mexico",
  "New_York",
  "North_Carolina",
  "North_Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode_Island",
  "South_Carolina",
  "South_Dakota",
  "Tennassee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West_Virginia",
  "Wisconsin",
  "Wyoming"
];
stateArray.sort();
//1 = Democrat
//0 = Republican
let results2016 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];

let results2012 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];

let results2008 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];

let results2004 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];

let results2000 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];

let results1996 = [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0];




 function get1996Result(){

   changeColors(results1996);
 }
 function get2000Result(){

   changeColors(results2000);
 }
 function get2004Result(){

   changeColors(results2004);
 }
 function get2008Result(){

   changeColors(results2008);
 }
 function get2012Result(){

   changeColors(results2012);
 }
 function get2016Result(){
   changeColors(results2016);
 }

function changeColors(arrayYear){
  for( i = 0; i < stateArray.length; i++){
    var $stateElement = document.getElementById(stateArray[i]);
    for(j = 0 ; j < $stateElement.childElementCount ; j ++){
      if(arrayYear[i]){
        $stateElement.children[j].setAttribute('style', 'fill: #367DCF');
      }else{
        $stateElement.children[j].setAttribute('style', 'fill: #A92b17')
      }
    }
  }
}


function changeButtonColor(e){
  console.log(e);
}



  $(document).on("click", function(e){
    //Remove "active" class from any other buttons.
    var $buttonGroup = document.querySelectorAll('button');
    for(button in $buttonGroup){
      $(button).removeClass('active');
    }

    var clickedButton = e.target;

    $(clickedButton).addClass('active');
  })
