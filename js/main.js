/* Global bootstrap */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* Hero video: play once from the start, freeze on the last frame (no loop) */
(function () {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  video.play().catch(() => {});

  video.addEventListener("ended", () => {
    video.pause();
  });
})();
