const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.parentNode;
    const content = article.querySelector('p');
    const editableContent = document.createElement('textarea');
    editableContent.value = content.textContent;
    article.replaceChild(editableContent, content);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    article.appendChild(saveButton);

    saveButton.addEventListener('click', () => {
      content.textContent = editableContent.value;
      article.replaceChild(content, editableContent);
      article.removeChild(saveButton);
    });
  });
});
