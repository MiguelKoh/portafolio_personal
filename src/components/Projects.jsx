import '../css/projects.css'
import CardProject from './CardProject'
import landing from '../assets/images/captura_landing_opt.jpg'
import appGastos from '../assets/images/captura_app_gastos_opt.png'
import tiendaVirtual from '../assets/images/tienda-virtual_opt.jpg'
import TechName from "./TechName";
import { useEffect } from 'react'
import {useTranslation} from "react-i18next"


function Projects() {
 
  const [t]= useTranslation("global");

  useEffect(() => {

    const callback = (entradas,observador)=>{
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
        //  console.log(entrada.target)
         const bgImageURL = entrada.target.getAttribute('data-bg')
         entrada.target.style.backgroundImage = bgImageURL;
         observador.unobserve(entrada.target)
        }
      });
    }

     const observador = new IntersectionObserver(callback,{
      root: null,
      rootMargin: '200px 0px',
      threshold: 0.1
     })

     const proyectos = document.querySelectorAll('.projects_item')

     proyectos.forEach((proyecto)=>{
      observador.observe(proyecto)
     })
  
    return () => {
      observador.disconnect()
    }
  }, [])
  

  return (
    <section className="section_projects nav_section" id="projects">
        <div className='container'>
            <h2 className='section_title' data-number="3">{t("section_projects.title")}</h2>
            <div className='container_grid_projects'>
            <CardProject
                extlink="https://miguelkoh.github.io/landing-portafolio/"
                imgsrc={landing}
                repolink="https://github.com/MiguelKoh/landing-portafolio"
                name={t("section_projects.project_santamar.title")}
                description={t("section_projects.project_santamar.description")}
                techname={
                  <>
                    <TechName name="React" />
                    <TechName name="Tailwind" />
                    <TechName name="React-router" />
                    <TechName name="Swiper" />
                    <TechName name="React Hook Form" />
                    <TechName name="i18next" />
                  </>
            }
          />
          <CardProject
                extlink="https://app-lista-gastos-d3526.web.app/iniciar-sesion"
                imgsrc={appGastos}
                repolink="https://github.com/MiguelKoh/app_lista_gastos"
                name={t("section_projects.project_app_gastos.title")}
                description={t("section_projects.project_app_gastos.description")}
                techname={
                  <>
                    <TechName name="React" />
                    <TechName name="Firebase" />
                    <TechName name="React-router" />
                    <TechName name="Styled components" />
                    <TechName name="React-day-picker"/>
                  </>
            }
          />

        <CardProject
                extlink="https://siscap.uady.mx/siscap/tienda-virtual/escolares.php"
                imgsrc={tiendaVirtual}
                repolink="https://github.com/MiguelKoh/tiendaVirtual"
                name={t("section_projects.project_prepa.title")}
                description={t("section_projects.project_prepa.description")}
                techname={
                  <>
                    <TechName name="PHP" />
                    <TechName name="JS" />
                    <TechName name="Bootstrap" />
                    <TechName name="Swiper" />
                    <TechName name="Jquery"/>
                  </>
            }
          />
            
            </div>
        </div>
        
    </section>
  )
}

export default Projects