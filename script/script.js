const btnPedido = document.getElementById("btnPedido");

btnPedido.addEventListener('click', ()=>{
    console.log("se realizo un pedido");
})

let pedidos = []; // Array de pedidos
let clientes = [];
let numeroCliente = 0;
const formPedido = document.getElementById("frmPedido"); 

formPedido.addEventListener('submit', (event) => { //Evento del formulario
    event.preventDefault(); //Le sacamos el default
    /*obtenemos los datos del Pedido*/
    let seleccioPedido = document.getElementById("seleccionPedido").value;
    let sabor = document.getElementById("seleccionSabor").value;
    let unidades = document.getElementById("introducirCantidad").value;
    let mensaje = document.getElementById("mensaje").value;

    /*obtenemos los datos del cliente*/
    let nom = document.getElementById("introducirName").value;
    let ape = document.getElementById("introducirApellido").value;
    let mail = document.getElementById("introducirMail").value;
    let tel = document.getElementById("introducirTelefono").value;

    //llamamos al constructor de clase Cliente
    const cliente = new Cliente(nom, ape, mail, tel);
    cliente.visualizarCliente();
    clientes.push(); //añadimos el cliente al array
    console.log(clientes);

    //llamamos al constructor de la clase Pedido
    const pedido = new Pedido(seleccioPedido, sabor, unidades, mensaje); 
    pedido.mostrarPedido()

    pedidos.push(pedido); //Agregamos en el array
    console.log(pedidos); //Visualizamos el array por consola
    formPedido.reset(); //reseteamos el formulario
});

class Cliente{
    constructor(nombre, apellido, mail, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
    }
    visualizarCliente(){
        numeroCliente += 1;
        console.log("Cliente *********************************** N°"+ numeroCliente + "\nDatos\n"+
                    "Nombre: " + this.nombre + " Apellido: " + this.apellido + "\n" + 
                    "Contacto\n" +"Mail: " + this.mail + " telefono: " + this.telefono);
    }
}

class Pedido{
    constructor(seleccion, sabor, unidades, mensaje){
        this.seleccionPedido = seleccion;
        this.saborPedido = sabor;
        this.unidadPedido = unidades;
        this.mensaje = mensaje;
    }
    mostrarPedido(){
        console.log("Cliente *********************************** N°"+ numeroCliente);
        console.log("Se pidio " + this.unidadPedido + " de " + this.seleccionPedido + " con sabor " + this.saborPedido + "\nAclaraciones\n" + this.mensaje);
    }
}