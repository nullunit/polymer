var newSrc = "";
var newHeading = "";
var newBody = "";

function selectFeature(e) {
  newSrc = e.target.dataset.src;
  newHeading = e.target.dataset.heading;
  newBody = e.target.dataset.body;

  if (!e.target.classList.contains('selected-feature')) {
    console.log("This was the right button");
    image.classList.add('hide');
    text.classList.add('hide');
    var mybuttons = document.querySelectorAll('.feature-switcher');
    mybuttons.forEach(function (button) {
      button.classList.remove('selected-feature');
    });
    e.target.classList.add('selected-feature');
  }
}

function showElement(e) {
  if (e.propertyName.includes('opacity') && image.classList.contains('hide')) {

    document.getElementById("product-text-heading").textContent = newHeading;
    document.getElementById("product-text-body").textContent = newBody;

    image.className = "product-images";
    image.src = newSrc;

    image.onload = function () {
      text.classList.remove('hide');
    }
  }
}

var buttons = document.querySelectorAll('.feature-switcher');
var image = document.querySelector('.product-images');
var text = document.querySelector('.product-text');

buttons.forEach(function (button) {
  button.addEventListener('click', selectFeature);
});

image.addEventListener('transitionend', showElement);
