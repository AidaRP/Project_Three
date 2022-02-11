//                                 JS PARA PONER TODO LO QUE TIENE VER CON LAS CLASES DE PERSONAJE Y SUS ACCIONES

//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------
const btnBattle = document.getElementById("battle");
class Character {
  constructor(nick, health, attack, speed, lucky) {
    this.nick = nick;
    this.health = health;
    this.attack = parseInt(attack);
    this.speed = parseInt(speed);
    this.lucky = lucky;
    this.status = null;
  }
}

// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------

//Declaro las instancias de los personajes

let challenger1 = new Character("Freezer", 7000, 350, 50, 10);
let challenger2 = new Character("Brooly", 7000, 350, 25, 10);
let challenger3 = new Character("Celula", 7000, 999, 25, 10);
let challenger4 = new Character("Jiren", 7000, 300, 25, 10);
let challenger5 = new Character("Bills", 7000, 1050, 25, 10);
let challenger6 = new Character("Veggeto", 7000, 350, 25, 10);
let challenger7 = new Character("Androide", 7000, 650, 25, 10);
let challenger8 = new Character("Bardock", 7000, 750, 25, 10);


//Guardo los personajes en un diccionario

let SaveCharacters = {
  1: challenger1,
  2: challenger2,
  3: challenger3,
  4: challenger4,
  5: challenger5,
  6: challenger6,
  7: challenger7,
  8: challenger8,
};



const dañarVida = () => {
  
  
  
  // Player 1
  
  player1.health =
    parseInt(player1.health) -
    parseInt(player2.attack * Math.random(player2.lucky));
  console.log(player1.health);
  
  // Player 2

  player2.health =
    parseInt(player2.health) -
    parseInt(player1.attack * Math.random(player1.lucky));
  console.log(player2.health);
  
  //Condición que dictamina el ganador/perdedor
  
  console.log("soy de fuera");

  if (player1.health <= 0) {
    console.log("estoy dentro");
    player1.status = "LOSER";
    player2.status = "WINNER";
  }
 
  if (player2.health <= 0) {
    player1.status = "WINNER";
    player2.status = "LOSER";
  }
  
  //Condición que hace cambiar de la vista 3 a la 4 cuando acaba el combate
  
  let winner1 = document.getElementById("infoWin1");
  let winner2 = document.getElementById("infoWin2");
 
  if (player1.status == "WINNER") {
  
    changeView(5);
    winner1.innerHTML = `Ha ganado player1`;
  } else if (player2.status == "WINNER") {
    changeView(5);
   
    winner2.innerHTML = `Ha ganado player2`;
  }
};


battle.addEventListener("click", dañarVida());

