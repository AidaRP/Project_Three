
//                                 JS PARA PONER TODO L OQUE TIENE VER CON LAS CLASES DE PERSONAJE Y SUS ACCIONES




//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------

class Character{
    constructor(nick, health, attack, speed){
        this.nick = nick,
        this.health = health,
        this.attack = attack,
        this.lucky = math.floor(Math.random() * 13)
        this.speed = speed
    }
    
       
}

// class Player {
//     constructor(player){
//         this.player = player
//     }
//     golpe(playerLostLife, playerDoDmg){
//         let = lifeValue;
//         lifeValue = playerLostLife.player.health - playerDoDmg.player.attack
//         return playerLostLife.player.health = let
//     }

// }
// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------

//Declaro las instancias de los personajes
let player1 = new Character('Aída', 1000, 350);
let player2 = new Character('Siete', 1000, 350);


//Guardo los personajes en un diccionario
let SaveCharacters = {
    1: player1,
    2: player2,
}