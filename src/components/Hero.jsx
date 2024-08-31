import '../css/hero.css'
import man from '../assets/images/man_opt.png'
import SocialLink from './SocialLink';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import energy from "../assets/images/energia2_opt.png"
import logo2 from "../assets/images/v0_opt.png"
import { MdAlternateEmail } from "react-icons/md";
import {useTranslation} from "react-i18next"

function Hero() {
  const [t]= useTranslation("global");

  return (
    <section className="hero_section">
      <div className="container hero_data">
        <div className="container_data">
          <h1 className="hero_title" data-aos="fade-right" data-aos-delay="800">{t("section_hero.title_1")}</h1>
          <h2 className="hero_name" data-aos="fade-right" data-aos-delay="1000">Miguel Elías</h2>
          <h3 className="hero_subtitle" data-aos="fade-right" data-aos-delay="1200">
          {t("section_hero.title_3")}
          </h3>
          <p className="hero_description" data-aos="fade-right" data-aos-delay="1400">
          {t("section_hero.final_paragraph")}
          </p>
        </div>
        <div className="container_foto">
          <div className="container_img">
            <img src={man} className="man" alt="man" data-aos="zoom-in-left" />
            <img src={energy} className="energy" alt="energy"/>
            <img src={logo2} className="white_halo" alt="logo2" />
          </div>
        </div>
        <div className="hero_links" data-aos="fade-up" data-aos-offset="50" data-aos-delay="1600">
            <a href="#about" className='btn_primary'>{t("section_hero.btnPrimary")}</a>
            <a href="../assets/miguel_koh_avila_cv.pdf" target='_blank' className='btn_primary goToCV'>{t("section_hero.btn_cv")}</a>
          <div className="social_links">
            <SocialLink link={"https://github.com/MiguelKoh"} arialabel={"Github"} icon={<FiGithub/>}/>
            <SocialLink link={"https://www.linkedin.com/in/miguel-elias-koh-avila-557972216/"} arialabel={"Linkedin"} icon={<SlSocialLinkedin/>}/>
            <SocialLink link={"https://wa.me/529994090432"} arialabel={"Whatsapp"} icon={<ImWhatsapp/>}/>
            <SocialLink link={"mailto:miguelkohavila@gmail.com"} arialabel={"correo"} icon={<MdEmail/>}/> 
          </div>
        </div>
        <div className="top_left_edges" data-aos="fade-down" data-aos-delay="1600"></div>
        <div className="bottom_right_edges" data-aos="fade-down" data-aos-delay="1600"></div>
      </div>
    </section>
  );
}

export default Hero