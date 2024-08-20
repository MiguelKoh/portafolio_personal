import '../css/projects.css'
import CardProject from './CardProject'
import landing from '../assets/images/captura_landing.png'
import TechName from "./TechName";
function Projects() {
  return (
    <div className="section_projects">
        <div className='container'>
            <h2 className='section_title' data-number="3">Proyectos</h2>
            <div className='container_grid_projects'>
            <CardProject
                extlink="https://miguelkoh.github.io/landing-portafolio/"
                imgsrc={landing}
                repolink="https://github.com/MiguelKoh/landing-portafolio"
                name="Landing Santamar"
                description={"Es una landing page que trabaje anteriormente pero decidi replicar en react"}
                techname={
                  <>
                    <TechName name="React" />
                    <TechName name="Tailwind" />
                    <TechName name="React-router" />
                    <TechName name="Swiper" />
                  </>
            }
          />
          <CardProject
                extlink="https://miguelkoh.github.io/landing-portafolio/"
                imgsrc={landing}
                repolink="https://github.com/MiguelKoh/landing-portafolio"
                name="Landing Santamar"
                description={"Es una landing page que trabaje anteriormente pero decidi replicar en react"}
                techname={
                  <>
                    <TechName name="React" />
                    <TechName name="Tailwind" />
                    <TechName name="React-router" />
                    <TechName name="Swiper" />
                  </>
            }
          />

            
            </div>
        </div>
        
    </div>
  )
}

export default Projects