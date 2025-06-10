document.addEventListener("DOMContentLoaded", () => {
  const hamburgerToggle = document.getElementById("hamburgerToggle");
  const navLinks = document.getElementById("navLinks");

  hamburgerToggle.addEventListener("change", () => {
    if (hamburgerToggle.checked) {
      navLinks.classList.add("show");
    } else {
      navLinks.classList.remove("show");
    }
  });
});
