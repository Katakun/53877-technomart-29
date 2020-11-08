const buyButtons = document.querySelectorAll('.buy-button')
const topMenuCart = document.querySelector('.main-topbar-cart');
const cartModal = document.querySelector('.modal-shopping-cart');
const cartModalClose = cartModal.querySelector('.modal-close')

const bookmarkButtons = document.querySelectorAll('.to-bookmark-button');
const topMenuBookmark = document.querySelector('.main-topbar-bookmark');


// Кнопка купить
for (let i = 0; i < buyButtons.length; i++) {
  const buyButton = buyButtons[i];
  buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    topMenuCart.classList.add("main-topbar-active");
    cartModal.classList.add("modal-show");
  })
}

// Модальное окно товар добавлен в корзину
cartModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartModal.classList.contains("modal-show")) {
      evt.preventDefault();
      cartModal.classList.remove("modal-show");
    }
  }
});

// Меню закладки меняет фон по нажатию на кнопку в закладки
for (let i = 0; i < bookmarkButtons.length; i++) {
  const bookmarkButton = bookmarkButtons[i];
  bookmarkButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    topMenuBookmark.classList.add("main-topbar-active");
    console.log('нажата кнопка в закладки')
  })
}


