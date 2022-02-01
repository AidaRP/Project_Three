
//-------------------------------------------- FUNCIÓN PARA SELECCIONAR CHARACTER ---------------------------------------------------------




//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------

class Character{
    constructor(nick, health, attack){
        this.nick = nick,
        this.health = health,
        this.attack = attack
    }
        golpe(dmg){
            this.health= this.health-dmg;
        }    
}



// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------

let Number1 = new Character('Aída', 1000, 350);
let Number2 = new Character('Siete', 1000, 350);
