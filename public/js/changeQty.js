const form = document.forms[0];
const changeQtyMinus = document.querySelector('.btn btn-primary changeQtyMinus');
const changeQtyPlus = document.querySelector('.btn btn-primary changeQtyPlus');
// const qtyToDB = {qty}
// const qty = document.querySelector('.btn btn-primary qty')

form.addEventListener('click', async (event) => {
  // console.log(event.target.className);
  if (event.target.className === "btn btn-primary changeQtyMinus" || event.target.className === "btn btn-primary changeQtyPlus") {
    console.log('goodJOB');
  //   const response = await fetch('/favorites', {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(dataToDB),
  //   });
  //   if (response.ok) {
  //     await response
  //     window.location = "/favorites"
  //   }
  }
})
