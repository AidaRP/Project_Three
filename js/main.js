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
// const selectionCharacter = (Personaje) => {
//   console.log("Acabas de seleccionar a " + Personaje);
//   console.log(player1);
//   if (player1.length == 0) {
//     player1.push(SaveCharacters[Personaje]);

//     console.log(player1);
//   } else if (player2.length == 0) {
//     console.log(player2);
//     player2.push(SaveCharacters[Personaje]);
//     console.log(player2);
//     console.log("mio", player1.length > 0);
//     if (player1 != [] && player2 !== []) {
//       setTimeout(() => {
//         changeView(3);
//       }, 1000);
//     }
//   }
// };

// let selectionCharacter = (Personaje) => {

//   if(player1.length == 0){

//       player1 = SaveCharacters[Personaje];
      
//       let Primero = document.getElementById(Personaje);
//       let Luchador = document.getElementById("personaje" + 1);
      
//       Primero.onclick = player1.length == 0;
//       Primero.classList.add("selected");
//       Luchador.innerHTML = `${player1.nick}`;
//       console.log("selected team1");
      
//   // } else if( team2 == ""){
//   //     team2 = SaveCharacters[Personaje];
//   //     let pokemonPrimero = document.getElementById(Personaje);
//   //     let datosPokemon = document.getElementById("data" + 2);
//   //     pokemonPrimero.onclick = "";//bloqueo personaje
//   //     pokemonPrimero.classList.add("selected");
//   //     datosPokemon.innerHTML = `${team2.nombre}`;
//   //     console.log("selected team2");
      

//       setTimeout(() => {
//           changeView(3);
//       }, 500);
//   }
// }
const selectionCharacter = (numLuchadores) => {

  if (player1 == "") {
      player1 = SaveCharacters[numLuchadores];
      let luchador1 = document.getElementById(numLuchadores);

      //Escogemos personaje y lo bloqueamos a la vez que le dejamos el color gris para seleccionarlo.

      luchador1.onclick = "";
      luchador1.classList.add("ChangSelected");

    //Lo mismo que arriba.
  } else if (player2 == "") {
      player2 = SaveCharacters[numLuchadores];
      let luchador2 = document.getElementById(numLuchadores)
      luchador2.onclick = "";
      luchador2.classList.add("ChangSelected");


      //Seleccionados los 2 personajes se ejecuta la funcion de cambio de pantalla en los milisegundos establecidos

      setTimeout(() => {
          changeView(3);
      }, 800);
  }

}
// const final = () => {
//   innerText = `El combate ha finalizado con ${challenger().name} como WINNER!`;
// }


// .innerText() esto se utiliza si queremos renderizar el texto en la vista correspondiente.
