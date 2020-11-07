const mapLink = document.querySelector('.about-map a');
const mapModal = document.querySelector('.modal-map');
const mapModalClose = mapModal.querySelector('.modal-close');
const writeUsLink = document.querySelector('.about-map .button');
const writeUsModal = document.querySelector('.modal-write-us');
const writeUsModalClose = writeUsModal.querySelector(".modal-close");

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
