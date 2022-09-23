// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("rating-btn");



let buttons = Array.from(document.getElementsByClassName('rbtn'));

 buttons.map(button =>{
  button.addEventListener('click', (e)=>{
    document.querySelector('.card-rating-body').style.display="none";
    document.querySelector('.thankyou').style.display="flex";
    document.getElementById('rating').innerHTML = e.target.value;
  })
 })


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace( "active", "");
  this.className += " active";
  });
}
// const display = () =>{
//     document.querySelector('.card-rating-body').style.display="none";
//     document.querySelector('.thankyou').style.display="flex";
//   //  let stars = document.getElementsByName('rbtn').value;
//   // document.getElementById('rating').innerHTML = e.target.value;
//   buttons.map((button =>{
//     button.addEventListener('click', (e)=>{
//       console.log('clicked');
//     })
//   }))
//   }
