const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});

const popup = document.querySelector(".popup");
let data = [];

async function loadData() {
  const res = await fetch("https://ejnscrcesvppjjdtafzp.supabase.co/rest/v1/singleview?select=*", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqbnNjcmNlc3ZwcGpqZHRhZnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjA4OTAsImV4cCI6MjA5NDgzNjg5MH0.n-RhdHQdWQI866GdHJJIdQmRiYMabr3tXrJ2v_KCygs", // Erstat med din API-nøgle
    },
  });

  data = await res.json();
  renderCards(data);
}

loadData();

function renderCards(data) {
  console.log("DATA", data);
  const natureGrid = document.querySelector(".nature-grid");
  natureGrid.innerHTML = "";

  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="nature-card">
        <img src="${item.img}" alt="" />
        <div class="nature-name">${item.navn}</div>
      </div>`;

    div.addEventListener("click", () => {
      popup.style.display = "flex";
      popup.innerHTML = `
        <div class="nature-card2">
          <div>
            <img src="${item.img}" alt="" />
            <div class="name">${item.navn}</div>
          </div>
          <div class="popup-grid">
            <div class="popup-intro">
              <h2>Sådan hjælper du naturen</h2>
              <p>${item.intro}</p>
              <h2>Om området</h2>
              <p>${item.intro2}</p>
            </div>
            <div class="popup-info">
              <div class="info-block">
                <div class="popup-info-title">Natur</div>
                <p><img src="img/natur.svg" alt=""> ${item.natur}</p>
              </div>
              <div class="info-block">
                <div class="popup-info-title">Areal</div>
                <p><img src="img/areal.svg" alt=""> ${item.areal}</p>
              </div>
              <div class="info-block">
                <div class="popup-info-title">Økonomi</div>
                <p><img src="img/okonomi.svg" alt=""> ${item.økonomi}</p>
              </div>
              <div class="info-block">
                <div class="popup-info-title">Partnere</div>
                <p><img src="img/partnere.svg" alt=""> ${item.partnere}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    natureGrid.appendChild(div);
  });
}

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

const filterOptions = document.querySelectorAll(".filter-option");
const filterBtn = document.querySelector(".filter-btn");
const filterMenu = document.querySelector(".filter-menu");

filterBtn.addEventListener("click", () => {
  filterMenu.classList.toggle("hidden");
});

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-area");
    filterMenu.classList.add("hidden");
    console.log("Filter option clicked:", value);

    if (value === "all") {
      renderCards(data);
    } else {
      const filtered = data.filter((item) => item.område === value);
      renderCards(filtered);
    }
  });
});
