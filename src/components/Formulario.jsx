
function Formulario() {
  return (
    <form className="form">
        <input type="text"  placeholder="Nombre"/>
        <input type="text"  placeholder="Tu correo"/>
        <input type="text"  placeholder="Asunto"/>
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar mensaje</button>
    </form>
  )
}

export default Formulario