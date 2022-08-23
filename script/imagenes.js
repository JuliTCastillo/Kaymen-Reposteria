const pastel = document.getElementById("Torta");

pastel.addEventListener('click', (e)=>{
    let seleccion = pastel.value;
    switch(seleccion){
        case "Arcoiris":
            document.getElementById("pastel").src="../Fotos/tortaArcoiris.png";
            break;
        case "SelvaNegra":
            document.getElementById("pastel").src="../Fotos/tortaSelvaNegra.png";
            break;
        case "Rogel":
            document.getElementById("pastel").src="../Fotos/tortaRogel.png";
            break;
    }
})