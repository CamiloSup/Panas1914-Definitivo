let selectedCountry = countries[0];

const countriesList = document.getElementById("countries-list");

function updateUI() {

  document.getElementById("country-name")
  .textContent = selectedCountry.name;

  document.getElementById("money")
  .textContent = selectedCountry.money;

  document.getElementById("oil")
  .textContent = selectedCountry.oil;

  document.getElementById("steel")
  .textContent = selectedCountry.steel;

  document.getElementById("food")
  .textContent = selectedCountry.food;

}

function renderCountries() {

  countriesList.innerHTML = "";

  countries.forEach(country => {

    const button = document.createElement("button");

    button.textContent = country.name;

    button.classList.add("country-button");

    button.addEventListener("click", () => {

      selectedCountry = country;

      updateUI();

      addNews(`${country.name} ha sido seleccionado.`);

    });

    countriesList.appendChild(button);

  });

}

function addNews(text) {

  const newsFeed = document.getElementById("news-feed");

  const news = document.createElement("p");

  news.textContent = text;

  newsFeed.prepend(news);

}

document.getElementById("buy-infantry")
.addEventListener("click", () => {

  if (selectedCountry.money >= 2) {

    selectedCountry.money -= 2;

    selectedCountry.infantry += 1;

    updateUI();

    addNews(`${selectedCountry.name} compró infantería.`);

  }

});

document.getElementById("buy-tank")
.addEventListener("click", () => {

  if (
    selectedCountry.money >= 5 &&
    selectedCountry.steel >= 3 &&
    selectedCountry.oil >= 2
  ) {

    selectedCountry.money -= 5;
    selectedCountry.steel -= 3;
    selectedCountry.oil -= 2;

    selectedCountry.tanks += 1;

    updateUI();

    addNews(`${selectedCountry.name} desplegó un tanque.`);

  }

});

document.getElementById("draw-event")
.addEventListener("click", () => {

  const random =
  events[Math.floor(Math.random() * events.length)];

  addNews(
    `EVENTO: ${random.title} - ${random.description}`
  );

});

renderCountries();
updateUI();
