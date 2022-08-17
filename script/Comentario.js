const btnEnviar = document.getElementById("btnEnviar");
const btnVer = document.getElementById("btnVer");
const frmPedido = document.getElementById("frmMensaje");
const verMensaje = document.getElementById("scVer");
let comentarios = [];
class Comentario {
    constructor(nombre, mail, asunto, mensaje) {
        this.nombre = nombre;
        this.mail = mail;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}
btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    Swal.fire({
        title: 'Genial!',
        text: 'Tu comentario ha sido enviado',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
    frmPedido.reset();
})

btnVer.addEventListener('click', (event) => {
    event.preventDefault();
    let nom = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let msg = document.getElementById("message").value;

    const comentario = new Comentario(nom, mail, asunto, msg);
    comentarios.push(comentario);

    comentarios.forEach(mensaje => {
        verMensaje.innerHTML += `
        <div class="Mensaje" id="Comentario${mensaje.id}">
            <div class="contenido">
                <p class="card-text">Nombre: ${mensaje.nombre}</p>
                <p class="card-text">Mail: ${mensaje.mail}</p>
                <p class="card-text">Asunto: ${mensaje.asunto}</p>
                <p class="card-text">Mensaje: <br>${mensaje.mensaje}</p>
            </div>
        </div>`
    })
    comentarios.pop();
})