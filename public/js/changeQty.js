const buttons = document.getElementsByClassName('cart-container')

document.addEventListener('click', async (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("btn-primary")) {
    const favButton = document.querySelector('.btn-primary')

    console.log(favButton.closest('.product'));
    // console.log(favButton.closest('#sock'))
    // const combo_id = document.querySelector('div[name="productCart"]')
    // console.log(combo_id);
  }
})
