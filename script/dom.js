const btnVer = document.getElementById("btnVer");
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

btnVer.addEventListener('click', () => {
    event.preventDefault();
    let nom = document.getElementById("name").value;
    let ape = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let msg = document.getElementById("message").value;

    const comentario = new Comentario(nom, ape, asunto, msg);
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
})