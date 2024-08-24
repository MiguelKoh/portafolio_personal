import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Formulario() {

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required('Campo requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50,"El nombre debe tener maximo 50 caracteres"),
    
  correo: Yup.string()
    .required('Campo requerido')
    .email('Por favor introduce un formato de correo válido'),

  asunto: Yup.string()
    .required('Campo requerido')
    .min(3, 'El asunto debe tener al menos 3 caracteres')
    .max(100,"El asunto debe tener maximo 100 caracteres"),
   mensaje: Yup.string()
    .required('Campo requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
});

const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), 
  mode: "onSubmit" });

const onSubmit = (data)=>{
  console.log(data)
  reset();
}
  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text"  placeholder="Nombre" {...register("nombre")} autoComplete="off" required/>
        {errors.nombre && (
           <span className="errors">{errors.nombre.message}</span>
         )}

        <input type="email" placeholder="Tu correo" {...register("correo")} autoComplete="off" required/>
        {errors.correo && (
           <span className="errors">{errors.correo.message}</span>
         )}

        <input type="text" placeholder="Asunto" {...register("asunto")} autoComplete="off" required/>
        {errors.asunto && (
           <span className="errors">{errors.asunto.message}</span>
         )}
        
        <textarea placeholder="Mensaje" {...register("mensaje")} autoComplete="off" required></textarea> 
        {errors.mensaje && (
           <span className="errors">{errors.mensaje.message}</span>
         )}

        <button>Enviar mensaje</button>
    </form>
    {/* <pre>
        {JSON.stringify(watch(),null,2)}
      </pre> */}

    </>
  )
}

export default Formulario