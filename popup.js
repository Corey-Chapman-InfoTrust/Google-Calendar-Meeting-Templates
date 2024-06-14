function eventListeners(){
var image = document.getElementById('catBurger');
var text = document.getElementById('makeMeDance');
var button = document.getElementById('OOWBOY');

image.addEventListener('mouseover', function () {
  text.classList.add('makeMeDance');
});

image.addEventListener('mouseout', function () {
  text.classList.remove('makeMeDance');
});

button.addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=xm3YgoEiEDc', '_blank');
});
}

document.addEventListener('DOMContentLoaded', eventListeners);