const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
let mensajePedido = "Quiero una tarta"; 
formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
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
    /*Guardamos la seleccion en el localStorage*/
    localStorage.setItem("pedido", mensajePedido);
    /*Redirecionamos al usuario a pedidos.html*/
    document.location.href = "../seccion/pedido.html";
});

