document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.querySelector("[data-quantity-input]");
  const minusButton = document.querySelector("[data-quantity-minus]");
  const plusButton = document.querySelector("[data-quantity-plus]");

  if (quantityInput && minusButton && plusButton) {
    minusButton.addEventListener("click", () => {
      const nextValue = Math.max(1, parseInt(quantityInput.value, 10) - 1);
      quantityInput.value = nextValue;
    });

    plusButton.addEventListener("click", () => {
      const nextValue = parseInt(quantityInput.value, 10) + 1;
      quantityInput.value = nextValue;
    });
  }

  const accordions = document.querySelectorAll("[data-accordion] button");
  accordions.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.closest("[data-accordion]").querySelector("[data-accordion-panel]");
      panel.classList.toggle("is-open");
    });
  });
});
