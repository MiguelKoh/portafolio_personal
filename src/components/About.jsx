
import foto from "../assets/images/foto4_opt.png"
import '../css/about.css'
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import iconReact from "../assets/images/tecnologias/iconReact_opt.png"
import iconBootrastrap from "../assets/images/tecnologias/iconBootstrap_opt.png"
import iconFirebase from "../assets/images/tecnologias/iconFirebase_opt.png"
import iconGit from "../assets/images/tecnologias/iconGit_opt.png"
import iconTailwind from "../assets/images/tecnologias/iconTailwind_opt.png"
import iconoJavascript from "../assets/images/tecnologias/iconJavascript_opt.png"
import {useTranslation} from "react-i18next"

function About() {
  
  const [t]= useTranslation("global");

  const SlidesImages = [
    {src:iconReact, alt:"icono React" },
    {src:iconBootrastrap, alt:"icono bootstrap"},
    {src: iconFirebase, alt:"icono firebase"},
    {src:iconGit, alt:"icono git" },
    {src:iconoJavascript, alt:"icono javascript"},
    {src:iconTailwind, alt:"icono tailwind"}
  ]

  return (
    <section className='about_section nav_section' id='about'>
      <div className='container'>
      <h2 className='section_title' data-number="1" data-aos="fade-up">{t("section_about.title")}</h2>
      <div className='about'>
        <div className='about_data' data-aos="fade-up" data-aos-delay="100">
            <p>{t("section_about.paragraph_1")}</p>
            <p>{t("section_about.paragraph_2")}</p>
            <p>{t("section_about.paragraph_3")}</p>
            <p>{t("section_about.paragraph_4")}</p>
            <p>{t("section_about.paragraph_5")}</p>
        </div>
        <div className='about_photo'>
          <div className="container_photo" data-aos="fade-up" data-aos-delay="100">
            <img src={foto} className="photo" loading="lazy" alt="foto-de-perfil" />
            </div>
          </div>
      </div>
      <div className="container_abilities">
      <div className="technologies">
              <ul>
                <li>React js</li>
                <li>Bootstrap</li>
                <li>Tailwind css</li>
              </ul>
              <ul>
                <li>PHP</li>
                <li>Firebase</li>
                <li>Wordpress</li>
              </ul>
              <ul>
                <li>Typescript</li>
              </ul>
        </div>
      
      <div className="container_carousel">
     
      <div className="slider_container">
           <Splide
                aria-label="Skills List"
                options={{
                  type: "loop",
                  gap: "1.75rem",
                  drag: "free",
                  arrows: false,
                  pagination: false,
                  autoWidth: true,
                  autoHeight: true,
                  autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 0.65,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                  
                  {
                    SlidesImages.map((imagen,index)=>{
                      return (
                        <SplideSlide key={index}>
                        <img src={imagen.src} alt={imagen.alt} className="slides_images" />
                        </SplideSlide>)
                    })
                  }
                
              </Splide>
           </div>
           </div>
      </div>
      </div>
    </section>
  )
}

export default About
