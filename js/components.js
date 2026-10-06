// js/components.js

// ===== Navbar data =====
const NAV_LINKS = [
  { label: "Home",       href: "index.html" },
  { label: "Store",      href: "store.html" },
  { label: "Collection", href: "collection.html" },
  { label: "About us",   href: "about.html" },
];

const AUTH_LINKS = [
  { label: "Sign in", href: "signin.html" },
  { label: "Sign up", href: "signup.html" },
];

// ===== Helpers =====
function getCurrentPage() {
  // "/aurastore/store.html" -> "store.html" ("" -> "index.html")
  return window.location.pathname.split("/").pop() || "index.html";
}

function buildLinks(links, currentPage) {
  return links
    .map(({ label, href }) => {
      const active = href === currentPage ? "active" : "";
      return `<li><a href="${href}" class="nav-link ${active}">${label}</a></li>`;
    })
    .join("");
}

// ===== Navbar component =====
function renderNavbar() {
  const target = document.getElementById("navbar");
  if (!target) return; // page without a navbar placeholder

  const currentPage = getCurrentPage();

  target.innerHTML = `
    <nav class="navbar" aria-label="Main navigation">
      <a href="index.html" class="navbar__logo" aria-label="Aurastore home">
        <img src="assets/logo/logo.png" alt="Aurastore logo">
      </a>

      <button class="navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
        <span>

        </span>
        <span>
        
        </span>
        <span>
        
        </span>
      </button>

      <ul class="navbar__menu">
        ${buildLinks(NAV_LINKS, currentPage)}
        ${buildLinks(AUTH_LINKS, currentPage)}
      </ul>
    </nav>
  `;

  // Mobile menu toggle
  const toggle = target.querySelector(".navbar__toggle");
  const menu = target.querySelector(".navbar__menu");
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

// ===== Run when the DOM is ready =====
document.addEventListener("DOMContentLoaded", renderNavbar);