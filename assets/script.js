
document.addEventListener("DOMContentLoaded", function () {
  /* MOBILE NAVIGATION */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });

    document.addEventListener("click", function (event) {
      const clickedInsideMenu = navLinks.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      }
    });
  }

  /* AUTOMATIC COPYRIGHT YEAR */
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* FAQ ACCORDION */
  const faqItems = document.querySelectorAll(".faq-list details");

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      }
    });
  });

  /* CONTACT FORM VALIDATION */
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
      }
    });
  }

  /* CLOSE MOBILE MENU WHEN SCREEN RESIZES */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760 && navLinks && menuToggle) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    }
  });
});
