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

//Scroll animation
function createObserver(element) {
  if (!element) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show-on-scroll", entry.isIntersecting);
      });
    },
    {
      threshold: 0.4,
    }
  );
  observer.observe(element);
}

// Call observer for each section you want to animate
createObserver(document.querySelector(".founder-section"));
createObserver(document.querySelector(".journey-section"));
createObserver(document.querySelector(".footer"));
