const formForAdding = document.forms[0];

formForAdding.addEventListener('click', async (event) => {

  if (event.target.id === "addToFavorite" || event.target.id === "addToCart") {

    event.preventDefault();
    console.log('event.target: ', event.target);
    const color_id = form.querySelector('input[name="color"]:checked').closest('.color').dataset.id;
    const pattern_id = form.querySelector('input[name="pattern"]:checked').closest('.pattern').dataset.id;
    const picture_id = form.querySelector('input[name="pic"]:checked').closest('.picture').dataset.id;
    const dataToDB = {color_id, pattern_id, picture_id}

    if(event.target.id === "addToFavorite") {
      const response = await fetch('/favorites', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToDB),
      });
      if (response.ok) {
        await response
        window.location = "/favorites"
      }

    } else {
      const response = await fetch('/cart', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToDB),
      });
      if (response.ok) {
        await response
        window.location = "/cart"
      }
    }
  }
})
