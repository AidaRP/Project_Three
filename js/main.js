//-------------------------------------------------------------------- APARTADO DE FUNCIONES -------------------------------------------------------------------------------
// Función de cambio de Vista
const changeView = (vw_0) => {
  let fasewant = "view" + vw_0;
console.log(vw_0)
  let arrFases = ["view1", "view2", "view3", "view4", "view5"];

  arrFases = arrFases.filter((val) => !fasewant.includes(val));

  document.getElementById(fasewant).style.display = "block";

  for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
  }
};

//Cambio de pantalla del gif a la pantalla 2 de selección
console.log("estoy fuera")
setTimeout(() => {
  console.log("estoy en el time");
  changeView(3);
}, 600);



// Arrays para guardar los personajes y que pasen de la vista 2 a la 3.
  var player1 = [];
  var player2 = [];

const selectionCharacter = (numLuchadores) => {

  if (player1 == "") {
    player1 = SaveCharacters[numLuchadores];
    let luchador1 = document.getElementById(numLuchadores)
    luchador1.onclick = "";
    luchador1.classList.add("ChangSelected");
    console.log(player1)
    //Escogemos personaje y lo bloqueamos a la vez que le dejamos el color gris para seleccionarlo.


    //Lo mismo que arriba.
  } else if (player2 == "") {
    player2 = SaveCharacters[numLuchadores];
    let luchador2 = document.getElementById(numLuchadores)
    luchador2.onclick = "";
    luchador2.classList.add("ChangSelected");
    console.log(player2)

    //Seleccionados los 2 personajes se ejecuta la funcion de cambio de pantalla en los milisegundos establecidos

    setTimeout(() => {
      changeView(4)
    }, 800);
    
  }

}

// battle.addEventListener("onclick", dañarVida());

// const final = () => {
//  
// }