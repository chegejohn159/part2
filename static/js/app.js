// from data.js
var tableData = data;

// YOUR CODE HERE!

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("#ufo-table");
generateTable(table, tableData);



function myFunction() {
  // Declare variables
  var input0,input1,input2,input3,input4,
       filter0,filter1,filter2,filter3,filter4,
        table, tr,
         td0,td1,td2,td3,td4,
          i,
           txtValue0,txtValue1,txtValue2,txtValue3,txtValue4;
  input0 = document.getElementById("datetime");
  input1 = document.getElementById("city");
  input2 = document.getElementById("state");
  input3 = document.getElementById("country");
  input4 = document.getElementById("shape");

  filter0 = input0.value.toUpperCase();
  filter1 = input1.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();

  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];

    if (td0||td1||td2||td3||td4) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;

      if ( (txtValue0.toUpperCase().indexOf(filter0) ||
       txtValue1.toUpperCase().indexOf(filter1) ||
      txtValue2.toUpperCase().indexOf(filter2)||
      txtValue3.toUpperCase().indexOf(filter3)||
      txtValue4.toUpperCase().indexOf(filter4) ) > -1 ) {
        tr[i].style.display = "";
      } 
      // else if(txtValue1.toUpperCase().indexOf(filter1) > -1){

      // }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

