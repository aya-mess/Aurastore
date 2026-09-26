// js/components.js

function loadNavbar() {
  const navbarHTML = `
Home

Store

Collection

About us

`;

const navContainer = document.getElementById('navbar-component');
if (navContainer) {
navContainer.innerHTML = navbarHTML;
}
}

document.addEventListener('DOMContentLoaded', loadNavbar);