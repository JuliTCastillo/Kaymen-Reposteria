const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
const producto = document.getElementById("CantidadProducto");

let pastel = [];
formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    let mensajePedido = "Quiero un pastel"; 
    /* Obtenemos los datos de los controles */
    let crema = document.getElementById("Crema").value;
    let bizcochuelo = document.getElementById("Bizcochuelo").value;
    let decoracion = document.getElementById("Decoracion").value;
    let relleno = document.getElementById("Relleno").value;
    /* Validamos que el dato no este vacio */
    bizcochuelo != "" && (mensajePedido += ` de  ${bizcochuelo}`);
    crema != "" && (mensajePedido += ` con crema ${crema}`);
    if(relleno != ""){
        switch(relleno){
            case "DDL":
                mensajePedido += " con un relleno de dulce de leche";
                break;
            case "CCD":
                mensajePedido += " con un relleno de crema con durazno";
                break;
            case "Otro":
                mensajePedido += " con " + relleno + " relleno";
                break;
        }
    }
    decoracion != "" && (mensajePedido +=` y una decoración con ${decoracion}`);


    /* Guardamos el mensaje en un array */
    pastel.push(mensajePedido);
    /*Guardamos la seleccion en el localStorage*/
    localStorage.setItem("pastel",JSON.stringify(pastel) );
    /* Obtenemos la cantidad de producto y le sumamos uno */
    producto.value = parseInt(localStorage.getItem("productos")) + 1;
    /* Actualizamos el dato */
    localStorage.setItem("productos", producto.value);
    
    /*Redirecionamos al usuario a pedidos.html*/
    // document.location.href = "../seccion/pedido.html";
});

