const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});

const mathildeFaqItems = document.querySelectorAll(".mathilde_faq_item");

mathildeFaqItems.forEach(function (item) {
  const button = item.querySelector(".mathilde_faq_question");

  button.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});
