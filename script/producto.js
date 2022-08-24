// * Obtenemos las propiedades de los botones
const agregarD = document.getElementById("Desayuno"); //Boton Desayuno
const agregarP = document.getElementById("Porcion"); //Boton Porcion de torta
const leerMas = document.getElementById("Descripcion"); //Boton Leer más
const producto = document.getElementById("CantidadProducto"); //Input del carrito
let porcionPastel = [];

// ? Funciones de botones
// ! añadiendo desayunos al carrito
agregarD.addEventListener('click', (e) =>{
    let unidades = document.getElementById("cant");
    if(mostrarMensajeError(unidades)){
        /*Cambiamos el numero del carrito*/
        producto.value = parseInt(localStorage.getItem("productos")) + parseInt(unidades.value);
        /*Guardamos el dato en el localStorage*/
        localStorage.setItem("productos", producto.value);
        /*Guardamos la cantidad de desayunos que se pidieron*/
        localStorage.setItem("desayunos", unidades.value);
        /*Le asiganamos al input 0 unidades*/
        unidades.value = 0;
    }
})

// ! Mostrar descripción de lo que trae el desayuno
leerMas.addEventListener('click', (e)=>{
    Swal.fire({
        title: 'Descripcion',
        text: "El desayuno trae:1 jugo,3 medialunas, una taza, un torta, flores y masita secas",
    })
})

// ! añadiendo porciones de pasteles al carrito
agregarP.addEventListener('click', (e)=>{
    let unidad = document.getElementById("cantPastel");
    if(mostrarMensajeError(unidad)){
        /*Cambiamos el numero del carrito*/
        producto.value = parseInt(localStorage.getItem("productos")) + parseInt(unidad.value);
        let torta = new Pastel(clavePastel(), unidad.value, pastel.value);
        porcionPastel.push(torta);
        console.log(...porcionPastel);
        /* Guardando datos */
        localStorage.setItem("productos", producto.value);
        localStorage.setItem("porcionPastel", JSON.stringify(porcionPastel));
        /* reseteamos el input */
        unidad.value = 0;
    }
})
function clavePastel(){
    switch(pastel.value){
        case "Arcoiris": return key = 5; 
        case "SelvaNegra": return key = 4;
        case "Rogel": return key = 6;
    }
}
// TODO: Creamos una clase
class Pastel{
    constructor(clave, unidades, tipo){
        this.clave = clave;
        this.unidad = unidades;
        this.tipo = tipo;
    }
} 

// ? Funcion de validación de unidades (no se permite unidades negativas ni cero)
function mostrarMensajeError(control){
    if(control.value == "" || control.value < 1){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Veo que quieres añadir el producto pero no seleccionaste la unidad o la unidad es menor a cero',
        })
        return false;
    }
    return true;
}