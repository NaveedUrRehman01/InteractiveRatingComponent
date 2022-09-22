// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("rating-btn");

// da header che za console.log kam no null rakaii
console.log(btns,btns.length)

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace( "active", "");
  this.className += " active";
  });
}
function display (){
    document.querySelector('.card-rating-body').style.display="none";
    document.querySelector('.thankyou').style.display="flex";
   let stars = document.querySelector('rbtn').value;
   document.getElementById('rating').innerText = stars;
  console.log(stars)
  }
