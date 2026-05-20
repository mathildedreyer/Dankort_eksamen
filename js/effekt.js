const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});

const cards = document.querySelectorAll(".nature-card");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

let data = [];
async function loadData() {
  const res = await fetch("https://ejnscrcesvppjjdtafzp.supabase.co/rest/v1/singleview?select=*", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqbnNjcmNlc3ZwcGpqZHRhZnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjA4OTAsImV4cCI6MjA5NDgzNjg5MH0.n-RhdHQdWQI866GdHJJIdQmRiYMabr3tXrJ2v_KCygs",
    },
  });

  const data = await res.json();
  renderCards(data);
}

loadData();
