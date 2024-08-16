import { useEffect,useState } from "react"


function JobsTable({jobs}) {
 console.log(jobs)
  const [trabajo, setTrabajo] = useState(1)

 


  return (
    <div className="jobs_table">
            <div className="workplaces">
              {jobs.map((job)=>{
                return(
                    <button key={job.id}
                     onClick={()=>{setTrabajo(job.id)}}
                    >
                      {job.establecimiento}
                      </button>
                )
              })}
            </div>

      { jobs.map( ( job ) => {
       if(trabajo === job.id) {
        return (
          <div key={job.id} className="jobs_activities">
            <h3 className="job_title">{ job.puesto }</h3>
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