//                                 JS PARA PONER TODO LO QUE TIENE VER CON LAS CLASES DE PERSONAJE Y SUS ACCIONES

//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------
const btnBattle = document.getElementById("battle");
class Character {
  constructor(nick, health, attack, speed, lucky, sprite) {
    this.nick = nick;
    this.health = health;
    this.attack = parseInt(attack);
    this.speed = parseInt(speed);
    this.lucky = lucky;
    this.status = null;
    this.sprite = sprite;
  }
}

// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------

//Declaro las instancias de los personajes

let challenger1 = new Character("Freezer", 7000, 350, 50, 10, "img/Freezer.png");
let challenger2 = new Character("Brooly", 7000, 350, 25, 10, "img/Brooly.png");
let challenger3 = new Character("Celula", 7000, 999, 25, 10, "img/Cell.png");
let challenger4 = new Character("Jiren", 7000, 300, 25, 10, "img/Jiren.png");
let challenger5 = new Character("Bills", 7000, 1050, 25, 10, "img/Bills.png");
let challenger6 = new Character("Veggeto", 7000, 350, 25, 10, "img/Vegetto.png");
let challenger7 = new Character("c18", 7000, 650, 25, 10, "img/C18.png");
let challenger8 = new Character("Bardock", 7000, 750, 25, 10, "img/Bardock.png");


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

  let winner = document.getElementById("infoWin");
 

  if (player1.status == "WINNER") {

    changeView(5);
    winner.innerHTML = `Ha ganado player1`;
    
  } else if (player2.status == "WINNER") {
    changeView(5);

    winner.innerHTML = `Ha ganado player2`;
    
  }
};

const viewSprites = () => {
  document.getElementById("sprite1").src = "" + player1.nick + ".png";
  document.getElementById("sprite2").src = "img/" + player2.nick + ".png";
}

battle.addEventListener("click", dañarVida());

