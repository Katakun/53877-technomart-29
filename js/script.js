const mapLink = document.querySelector('.about-map a');
const mapModal = document.querySelector('.modal-map');
const mapModalClose = mapModal.querySelector('.modal-close');

const writeUsLink = document.querySelector('.about-map .button');
const writeUsModal = document.querySelector('.modal-write-us');
const writeUsModalClose = writeUsModal.querySelector(".modal-close");

const serviceButton1 = document.querySelector('.service-item:first-child .service-button')
const serviceButton2 = document.querySelector('.service-item:nth-last-child(2) .service-button')
const serviceButton3 = document.querySelector('.service-item:last-child .service-button')

const serviceText1 = document.querySelector('.service-text-item:first-child')
const serviceText2 = document.querySelector('.service-text-item:nth-child(2)')
const serviceText3 = document.querySelector('.service-text-item:last-child')

const buyButtons = document.querySelectorAll('.buy-button')
const topMenuCart = document.querySelector('.main-topbar-cart');
const cartModal = document.querySelector('.modal-shopping-cart');
const cartModalClose = cartModal.querySelector('.modal-close')

const bookmarkButtons = document.querySelectorAll('.to-bookmark-button');
const topMenuBookmark = document.querySelector('.main-topbar-bookmark');

const sliderButtonleft = document.querySelector('.slider-controls button:first-child');
const sliderButtonRight = document.querySelector('.slider-controls button:last-child');
const promoSlide1 = document.querySelector('.promo-slider-list .slide-item:first-child');
const promoSlide2 = document.querySelector('.promo-slider-list .slide-item:last-child');
const promoSlideIndicator1 = document.querySelector('.slider-indication button:first-child')
const promoSlideIndicator2 = document.querySelector('.slider-indication button:last-child')

// Модальное окно с картой
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

// Модальное окно с формой обратной связи
writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add("modal-show");
})

writeUsModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsModal.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsModal.classList.remove("modal-show");
    }
  }
});


// Слайдер сервисы
serviceButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceButton1.classList.add("service-button-active");
  serviceButton2.classList.remove("service-button-active");
  serviceButton3.classList.remove("service-button-active");

  serviceText1.classList.add("current-slide")
  serviceText2.classList.remove("current-slide")
  serviceText3.classList.remove("current-slide")
})
serviceButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceButton2.classList.add("service-button-active");
  serviceButton1.classList.remove("service-button-active");
  serviceButton3.classList.remove("service-button-active");

  serviceText2.classList.add("current-slide")
  serviceText1.classList.remove("current-slide")
  serviceText3.classList.remove("current-slide")
})
serviceButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceButton3.classList.add("service-button-active");
  serviceButton1.classList.remove("service-button-active");
  serviceButton2.classList.remove("service-button-active");

  serviceText3.classList.add("current-slide")
  serviceText1.classList.remove("current-slide")
  serviceText2.classList.remove("current-slide")
})

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

// Промо слайдер
sliderButtonleft.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlide1.classList.toggle("current-slide");
  promoSlide2.classList.toggle("current-slide");
  promoSlideIndicator1.classList.toggle("current");
  promoSlideIndicator2.classList.toggle("current");

})
sliderButtonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlide1.classList.toggle("current-slide");
  promoSlide2.classList.toggle("current-slide");
  promoSlideIndicator1.classList.toggle("current");
  promoSlideIndicator2.classList.toggle("current");
})
