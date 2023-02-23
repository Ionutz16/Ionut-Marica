const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.remove();
  });
});
