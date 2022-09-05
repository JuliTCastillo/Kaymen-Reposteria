
let clientes = [];
let numeroCliente = 0;
const formPedido = document.getElementById("frmPedido"); 
const precio = document.getElementById("PagoTotal");
//Mostramos el total del pedido
precio.value = localStorage.getItem("PrecioTotal");

formPedido.addEventListener('submit', (event) => { //Evento del formulario
    event.preventDefault(); //Le sacamos el default

    /*obtenemos los datos del cliente*/
    const nom = document.getElementById("introducirName").value;
    const ape = document.getElementById("introducirApellido").value;
    const mail = document.getElementById("introducirMail").value;
    const tel = document.getElementById("introducirTelefono").value;

    //llamamos al constructor de clase Cliente
    const cliente = new Cliente(nom, ape, mail, tel);
    cliente.visualizarCliente();
    clientes.push(cliente); //añadimos el cliente al array
    console.log(clientes);

    /*Agregando librerias*/
    Swal.fire({
        title: 'Genial!',
        text: 'Tu pedido ha sido enviado',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
    formPedido.reset(); //reseteamos el formulario
});

class Cliente{
    constructor(nom, ape, ma, tel){
        this.nombre = nom;
        this.apellido = ape;
        this.mail = ma;
        this.telefono = tel;
    }
    visualizarCliente(){
        numeroCliente += 1;
        console.log(`Cliente *********************************** N ${numeroCliente}\nDatos\nNombre: ${this.nombre}  Apellido: ${this.apellido} \nContacto\nMail: ${this.mail} telefono: ${this.telefono}`);
    }
}