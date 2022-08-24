const section = document.getElementById("mostrarProducto");
const producto = document.getElementById("CantidadProducto");

fetch('../Json/producto.json') // * ubicamos nuestro archivo Json
.then(response => response.json())//*Pasamos los productos a objeto
.then(producto => { // * Visualizamos
    producto.forEach((elemento, indice) => {
        let cantidad = 0; // * sirve para dar las unidades del producto 
        switch(indice){
            case 0: //Verificamos si existe un dato con la id 
                localStorage.getItem("pastel") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("pastel")), cantidad = cantidad.length);
            break;
            case 1: //Verificamos si existe un dato con la id 
                localStorage.getItem("Tarta") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("Tarta")), cantidad = cantidad.length);
            break;
            case 2: //Verificamos si existe un dato con la id 
                localStorage.getItem("cupcake") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("cupcake")), cantidad = cantidad.length);
            break;
            case 3: //Verificamos si existe un dato con la id 
                localStorage.getItem("desayunos") == null ? cantidad = 0 : cantidad = localStorage.getItem("desayunos");
            break;
            case 4: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice); 
            break;
            case 5: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice);
            break;
            case 6: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice);
            break;
        }
        section.innerHTML += `
        <div class="col d-flex justify-content-sm-center" id="producto${indice}">
            <div>
                <h3 class="p-0 T">${elemento.nombre}</h3>
                <div class="d-flex ">
                    <img src="../Fotos/${elemento.img}" alt="imgProducto" width="80" height="80">
                    <div class="row m-3 text-center">
                        <p>Precio</p>
                        <p>$${elemento.precio}</p>
                    </div>
                    <div class="row m-3 text-center">
                        <p>Unidades</p>
                        <input class="m-auto text-center" type="number" disabled="disabled" value="${cantidad}" id="clave${indice}" style= "width:50px"></input>
                    </div>
                    <div class="row m-3 text-center">
                        <p>Precio por unidades</p>
                        <p id="precio${indice}">${cantidad*elemento.precio}</p>
                    </div>
                    <div class="m-auto">
                        <button class="btn btn-danger btnEliminar" id="btn${indice}" onClick="GFG_click(this.id)">Eliminar</button>
                    </div>
                </div>
                
            </div>
        </div>
        `;
    });
})
// ? Funcion para eliminar productos
// Todo : Sirve para obtener la id e indices del producto especifico
function GFG_click(clicked) { 
    let ids = clicked; // * Cuando le damos click a un boton obtenemos la id
    // * Lo importante es poder obtener el indice que se le asigno al boton
    let indice = ids.substring(ids.length, ids.length-1); // * obtenemos la ultima letra
    // * manipulamos los inputs y parrafo
    let unidades = document.getElementById(`clave${indice}`); // * Obtenemos el valor del input de Unidades
    let u = unidades.value; // * Guardamos su valor en una variable
    unidades.value = 0; // * le cambiamos el valor por cero y lo mismo con el parrafo Precio
    document.getElementById(`precio${indice}`).innerText = 0;
    producto.value = parseInt(localStorage.getItem("productos")) - u;
    /* Actualizamos el dato */
    localStorage.setItem("productos", producto.value);
} 

function validarLugar(indice){
    let pedidoPastel = JSON.parse(localStorage.getItem("porcionPastel"));
    let u = 0;
    if(pedidoPastel != null){
        pedidoPastel.forEach((element)=>{
            element.clave === indice && (u = element.unidad);
        })
    }
    return u;
}
