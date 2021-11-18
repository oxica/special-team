(() => {
  const refs = {
    openModalBtn: document.querySelector('[open-btn]'),
    closeModalBtn: document.querySelector('[close-btn]'),
    modal: document.querySelector('[popup]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
