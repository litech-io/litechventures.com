const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");

function syncHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
