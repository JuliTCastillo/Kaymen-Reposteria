const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
let mensajePedido = "Quiero una "; 

formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    /* Obtenemos los datos de los controles */
    let salsa = document.getElementById("Salsa").value;
    let decoracion = document.getElementById("Decoracion").value;
    let relleno = document.getElementById("Relleno").value;
    mensajePedido = mensajePedido + "Tarta"
    /* Validamos que el dato no este vacio */
    if(relleno != ""){
        switch(relleno){
            case "CP":
                mensajePedido = mensajePedido + " que tenga como relleno crema pastelera";
                break;
            case "SDF":
                mensajePedido = mensajePedido + " que tenga como relleno una salsa de fruta de (Elegir fruta)";
                break;
            case "Otro":
                mensajePedido = mensajePedido + " que tenga otro relleno (Detallar cual)";
                break;
        }
    }
    if(salsa != ""){
        mensajePedido = mensajePedido + ", salsa de " + salsa;
    }
    if(decoracion != ""){
        mensajePedido = mensajePedido + " y una decoración con " + decoracion;
    }
    localStorage.setItem("pedido", mensajePedido);
    document.location.href = "../seccion/pedido.html";
});

