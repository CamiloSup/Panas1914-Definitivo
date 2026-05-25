
let selectedCountry = countries[0];

const countriesList = document.getElementById("countries-list");

function renderCountries() {

  countriesList.innerHTML = "";

  countries.forEach(country => {

    const button = document.createElement("button");

    button.textContent = country.name;

    button.classList.add("country-button");

    button.addEventListener("click", () => {

      selectedCountry = country;

      document.getElementById("country-name")
      .textContent = country.name;

      updateResources(country);

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

renderCountries();
updateResources(selectedCountry);

document.getElementById("buy-infantry")
.addEventListener("click", () => {

  buyInfantry(selectedCountry);

});

document.getElementById("buy-tank")
.addEventListener("click", () => {

  buyTank(selectedCountry);

});

document.getElementById("draw-event")
.addEventListener("click", () => {

  randomEvent();

});

document.getElementById("next-turn-btn")
.addEventListener("click", () => {

  nextTurn();

});
