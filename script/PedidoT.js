const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
const producto = document.getElementById("CantidadProducto");

let tarta = []
formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    let mensajePedido = "Quiero una tarta"; 
    /* Obtenemos los datos de los controles */
    let salsa = document.getElementById("Salsa").value;
    let decoracion = document.getElementById("Decoracion").value;
    let relleno = document.getElementById("Relleno").value;
    /* Validamos que el dato no este vacio */
    if(relleno != ""){
        switch(relleno){
            case "CP":
                mensajePedido += " que tenga como relleno crema pastelera";
                break;
            case "SDF":
                mensajePedido += " que tenga como relleno una salsa de fruta de (Elegir fruta)";
                break;
            case "Otro":
                mensajePedido += " que tenga otro relleno (Detallar cual)";
                break;
        }
    }
    salsa != "" &&  (mensajePedido +=` que tenga una salsa de ${salsa}`);
    decoracion != "" && (mensajePedido +=` y una decoración con ${decoracion}`);

    /* Guardamos el mensaje en un array */
    tarta.push(mensajePedido);
    /*Guardamos la seleccion en el localStorage*/
    localStorage.setItem("Tarta",JSON.stringify(tarta));
    /* Obtenemos la cantidad de producto y le sumamos uno */
    producto.value = parseInt(localStorage.getItem("productos")) + 1;
    /* Actualizamos el dato */
    localStorage.setItem("productos", producto.value);
    /*Redirecionamos al usuario a pedidos.html*/
    // document.location.href = "../seccion/pedido.html";
});

