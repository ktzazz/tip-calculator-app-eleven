const bill = document.getElementById("bill");
const tip = document.querySelectorAll("button[data-value]");
const custom = document.getElementById("custom");
const people = document.getElementById("people");
const result = document.getElementById("tip-result");
const total = document.getElementById("total");
const resetButton = document.getElementById("reset");

let tipValue = 0; // here is where the tip value is stored

tip.forEach((button) => {
  button.addEventListener("click", function () {
    tipValue = parseInt(this.dataset.value); // "this" refers to the clicked button and makes the code reusable
    updateResult(); // parseInt() is used to convert the value to an integer
  }); // the result is updated every time a button is clicked
});


//this part is for the button when active 
const activeButton = document.querySelectorAll(".item");

activeButton.forEach((button) => {
  button.addEventListener('click', function() { 
    if (this.classList.contains('selected')) { //if the button is already selected a second click will remove the "selected" class 
      this.classList.remove('selected'); 
    } else {
      activeButton.forEach(btn => btn.classList.remove('selected')); 
      this.classList.add('selected'); //if the button is not selected, add the "selected" class
    }
  });
});

custom.addEventListener("input", function () {
  tipValue = parseInt(custom.value);
  updateResult();
});

function updateResult() {
  const numPeople = parseInt(people.value) || 1; //Avoid NaN
  const numBill = parseInt(bill.value) || 0; //Avoid NaN
  if (numPeople > 0) {
    const tipAmount = numBill * (tipValue / 100); // Calculate the tip
    const tipPerPerson = tipAmount / numPeople; // Tip per person
    const totalPerPerson = numBill / numPeople + tipPerPerson; // Total per person

    result.textContent = '$' + tipPerPerson.toFixed(2); // .toFixed(2) for two decimal places
    total.textContent = '$' + totalPerPerson.toFixed(2);

    //we don't use result to calculate the total because that's from html, it's like trying to do an addition of a string and a numeric value.
  } else {
    result.textContent = "Enter a valid number of people, please.";
    total.textContent = "$0.00"; // reset the total if numPeople is 0
  }
}

//these event listeners are used to update the result when the user inputs a new value
bill.addEventListener("input", updateResult);
people.addEventListener("input", updateResult);

resetButton.addEventListener("click", function () {
  bill.value = "";
  people.value = "";
  result.textContent = "$0.00";
  total.textContent = "$0.00";
  custom.value = ""; //because tipValue and custom.value are independent

  tipValue = 0;
});

updateResult(); //when the page loads the result is updated
