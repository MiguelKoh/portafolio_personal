import foto from "../assets/images/foto.png"
import '../css/about.css'
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { display } from "@splidejs/splide/src/js/utils"
import iconReact from "../assets/images/frameworks/iconReact.png"
import iconBootrastrap from "../assets/images/frameworks/iconBootstrap.png"
import iconFirebase from "../assets/images/frameworks/iconFirebase.png"
import iconGit from "../assets/images/frameworks/iconGit.png"
import iconTailwind from "../assets/images/frameworks/iconTailwind.png"
import iconoJavascript from "../assets/images/frameworks/iconJavascript.png"

function About() {
  
  const SlidesImages = [
    {src:iconReact, alt:"icono React" },
    {src:iconBootrastrap, alt:"icono bootstrap"},
    {src: iconFirebase, alt:"icono firebase"},
    {src:iconGit, alt:"icono git" },
    {src:iconoJavascript, alt:"icono javascript"},
    {src:iconTailwind, alt:"icono tailwind"}
  ]

  return (
    <section className='about_section' id='about'>
      <div className='container'>
      <h2 className='section_title' data-number="1">Acerca de mí</h2>
      <div className='about'>
        <div className='about_data'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis, architecto quia commodi deleniti ullam perferendis, nulla repellat voluptatum accusantium, consequuntur quod ipsa minus. Ipsam quas in laudantium beatae quaerat!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia numquam corrupti officia quo id, saepe molestiae repellendus est minima autem recusandae aut aspernatur quaerat quos accusamus alias laborum blanditiis illum!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nihil maiores quae minima dolorum enim iste nisi ullam eveniet excepturi. Blanditiis, id! Eligendi cum eius, voluptas inventore ratione exercitationem placeat!.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicingu.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div className='about_photo'>
          <img src={foto} className="photo" alt="foto-de-perfil" />
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
                <li>Codeigniter 4</li>
                <li>Firebase</li>
                <li>Wordpress</li>
              </ul>
              </div>
      
      <div className="container_carousel">
      <div className="slider_container">
           <Splide
                aria-label="Skills List"
                options={{
                  type: "loop",
                  gap: "2rem",
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