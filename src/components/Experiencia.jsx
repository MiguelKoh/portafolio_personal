import "../css/experiencia.css" 
function Experiencia() {
  return (
    <section className="experience_section">
      <div className="container">
        <h2 className="section_title" data-number="2">Experiencia</h2>
        <div className="container_jobs">
          <div className="jobs_table">
            <div className="workplaces">
              <button>Zebra</button>
              <button>Prepa 2</button>
            </div>
            <div className="jobs_activities">
                <h3 className="job_title">Practicante de programacion</h3>
                <p className="range">Octubre 2021 - Diciembre 2023 </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione hic quam deserunt amet odit, velit numquam soluta non dolorem, sint animi cum voluptate consequuntur, perferendis facilis pariatur labore nostrum.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ndis,rum!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat eius temporibus n, est!</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia