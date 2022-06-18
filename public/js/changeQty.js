const buttons = document.getElementsByClassName('favorites-container');

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('add-to-cart-button')) {
    const favButton = event.target;
    const dataId = favButton.closest('.card').dataset.id;
    console.log(dataId);
    const response = await fetch('/cart/addfromfav', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataId }),
    });
    if (response.ok) {
      await response;
      window.location = '/cart';
    }
  }
});
