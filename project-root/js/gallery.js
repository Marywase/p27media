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

// Scroll animation setup
function createObserver(element) {
  if (!element) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-on-scroll");
        } else {
          entry.target.classList.remove("show-on-scroll");
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(element);
}

// Observe all sections with .scroll-fade class
document.querySelectorAll(".scroll-fade").forEach((section) => {
  createObserver(section);
});
