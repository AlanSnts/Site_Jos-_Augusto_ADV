/* Global bootstrap */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* Hero video: start at 00:02, play once, freeze on the last frame (no loop) */
(function () {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  const START_TIME = 2;

  const startFromOffset = () => {
    const onSeeked = () => {
      video.removeEventListener("seeked", onSeeked);
      video.play().catch(() => {});
    };
    video.addEventListener("seeked", onSeeked);
    video.currentTime = START_TIME;
  };

  if (video.readyState >= 1) {
    startFromOffset();
  } else {
    video.addEventListener("loadedmetadata", startFromOffset, { once: true });
  }

  video.addEventListener("ended", () => {
    video.pause();
  });
})();
