import '../css/projects.css'
import CardProject from './CardProject'
import landing from '../assets/images/captura_landing_opt.jpg'
import appGastos from '../assets/images/captura_app_gastos_opt.png'
import tiendaVirtual from '../assets/images/tienda-virtual_opt.jpg'
import TechName from "./TechName";
function Projects() {
  return (
    <section className="section_projects nav_section" id="projects">
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
                    <TechName name="React Hook Form" />
                  </>
            }
          />
          <CardProject
                extlink="https://app-lista-gastos-d3526.web.app/iniciar-sesion"
                imgsrc={appGastos}
                repolink="https://github.com/MiguelKoh/landing-portafolio"
                name="Aplicacion de gastos"
                description={"Es una landing page que trabaje anteriormente pero decidi replicar en react"}
                techname={
                  <>
                    <TechName name="React" />
                    <TechName name="Firebase" />
                    <TechName name="React-router" />
                    <TechName name="Styled components" />
                  </>
            }
          />

        <CardProject
                extlink="https://siscap.uady.mx/siscap/tienda-virtual/escolares.php"
                imgsrc={tiendaVirtual}
                repolink="https://github.com/MiguelKoh/landing-portafolio"
                name="Tienda virtual"
                description={"Es una landing page que trabaje anteriormente pero decidi replicar en react"}
                techname={
                  <>
                    <TechName name="PHP" />
                    <TechName name="Js" />
                    <TechName name="Bootstrap" />
                    <TechName name="Swiper" />
                  </>
            }
          />
            
            </div>
        </div>
        
    </section>
  )
}

export default Projects