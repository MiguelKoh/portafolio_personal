import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';


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

  const keysID = {
    service_id: import.meta.env.VITE_APP_YOUR_SERVICE_ID,
    template_id: import.meta.env.VITE_APP_YOUR_TEMPLATE_ID,
    public_key: import.meta.env.VITE_APP_YOUR_PUBLIC_KEY

  }

  const onSubmit = (data) => {
    
    const emailData = {
      user_name: data.nombre,
      user_email: data.correo,
      subject: data.asunto,  
      message: data.mensaje
    };
  
    emailjs.send(keysID.service_id, keysID.template_id, emailData, keysID.public_key)
      .then(() => {
        console.log('SUCCESS!');
        reset();
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };
  

  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text"  placeholder="Nombre" {...register("nombre")} autoComplete="off"/>
        {errors.nombre && (
           <span className="errors">{errors.nombre.message}</span>
         )}

        <input type="email" placeholder="Tu correo" {...register("correo")} autoComplete="off"/>
        {errors.correo && (
           <span className="errors">{errors.correo.message}</span>
         )}

        <input type="text" placeholder="Asunto" {...register("asunto")} autoComplete="off"/>
        {errors.asunto && (
           <span className="errors">{errors.asunto.message}</span>
         )}
        
        <textarea placeholder="Mensaje" {...register("mensaje")} autoComplete="off"></textarea> 
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