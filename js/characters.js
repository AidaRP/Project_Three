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
  }

}

// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------
//Declaro las instancias de los personajes
let challenger1 = new Character("Zorra", 7000, 350, 50, 10);
let challenger2 = new Character("Siete", 4650, 350, 25, 10);

const dañarVida = () => {
  console.log('funcion externa');
 
  challenger1.health = parseInt(challenger1.health)  - (parseInt(challenger2.attack * Math.random(challenger2.lucky) ));
  challenger2.health = parseInt(challenger2.health)  - (parseInt(challenger1.attack * Math.random(challenger1.lucky) ));
  console.log(challenger1.health);
  console.log(challenger2.health);
};
console.log(challenger1);
console.log(challenger2.lucky + 'Soy la suerte');

//Guardo los personajes en un diccionario
let SaveCharacters = {
  1: challenger1,
  2: challenger2,
};

console.log(SaveCharacters);
console.log(challenger1.health);
btnBattle.addEventListener("onclick",dañarVida());
