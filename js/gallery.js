/* Office gallery: single-image crossfade slideshow */
(function () {
  const frame = document.querySelector(".office-gallery-frame");
  if (!frame) return;

  const images = Array.from(frame.querySelectorAll("img"));
  if (images.length < 2) return;

  const INTERVAL = 4500;
  let index = images.findIndex((img) => img.classList.contains("is-active"));
  if (index < 0) index = 0;

  setInterval(() => {
    images[index].classList.remove("is-active");
    index = (index + 1) % images.length;
    images[index].classList.add("is-active");
  }, INTERVAL);
})();
