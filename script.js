alert( "CLICK OKAY TO VIEW THE PAGE"
)
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top when clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    // Simulate success (you'd send data here with fetch() or AJAX)
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "white";
    form.reset();
  });

