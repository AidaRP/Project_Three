//                                 JS PARA PONER TODO LO QUE TIENE VER CON LAS CLASES DE PERSONAJE Y SUS ACCIONES

//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------
const btnBattle = document.getElementById('battle')
class Character {
  constructor(nick, health, attack, speed) {
    this.lucky = Math.floor(Math.random() * 13);
    this.nick = nick;
    this.health = health;
    this.attack = attack;
    this.speed = speed;
  }
  dañarVida(health,attack) {
    console.log("hola",this.health);
    this.health = health - attack;
  }
}

// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------console.log(health)
//Declaro las instancias de los personajes
let challenger1 = new Character("Zorra", 7000, 350, 50);
let challenger2 = new Character("Siete", 4650, 350, 25);

const dañarVida = () => {
  challenger1.health - challenger2.attack * challenger2.lucky;
  challenger2.health - challenger1.attack * challenger1.attack;
  console.log(challenger1.health);
  console.log(challenger2.health);
};
console.log(challenger1);


//Guardo los personajes en un diccionario
let SaveCharacters = {
  1: challenger1,
  2: challenger2
}

console.log(SaveCharacters);
console.log(challenger1.health);
btnBattle.addEventListener('click',challenger1.dañarVida())