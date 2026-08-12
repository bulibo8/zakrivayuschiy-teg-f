const dialog = document.querySelector('.dialog');
const saveButton = document.querySelector('.save-button');
const closeButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});