const modalButtons = document.querySelectorAll(".sk-modal-button"),
  modals = document.querySelectorAll(".sk-modal"),
  closeButtons = document.querySelectorAll(".close-button");
bodyElement = document.body;

modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    bodyElement.classList.add("overlay");
    modals.forEach((modal) => {
      modal.setAttribute("aria-hidden", modal.id !== targetId);
    });

    closeButtons.forEach((cb) => {
      cb.addEventListener("click", () => {
        cb.closest(".sk-modal")?.setAttribute("aria-hidden", true);
        bodyElement.classList.remove("overlay");
      });
    });
  });
});
