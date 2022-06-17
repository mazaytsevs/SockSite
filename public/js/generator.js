const form = document.forms[0];
const output = document.querySelector('#sock');
const colorDiv = document.querySelector('#sock-color');
const patternDiv = document.querySelector('#sock-pattern');
const picDiv = document.querySelector('#sock-picture');

form.addEventListener('change', async (event) => {
  const color_id = form.querySelector('input[name="color"]:checked').closest('.color').dataset.id;
  const pattern_id = form.querySelector('input[name="pattern"]:checked').closest('.pattern').dataset.id;
  const picture_id = form.querySelector('input[name="pic"]:checked').closest('.picture').dataset.id;
  const dataToBackend = { color_id, pattern_id, picture_id };

  try {
    const response = await fetch('/generator/output', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(dataToBackend),
    });
    if (response.ok) {
      const item = await response.json();
      // console.log(item);
      colorDiv.style.backgroundColor = item.color_hex;
      patternDiv.style.backgroundImage = `url('/img/patterns/${item.pattern_url}')`;
      picDiv.style.backgroundImage = `url('/img/pictures/${item.picture_url}')`;
    }
  } catch (err) {
    console.error(err);
  }
});

form.addEventListener('click', async (event) => {
  if (event.target.classList.contains('addToFavorite') || event.target.classList.contains('addToCart')) {
    event.preventDefault();
    const color_id = form.querySelector('input[name="color"]:checked').closest('.color').dataset.id;
    const pattern_id = form.querySelector('input[name="pattern"]:checked').closest('.pattern').dataset.id;
    const picture_id = form.querySelector('input[name="pic"]:checked').closest('.picture').dataset.id;
    const dataToDB = { color_id, pattern_id, picture_id };
    console.log('dataToDB: ', dataToDB);

    if (event.target.classList.contains('addToFavorite')) {
      const response = await fetch('/favorites', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToDB),
      });
      if (response.ok) {
        await response;
        window.location = '/favorites';
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
        await response;
        window.location = '/cart';
      }
    }
  }
});
