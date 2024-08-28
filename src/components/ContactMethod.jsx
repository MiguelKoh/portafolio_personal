
function ContactMethod({titulo = "titutlo",icono="icono",descripcion="descripcion",link="/"}) {
    return (
        <div className='method'>
            <div className='container_icon'>{icono}</div>
            <div>
                <h4>{titulo}</h4>
                <a target="_blank" href={link}>{descripcion}</a>
            </div>
        </div>
    )
}

export default ContactMethod