import "../css/experiencia.css" 
import JobsTable from "./JobsTable"
import {useTranslation} from "react-i18next"

function Experiencia() {
  
  const [t]= useTranslation("global");
  const jobs = t('jobs', { returnObjects: true });

   console.log(jobs)
  return (
    <section className="experience_section nav_section" id="experience">
      <div className="container">
        <h2 className="section_title" data-number="2">{t('section_experience')}</h2>
        <div className="container_jobs">
          <JobsTable jobs={jobs}/> 
        </div>
      </div>
    </section>
  )
}

export default Experiencia