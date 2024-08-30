import { style } from "@splidejs/splide/src/js/utils"
import { useEffect,useState } from "react"


function JobsTable({jobs}) {
//  console.log(jobs)
  const [trabajo, setTrabajo] = useState(0)

 
  return (
    <div className="jobs_table">
            <div className="workplaces">
              {jobs.map((job)=>{
                return(
                    <button key={job.id}
                     onClick={()=>setTrabajo(job.id)}
                     className={`${job.id === trabajo ? "button_selected":""}`}
                    >
                      {job.establecimiento}
                      </button>
                )
              })}
              <div className="lineJobs" style={{transform:`translateY(calc(${trabajo}*3rem))`}}></div>
            </div>

      { jobs.map( ( job ) => {
       if(trabajo === job.id) {
        return (
          <div key={job.id} className="jobs_activities">
            <div className="job_title_container">
            <h3 className="job_title">{ job.puesto }</h3>
            <span>-</span>
            <a href={job.urlEmpresa} target="_blank">{job.establecimiento}</a>
            </div>
            <p className="range">{ job.periodo }</p>
            <ul>
              { job.actividades.map( ( actividad,index ) =>
              {
                return (
                  <li key={index}>{ actividad }</li>
                )
              } ) }
            </ul>
          </div>
        )
       }


      

      } ) 
      
      }





          </div>
  )
}

export default JobsTable