//-------------------------------------------------------------------- APARTADO DE FUNCIONES -------------------------------------------------------------------------------
// Función de cambio de Vista
const changeView = (vw_0) => {
  let fasewant = "view" + vw_0;

  let arrFases = ["view1", "view2", "view3", "view4", "view5"];

  arrFases = arrFases.filter((val) => !fasewant.includes(val));

  document.getElementById(fasewant).style.display = "flex";

  for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
  }
};

// Función para mostrar el GIF de la vista 2
const showGif = () => {
  changeView(2)
  setTimeout(() =>{changeView(3)},5450)
}



// Arrays para guardar los personajes y que pasen de la vista 2 a la 3.
let player1 = [];
let player2 = [];


//Hacer que salga el sprite seleccionado por los jugadores 
const spriteSelecc = () => {
  let sprite1 = document.getElementById("sprite1")
  let sprite2 = document.getElementById("sprite2")



  sprite1.style.backgroundImage = `url(${player1.sprite})`
  sprite2.style.backgroundImage = `url(${player2.sprite})`
}


//función de selección de personajes
const selectionCharacter = (numLuchadores) => {

  if (player1 == "") {
    player1 = SaveCharacters[numLuchadores];
    let luchador1 = document.getElementById(numLuchadores)
    luchador1.onclick = "";
    luchador1.classList.add("ChangSelected");
   
    //Escogemos personaje y lo bloqueamos a la vez que le dejamos el color gris para seleccionarlo.


    //Lo mismo que arriba.
  } else if (player2 == "") {
    player2 = SaveCharacters[numLuchadores];
    let luchador2 = document.getElementById(numLuchadores)
    luchador2.onclick = "";
    luchador2.classList.add("ChangSelected");
    

    //Seleccionados los 2 personajes se ejecuta la funcion de cambio de pantalla en los milisegundos establecidos

    setTimeout(() => {

      spriteSelecc()
      changeView(4)
    }, 800);

  }

}


//Función que nos hace reiniciar el juego
const final = () => {
  document.getElementById("btnFinal");
  window.location.reload();


}