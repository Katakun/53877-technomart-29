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

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
})

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add("modal-show");
})
writeUsModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("modal-show");
})

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
