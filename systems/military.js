
function buyInfantry(country) {

  if (country.money >= 2 && country.food >= 1) {

    country.money -= 2;
    country.food -= 1;

    country.infantry += 1;

    addNews(`${country.name} entrenó una nueva unidad de infantería.`);

    updateResources(country);

  } else {

    alert("No tienes suficientes recursos.");

  }
}

function buyTank(country) {

  if (country.money >= 5 && country.steel >= 3 && country.oil >= 2) {

    country.money -= 5;
    country.steel -= 3;
    country.oil -= 2;

    country.tanks += 1;

    addNews(`${country.name} desplegó un nuevo tanque.`);

    updateResources(country);

  } else {

    alert("No tienes suficientes recursos.");

  }
}
