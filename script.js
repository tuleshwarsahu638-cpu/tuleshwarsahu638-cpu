/* Tuleshwar Sahu portfolio interactions. No libraries or build tools required. */
(function () {
  "use strict";

  function initNavigation() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (!menuToggle || !navLinks) return;

    function closeMenu() {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  function initYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function initReveal() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) return;

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) { item.classList.add("visible"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealItems.forEach(function (item) { observer.observe(item); });
  }

  function start() {
    initNavigation();
    initYear();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
