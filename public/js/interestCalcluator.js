//Formulas used.
//Investment + their investment * interest rate
function getAccountValue(principal, interestRate, afterYear){
  return (principal* (Math.pow(1+interestRate, afterYear))).toFixed(2);
}

function getTable(){
  //Clear any Existing Tables.
  //If "interest-table" div has children then delete them, otherwise continue.
  var $existingTable = document.getElementById('interest-tbl');
  while($existingTable.firstChild){
    $existingTable.removeChild($existingTable.firstChild);
  }

  if(missingStartingBalance()){
    console.log("You need to put in a starting balance.")
    var $tableHeading = document.getElementById("table-heading");
    var $tableMessage = document.getElementById("table-message");
    $tableHeading.innerHTML = "Error";
    $tableMessage.innerHTML =  "You need to insert a starting balance.";
    return 0;
  }



  //Set Table Heading
  $tableHeading = document.getElementById("table-heading");
  $tableHeading.innerHTML = "Interest Table";

  //Grab rates input field and convert to decimal.
  // 5% --> 0.05
  let rate1 = parseFloat(document.getElementById("rate1").value)*0.01;
  let rate2 = parseFloat(document.getElementById("rate2").value)*0.01;
  let rate3 = parseFloat(document.getElementById("rate3").value)*0.01;
  let rate4 = parseFloat(document.getElementById("rate4").value)*0.01;
  let $startingBalance = document.getElementById("startingBalance").value ;

  //Build up the returns for each interst rate.
  let return1 = [...Array(5).keys()].map(x=> getAccountValue($startingBalance, rate1, x));
  let return2 = [...Array(5).keys()].map(x=> getAccountValue($startingBalance, rate2, x));
  let return3 = [...Array(5).keys()].map(x=> getAccountValue($startingBalance, rate3, x));
  let return4 = [...Array(5).keys()].map(x=> getAccountValue($startingBalance, rate4, x));

  //Create a table for us to build on. Set its attributes (Bootstrap Class Styling)
  var $investTable = document.createElement('table');
  $investTable.setAttribute('class', 'table table-striped');

  // Create a tablehead element.
  var thead= document.createElement('thead');

  //Create a table row element.
  var tHeadTableRow = document.createElement('tr');

  //Create and append each column heading to the theadRow.
  var th1 = tHeadTableRow.appendChild(document.createElement('th'));
  var th2 = tHeadTableRow.appendChild(document.createElement('th'));
  var th3 = tHeadTableRow.appendChild(document.createElement('th'));
  var th4 = tHeadTableRow.appendChild(document.createElement('th'));
  var th5 = tHeadTableRow.appendChild(document.createElement('th'));

  //Fill the column headings
  th1.innerHTML ='Year: ';
  th2.innerHTML = (rate1 * 100) + "%";
  th3.innerHTML = Math.floor((rate2 * 100)) + "%";
  th4.innerHTML = Math.floor((rate3 * 100)) + "%";
  th5.innerHTML = Math.floor((rate4 * 100)) + "%";

  //Put the theadRow inside the thead element.
  thead.appendChild(tHeadTableRow);

  //Prepend
  tHeadTableRow.prepend(th1,th2, th3, th4, th5);

  //Create the body of our answer.
  var tbody= document.createElement('tbody');
  for(var i =0 ; i < 5 ; i++){
    //Create a row element inside table
    var $tbodyTR = document.createElement('tr');
    //create head column elements into the row.
    var tbodyth1 = $tbodyTR.appendChild(document.createElement('th'));
    var tbodyth2 = $tbodyTR.appendChild(document.createElement('th'));
    var tbodyth3 = $tbodyTR.appendChild(document.createElement('th'));
    var tbodyth4 = $tbodyTR.appendChild(document.createElement('th'));
    var tbodyth5 = $tbodyTR.appendChild(document.createElement('th'));

    //Fill the values of the row
    tbodyth1.innerHTML = i ;
    tbodyth2.innerHTML = return1[i];
    tbodyth3.innerHTML = return2[i];
    tbodyth4.innerHTML = return3[i];
    tbodyth5.innerHTML = return4[i];

    //Attach the th elements to the tr.
    $tbodyTR.prepend(tbodyth1, tbodyth2, tbodyth3, tbodyth4, tbodyth5);

    //Attach the tr to the body.
    tbody.appendChild($tbodyTR);
  }

  //Push the head we built into the table we created earlier.
  $investTable.appendChild(thead);

  //Push the body we built into the table we created earlier.
  $investTable.appendChild(tbody);


  var tableDiv = document.getElementById("interest-tbl");
  tableDiv.appendChild($investTable);

  var $tableMessage = document.getElementById("table-message");
  $tableMessage.innerHTML = "Check out that growth!"


}

function missingStartingBalance(){
  var startingBalanceBox = document.getElementById('startingBalance');
  if(!startingBalanceBox.value){

    //Create an Error Message.
    var errorHeading = document.createElement('h3');
    errorHeading.setAttribute("id", "errorMessage");
    errorHeading.value = "Sorry you forgot something. Try Again"

    //Append the message to the box.
    var table = document.getElementById('interest-tbl');
    document.getElementById('table-heading').after(errorHeading);
    return true
  }
  return false;
}
