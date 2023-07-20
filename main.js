
window.addEventListener('DOMContentLoaded', (event) => {
  var isDragging = false;
  var barco = document.getElementById('barco');
  var mapa = document.getElementById('mapa');

  barco.addEventListener('mousedown', function(event) {
    isDragging = true;
    event.preventDefault();
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  mapa.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var mouseX = event.clientX - mapa.offsetLeft;
      var mouseY = event.clientY - mapa.offsetTop;

      barco.style.left = mouseX + 'px';
      barco.style.top = mouseY + 'px';
    }
  });
});
