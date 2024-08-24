import '../css/hero.css'
import man from '../assets/images/man_opt.png'
import SocialLink from './SocialLink';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import energy from "../assets/images/energia2_opt.png"
import logo2 from "../assets/images/v0_opt.png"
import { MdAlternateEmail } from "react-icons/md";

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
          <div className="container_img">
            <img src={man} className="man" alt="man" />
            <img src={energy} className="energy" alt="man" />
            <img src={logo2} className="white_halo" alt="logo2" />
          </div>
        </div>
        <div className="hero_links">
            <a href="#about" className='btn_primary'>Conoce más</a>
          <div className="social_links">
            <SocialLink link={"https://github.com/MiguelKoh"} arialabel={"Github"} icon={<FiGithub/>}/>
            <SocialLink link={"https://www.linkedin.com/"} arialabel={"Linkedin"} icon={<SlSocialLinkedin/>}/>
            <SocialLink link={"https://wa.me/529994090432"} arialabel={"Whatsapp"} icon={<ImWhatsapp/>}/>
            <SocialLink link={"mailto:miguelkohavila@gmail.com"} arialabel={"correo"} icon={<MdAlternateEmail/>}/> 
          </div>
        </div>
        <div className="top_left_edges"></div>
        <div className="bottom_right_edges"></div>
      </div>
    </section>
  );
}

export default Hero