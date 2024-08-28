import '../css/contacto.css'
import Formulario from './Formulario'
import { FaLocationDot } from "react-icons/fa6";
import ContactMethod from './ContactMethod';
import { MdEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";


function Contacto() {
  return (
    <section className='contact_section nav_section' id='contact'>
        <div className="container">
            <h2 className="section_title" data-number="4">Contacto</h2>
            <div className='contact_grid'>
                <div className='container_form'>
                  <Formulario/>
                </div>
                <div className='container_map'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119205.41207953251!2d-89.71092279740473!3d20.985856536337284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715cab450d17%3A0x5dfc155715abeb09!2zTcOpcmlkYSwgWXVjLg!5e0!3m2!1ses-419!2smx!4v1724190716249!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
            <div className="contactMethods">
                  <ContactMethod 
                    titulo='Ubicación' 
                    descripcion='Mérida, Yucatán, México' 
                    icono={<FaLocationDot/>}
                    link={"https://maps.app.goo.gl/2Czz1ndrRSpSYhea8"}
                  />
                  <ContactMethod 
                    titulo='Correo electrónico' 
                    descripcion='miguelkohavila@gmail.com' 
                    icono={<MdEmail />}
                    link={"mailto:miguelkohavila@gmail.com"}
                  />

                  <ContactMethod 
                    titulo='WhatsApp' 
                    descripcion='+52 999 4090 432' 
                    icono={<ImWhatsapp />}
                    link={"https://wa.me/529994090432"}
                  />

                </div>
        </div>
    </section>
  )
}

export default Contacto