import '../css/contacto.css'
import Formulario from './Formulario'
import { FaLocationDot } from "react-icons/fa6";
import ContactMethod from './ContactMethod';
import { MdEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { SlSocialLinkedin } from "react-icons/sl";
import {useTranslation} from "react-i18next"

function Contacto() {
  const [t]= useTranslation("global");
  return (
    <section className='contact_section nav_section' data-aos="fade-up" data-aos-delay="250" id='contact'>
        <div className="container">
            <h2 className="section_title" data-number="4">{t("section_contact.title")}</h2>
            <p className='text_contact'>{t("section_contact.paragraph")}</p>
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
                    titulo="LinkedIn"
                    descripcion={t("section_contact.linkedIn")} 
                    icono={<SlSocialLinkedin/>}
                    link={"https://www.linkedin.com/in/miguel-elias-koh-avila-557972216/"}
                  />
                  <ContactMethod 
                    titulo={t("section_contact.email")} 
                    descripcion='miguelkohavila@gmail.com' 
                    icono={<MdEmail />}
                    link={"mailto:miguelkohavila@gmail.com"}
                  />

                  <ContactMethod 
                    titulo="WhatsApp" 
                    descripcion='(+52) 999 4090 432' 
                    icono={<ImWhatsapp />}
                    link={"https://wa.me/529994090432"}
                  />

                </div>
        </div>
    </section>
  )
}

export default Contacto