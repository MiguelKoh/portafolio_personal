import foto from "../assets/images/foto.png"
import '../css/about.css'
import reactImage from '../assets/images/tecnologias/react.png'
import bootstrapImage from '../assets/images/tecnologias/bootstrap.png'
import firebaseImage from '../assets/images/tecnologias/firebase.png'
import gitImage from '../assets/images/tecnologias/git.png'
import githubImage from '../assets/images/tecnologias/github.png'
import tailwindImage from '../assets/images/tecnologias/tailwind.png'
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { display } from "@splidejs/splide/src/js/utils"

function About() {
  
  const SlidesImages = [
    {imagen:reactImage, alt:"Image react"},
    {imagen:bootstrapImage, alt:"image bootstrap"},
    {imagen:firebaseImage, alt:"image firebase"},
    // {imagen:gitImage, alt:"image git"},
    // {imagen:githubImage, alt:"image github"},
    {imagen:tailwindImage, alt:"image tailwind"}
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
                  gap: "1.5rem",
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
                    SlidesImages.map((item,index)=>{
                      return (
                        <SplideSlide key={index}>
                        <img src={item.imagen} alt={item.alt} className="slides_images"/>
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