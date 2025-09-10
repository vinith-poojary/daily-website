<<<<<<< HEAD
document.getElementById('changeText').addEventListener('click', function() {
  document.getElementById('title').innerText = 'Text Changed!';
});

document.getElementById('changeColor').addEventListener('click', function() {
  document.getElementById('title').style.color = 'red';
});
=======
document.getElementById('tipForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page from refreshing

  const bill = parseFloat(document.getElementById('bill').value); 
  const tip = parseFloat(document.getElementById('tip').value);

  if (isNaN(bill) || isNaN(tip)) {
    alert("Please enter valid numbers for bill and tip!");
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;

  document.getElementById('result').innerText = 
    `Tip: $${tipAmount.toFixed(2)}, Total: $${total.toFixed(2)}`;
});
>>>>>>> d9735fc (bill amount)
