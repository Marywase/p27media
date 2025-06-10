document.addEventListener("DOMContentLoaded", () => {
  // Hamburger toggle logic
  const toggle = document.getElementById("hamburgerToggle");
  const nav = document.getElementById("navLinks");

  if (toggle) {
    toggle.addEventListener("change", () => {
      nav.classList.toggle("show");
    });
  }

  // Intersection Observer function
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

  // Observe your sections
  createObserver(document.querySelector(".wedding-intro"));
  createObserver(document.querySelector(".founder-section"));
  createObserver(document.querySelector(".gallery-title"));

  // Observe the footer for fade in/out
  createObserver(document.querySelector(".footer"));

  // Gallery items scroll logic
  const galleryItems = document.querySelectorAll(".gallery-item");

  function showItemsOnScroll() {
    galleryItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
        if (!item.classList.contains("visible")) {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 200);
        }
      } else {
        if (item.classList.contains("visible")) {
          item.classList.remove("visible");
        }
      }
    });
  }

  window.addEventListener("scroll", showItemsOnScroll);
  window.addEventListener("load", showItemsOnScroll);

  // Typing effect logic
  const line1El = document.querySelector(".line1");
  const line2El = document.querySelector(".line2");

  const line1Text = "Bringing stories";
  const line2Text = "to life.";
  const typingSpeed = 120;
  let i = 0;

  function typeLine1() {
    if (i < line1Text.length) {
      line1El.textContent += line1Text.charAt(i);
      i++;
      setTimeout(typeLine1, typingSpeed);
    } else {
      i = 0;
      setTimeout(typeLine2, 300);
    }
  }

  function typeLine2() {
    if (i < line2Text.length) {
      line2El.textContent += line2Text.charAt(i);
      i++;
      setTimeout(typeLine2, typingSpeed);
    }
  }

  typeLine1();
});
