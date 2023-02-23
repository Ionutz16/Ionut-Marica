// Get the modal
var modal = document.getElementById("myModal");

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// Get the form
var form = document.getElementById("article-form");

// When the user clicks the button, open the modal
document.getElementById("openModalBtn").onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
  clearInputs();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    clearInputs();
  }
}

// Clear input fields after submitting the form
function clearInputs() {
  form.reset();
}

// // On form submit, create a new article
// form.onsubmit = function(event) {
//   event.preventDefault();
//   var title = document.getElementById;
