const bill = document.getElementById('bill');
const tip = document.querySelectorAll('button[data-value]');
const custom = document.getElementById('custom');
const people = document.getElementById('people');
const result = document.getElementById('tip-result');

const numPeople = parseInt(people.value);
const numBill = parseInt(bill.value);
let tipValue = 0; // here is where the tip value will be stored

tip.forEach(button => {
    button.addEventListener('click', () => {
        tipValue = parseInt(this.dataset.value);
        result.textContent = numBill*(tipValue/100) / numPeople;
    })
})

const valueCustom = parseInt(custom.value);
result.textContent = numBill*(valueCustom/100) / numPeople;
