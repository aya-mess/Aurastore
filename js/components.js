// js/components.js

function loadNavbar() {
  const navbarHTML = `

<nav>
  <div class="navbar" >
    <ul class="nav-links">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="store.html">Store</a>
      </li>
      <li>
        <a href="collection.html">Collection</a>
      </li>
      <li>
        <a href="about.html">About us</a>
      </li>
      <li>
        <a href="signin.html">Sign in</a>
      </li>
      <li>
        <a href="signup.html">Sign up</a>
      </li>
    </ul>
  </div>
</nav>
`;

const navContainer = document.getElementById('navbar-component');
if (navContainer) {
navContainer.innerHTML = navbarHTML;
}
}

document.addEventListener('DOMContentLoaded', loadNavbar);