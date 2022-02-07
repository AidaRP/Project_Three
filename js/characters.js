//                                 JS PARA PONER TODO LO QUE TIENE VER CON LAS CLASES DE PERSONAJE Y SUS ACCIONES

//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------
const btnBattle = document.getElementById("battle");
class Character {
  constructor(nick, health, attack, speed, lucky) {
    this.lucky = lucky;
    this.nick = nick;
    this.health = health;
    this.attack = parseInt(attack);
    this.speed = parseInt(speed);
    this.status = null
  }

}

// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------
//Declaro las instancias de los personajes
let challenger1 = new Character("Zorra", 7000, 350, 50, 10);
let challenger2 = new Character("Siete", 4650, 3350, 25, 10);
let challenger3 = new Character("S", 4650, 3350, 25, 10);
let challenger4 = new Character("A", 5550, 350, 25, 10);
let challenger5 = new Character("E", 8750, 9350, 25, 10);
let challenger6 = new Character("F", 9950, 7350, 25, 10);
let challenger7 = new Character("I", 3350, 4350, 25, 10);
let challenger8 = new Character("L", 7750, 66350, 25, 10);

const dañarVida = () => {
  
 
  challenger1.health = parseInt(challenger1.health)  - (parseInt(challenger2.attack * Math.random(challenger2.lucky) ));
  challenger2.health = parseInt(challenger2.health)  - (parseInt(challenger1.attack * Math.random(challenger1.lucky) ));

  
  //Condición que dictamina el ganador/perdedor
  if (challenger1.health <= 0) {
    challenger1.status = 'LOSER'
    challenger2.status = 'WINNER'
  }
  if (challenger2.health <= 0) {
    challenger2.status = 'LOSER'
    challenger1.status = 'WINNER'
  }
  //Condición que hace cambiar de la vista 3 a la 4 cuando acaba el combate
let winner = document.getElementById('infoWin')  
  if (challenger1.status == 'WINNER') {
    changeView(4);
winner.innerHTML = `Ha ganado challenger1` 
  }else if (challenger2.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger2` 
  }else if (challenger3.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger3` 
  }else if (challenger4.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger4` 
  }else if (challenger5.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger5` 
  }else if (challenger6.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger6` 
  }else if (challenger7.status == 'WINNER'){
    changeView(4);
    winner.innerHTML = `Ha ganado challenger7` 
  }else if (challenger8.status == 'WINNER'){
  changeView(4);
  winner.innerHTML = `Ha ganado challenger8` 
};
}

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


btnBattle.addEventListener("onclick",dañarVida());
