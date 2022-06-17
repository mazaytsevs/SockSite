const del = document.querySelector('.favorites-container');
del.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('delete-button')) {
    const mar = event.target.closest('[data-id]');
    console.log(mar);
    const li = event.target.closest('[data-id]');
    console.log('li: ', li);

    const { id } = li.dataset;
    console.log('id: ', { id });

    const response = await fetch(`/favorites/${id}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json;charset=utf-8',
      // },

    });
    if (response.ok) {
      li.remove();
    }
  }
});
