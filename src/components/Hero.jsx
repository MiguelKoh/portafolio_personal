import '../css/hero.css'
import imagen from '../assets/images/foto.png'
import SocialLink from './SocialLink';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

function Hero() {
  return (
    <section className="hero_section">
      <div className="container hero_data">
        <div className="container_data">
          <h1 className="hero_title">Hola, mi nombre es</h1>
          <h2 className="hero_name">Miguel Elías</h2>
          <h3 className="hero_subtitle">
            Construyo sitios web y aplicaciones increibles
          </h3>
          <p className="hero_description">
            Soy un desarrollador web front-end y Licenciado en Tecnologías de la Información que disfruta crear conceptos fantásticos y experiencias
            digitales para la web.
          </p>
        </div>
        <div className="container_foto">
          <img src={imagen} className="foto" alt="foto" />
        </div>
        <div className="hero_links">
            <a href="" className='btn_primary'>Conoce más</a>
          <div className="social_links">
            <SocialLink link={"https://github.com/"} arialabel={"Github"} icon={<FiGithub/>}/>
            <SocialLink link={"https://www.linkedin.com/"} arialabel={"Linkedin"} icon={<SlSocialLinkedin/>}/>
            <SocialLink link={"https://wa.me/529994090432"} arialabel={"Whatsapp"} icon={<ImWhatsapp/>}/> 
          </div>
        </div>
        <div className="top_left_edges"></div>
        <div className="bottom_right_edges"></div>
      </div>
    </section>
  );
}

export default Hero