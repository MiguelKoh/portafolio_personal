import "../css/experiencia.css" 
import JobsTable from "./JobsTable"
import jobs from "../../src/jobsData"

function Experiencia() {
  return (
    <section className="experience_section">
      <div className="container">
        <h2 className="section_title" data-number="2">Experiencia</h2>
        <div className="container_jobs">
          <JobsTable jobs={jobs}/>
        </div>
      </div>
    </section>
  )
}

export default Experiencia