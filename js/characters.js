
//-------------------------------------------- FUNCIÓN PARA SELECCIONAR CHARACTER ---------------------------------------------------------

const selectionCharacter = () => {
    Character(onclick, addEventListener, console.log('Acabas de seleccionar a' + Character));
}

console.log(selectionCharacter)
//-------------------------------------------- APARTADO PARA LA CLASE Y SUS INSTANCIAS ---------------------------------------------------------

class Character{
    constructor(nick, health, attack){
        this.nick = nick,
        this.health = health,
        this.attack = attack
    }
            
}


// ---------------------------------------------------------------- INSTANCIAS ---------------------------------------------------------

Character1 = new Character('Aída', 1000, 350);
Character2 = new Character('Siete', 1000, 350);



