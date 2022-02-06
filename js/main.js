//-------------------------------------------------------------------- APARTADO DE FUNCIONES -------------------------------------------------------------------------------
// Función de cambio de Vista
const changeView = (vw_0) => {
  let fasewant = "view" + vw_0;

  let arrFases = ["view1", "view2", "view3", "view4"];

  arrFases = arrFases.filter((val) => !fasewant.includes(val));

  document.getElementById(fasewant).style.display = "block";

  for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
  }
};

// Arrays para guardar los personajes y que pasen de la vista 2 a la 3.
let player1 = [];
let player2 = [];

// Función para seleccionar personaje VISTA 2
const selectionCharacter = (Personaje) => {
  console.log("Acabas de seleccionar a " + Personaje);
  console.log(player1);
  if (player1.length == 0) {
    player1.push(SaveCharacters[Personaje]);

    console.log(player1);
  } else if (player2.length == 0) {
    console.log(player2);
    player2.push(SaveCharacters[Personaje]);
    console.log(player2);
    console.log("mio", player1.length > 0);
    if (player1 != [] && player2 !== []) {
      setTimeout(() => {
        changeView(3);
      }, 1000);
    }
  }
};
let round = 0;

const startBattle = (boton) => {
  if (btnSeleccion == true)
    if (player1.health == 0 && player2.health == 0) {
    } else {
      console.log("No ha entrado");
    }
};
// .innerText() esto se utiliza si queremos renderizar el texto en la vista correspondiente.
