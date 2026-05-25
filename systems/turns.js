
let currentTurn = 1;
let currentYear = 1914;

function nextTurn() {

  currentTurn++;

  if (currentTurn % 4 === 0) {
    currentYear++;
  }

  document.getElementById(
    "turn-info"
  ).textContent = `Turno ${currentTurn} - Año ${currentYear}`;

  selectedCountry.money += 2;
  selectedCountry.food += 1;
  selectedCountry.oil += 1;
  selectedCountry.steel += 1;

  updateResources(selectedCountry);

  addNews(`${selectedCountry.name} recibió recursos del nuevo turno.`);
}
