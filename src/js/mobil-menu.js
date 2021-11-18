(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opens]'),
    closeModalBtn: document.querySelector('[data-modal-closes]'),
    modal: document.querySelector('[data-modals]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();