const container = document.querySelector('.cart-container');
container.addEventListener('click', async (event) => {
  event.preventDefault();

  // Удаление из избранного
  if (event.target.classList.contains('delete-button')) {
    const mar = event.target.closest('[data-id]');
    const li = event.target.closest('[data-id]');
    const { id } = li.dataset;

    const response = await fetch(`/cart/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      li.remove();
    }
  }

  // Изменение количества

  if (event.target.classList.contains('qty-minus')) {
    const card = event.target.closest('.card');
    const comb_id = card.dataset.id;
    const qty = card.querySelector('.qty');
    const response = await fetch(`/cart/${comb_id}/minus`, { method: 'GET' });
    if (response.ok) {
      await response;
      qty.innerText = +qty.innerText - 1;
    }
  }

  if (event.target.classList.contains('qty-plus')) {
    const card = event.target.closest('.card');
    const comb_id = card.dataset.id;
    const qty = card.querySelector('.qty');
    const response = await fetch(`/cart/${comb_id}/plus`, { method: 'GET' });
    if (response.ok) {
      await response;
      qty.innerText = +qty.innerText + 1;
    }
  }


});
