
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

  /* AUTOMATIC COPYRIGHT YEAR
     Supports both IDs used across the website. */
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("#year, #current-year").forEach(function (element) {
    element.textContent = currentYear;
  });

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

  /* CONTACT FORM VALIDATION
     Supports both:
     1. <form class="contact-form">
     2. <div class="contact-form"><form>...</form></div> */
  const contactForms = document.querySelectorAll(
    ".contact-form form, form.contact-form"
  );

  contactForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      }
    });
  });

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
