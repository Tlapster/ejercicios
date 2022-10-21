
  
  let salarios = {
    jhon: 100,
    Ann: 160,
    Pete: 130,
  }

  function totalSalario(obj) {
    let total = 0;

    for (key in obj) {
        total += obj[key];
    };

    return total;
  }

  totalSalario(salarios);
