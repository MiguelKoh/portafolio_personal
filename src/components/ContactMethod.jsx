
function ContactMethod({titulo = "titutlo",icono="icono",descripcion="descripcion"}) {
    return (
        <div className='method'>
            <div className='container_icon'>{icono}</div>
            <div>
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default ContactMethod