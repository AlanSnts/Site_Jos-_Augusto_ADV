/* Navbar: glassmorphism on scroll + mobile drawer */
(function () {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const scrim = document.getElementById("navScrim");

  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    links.classList.remove("is-open");
    scrim.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("modal-open");
  };

  const openMenu = () => {
    toggle.classList.add("is-open");
    links.classList.add("is-open");
    scrim.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("modal-open");
  };

  if (toggle && links && scrim) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    scrim.addEventListener("click", closeMenu);

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
})();
