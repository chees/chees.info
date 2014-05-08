var step = 0;

function nextStep() {
  step++;
  var stepEl = document.querySelector('[data-step="' + step + '"]');
  if (stepEl !== null)
    stepEl.style.display = 'block';
}

[].forEach.call(document.querySelectorAll('button'), function(el) {
  el.addEventListener('click', function(e) {
    this.parentNode.innerHTML = '<div class="reply">' + this.innerHTML + '</div>';
    nextStep();
  });
});

document.querySelector('[data-step="4"] form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.innerHTML = '<div class="reply">' + this.name.value + '</div>';
  nextStep();
});

nextStep();
