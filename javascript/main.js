//  FAQ Accordion

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle Visibility of Body
    groupBody.classList.toggle("open");

    // Close other open faq bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherGroupIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Toggle Hamburger
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburgerButton = document.querySelector(".hamburger-button");
  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
