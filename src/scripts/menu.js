document.querySelector(".hamburger").addEventListener("click", () => {
  const navlink = document.querySelector(".nav-links");
  if (navlink) {
    navlink.classList.toggle("expanded");
  }
});