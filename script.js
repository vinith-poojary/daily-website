document.getElementById('changeText').addEventListener('click', function() {
  document.getElementById('title').innerText = 'Text Changed!';
});

document.getElementById('changeColor').addEventListener('click', function() {
  document.getElementById('title').style.color = 'red';
});