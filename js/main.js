
//-------------------------------------------------------------------- APARTADO DE FUNCIONES ------------------------------------------------------------------------------- 
const changeView = (vw_0) => {

    let fasewant = "view" + vw_0;

    
    let arrFases = ["view1", "view2", "view3", "view4"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }

    
};


const selectionCharacter = (Character) => {
    (console.log('Acabas de seleccionar a ' + Character));
}

// .innerText() esto se utiliza si queremos renderizar el texto en la vista correspondiente.

                                                                            // COMBATE
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
