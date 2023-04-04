



// ---------------------- todo list


let store = [];
let form = document.getElementById('form1');
let mainform= document.getElementById('form');
console.log(mainform);
let table = document.getElementById('table');

// Open form function
function openForm() {
  form.classList.add('form-open');
}

// Close form function
function closeForm() {
  form.classList.remove('form-open');
}

// Delete row function
function deleteRow(row) {
  table.deleteRow(row.rowIndex);
}

// Edit row function
function editRow(row) {
  openForm();
  
  // Fill in the form fields with the corresponding data from the row
  let cells = row.cells;
  document.getElementById('First-Name').value = cells[1].innerText;
  document.getElementById('Last-Name').value = cells[2].innerText;
  document.getElementById('email').value = cells[3].innerText;
  document.getElementById('male').value = cells[4].innerText;

  // Change the form submit button to an update button
  document.getElementById('submit').value = 'Update';
  document.getElementById('submit').onclick = function (event) {
    event.preventDefault();
      
    // Get the updated form data
    let updatedData = {
      first: document.getElementById('First-Name').value,
      second: document.getElementById('Last-Name').value,
      third: document.getElementById('email').value,
      forth: document.getElementById('male').value,
    };
    
    // Update the corresponding row with the new data
    cells[1].innerText = updatedData.first;
    cells[2].innerText = updatedData.second;
    cells[3].innerText = updatedData.third;
    cells[4].innerText = updatedData.forth;

   
  
    
    // Hide the form
    closeForm();
  };
}
document.getElementById('submit').onclick = function () {
    addRow();
  
  };
 


// Add row function
function addRow(event) {
event.preventDefault()

  let formVal = {
    first: document.getElementById('First-Name').value,
    second: document.getElementById('Last-Name').value,
    third: document.getElementById('email').value,
    forth: document.getElementById('male').value,
  };
    
  store.push(formVal);

  let newRow = table.insertRow();
  let cell1 = newRow.insertCell();
let cell2 = newRow.insertCell();
let cell3 = newRow.insertCell();
let cell4 = newRow.insertCell();
let cell5 = newRow.insertCell();



  cell1.innerText = store.length;
    cell2.innerText = formVal.first;
    cell3.innerText = formVal.second;
    cell4.innerText = formVal.third;
    cell5.innerText = formVal.forth;
//

  let cell6 = newRow.insertCell();

  // Edit button
  let editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.onclick = function() {
    editRow(newRow);
  };
  cell6.appendChild(editButton);

  // Delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.onclick = function() {
    deleteRow(newRow);
  };
  cell6.appendChild(deleteButton);

  // Clear the form and close it
  
  closeForm();
  mainform.reset();

  console.log(store);

}

// Add row event listener
document.getElementById('submit').onclick = addRow;






