const countries = [

{
  name: "Alemania",
  money: 10,
  oil: 5,
  steel: 8,
  food: 12
},

{
  name: "Francia",
  money: 9,
  oil: 6,
  steel: 7,
  food: 11
},

{
  name: "Rusia",
  money: 12,
  oil: 4,
  steel: 6,
  food: 15
},

{
  name: "Reino Unido",
  money: 14,
  oil: 8,
  steel: 9,
  food: 10
},

{
  name: "Austria-Hungría",
  money: 8,
  oil: 4,
  steel: 7,
  food: 9
}

];

let selectedCountry = countries[0];

let turn = 1;
let year = 1914;

const countryList =
document.getElementById("countryList");

function renderCountries() {

  countryList.innerHTML = "";

  countries.forEach(country => {

    const button =
    document.createElement("button");

    button.textContent = country.name;

    button.classList.add("country-btn");

    button.onclick = () => {

      selectedCountry = country;

      updateUI();

      addNews(
        `${country.name} fue seleccionada.`
      );

    };

    countryList.appendChild(button);

  });

}

function updateUI() {

  document.getElementById("countryName")
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

function addNews(text) {

  const feed =
  document.getElementById("newsFeed");

  const item =
  document.createElement("div");

  item.classList.add("news-item");

  item.textContent = text;

  feed.prepend(item);

}

document.getElementById("buyInfantry")
.onclick = () => {

  if (selectedCountry.money >= 2) {

    selectedCountry.money -= 2;

    updateUI();

    addNews(
      `${selectedCountry.name} compró infantería.`
    );

  }

};

document.getElementById("buyTank")
.onclick = () => {

  if (
    selectedCountry.money >= 5 &&
    selectedCountry.steel >= 3 &&
    selectedCountry.oil >= 2
  ) {

    selectedCountry.money -= 5;
    selectedCountry.steel -= 3;
    selectedCountry.oil -= 2;

    updateUI();

    addNews(
      `${selectedCountry.name} desplegó un tanque.`
    );

  }

};

document.getElementById("eventButton")
.onclick = () => {

  const events = [

    "Disturbios en Europa.",
    "Crisis económica internacional.",
    "Nuevo tratado diplomático.",
    "Espías descubiertos.",
    "Movilización militar masiva."

  ];

  const random =
  events[Math.floor(Math.random() * events.length)];

  addNews(random);

};

document.getElementById("nextTurn")
.onclick = () => {

  turn++;

  if (turn % 4 === 0) {
    year++;
  }

  document.getElementById("turnText")
  .textContent =
  `Turno ${turn} • Año ${year}`;

  selectedCountry.money += 2;
  selectedCountry.food += 1;

  updateUI();

  addNews(
    `Comenzó el turno ${turn}.`
  );

};

renderCountries();

updateUI();

addNews(
  "Europa se encuentra al borde de la guerra."
);
