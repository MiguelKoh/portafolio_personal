import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import {useTranslation} from "react-i18next"

function Formulario() {

const [t]= useTranslation("global");

const [enviado, setEnviado] = useState(false)
const [cargando, setCargando] = useState(false)

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required(t("form.field_name.required"))
    .min(3, t("form.field_name.min"))
    .max(70,t("form.field_name.max")),
    
  correo: Yup.string()
    .required(t("form.field_email.required"))
    .email(t("form.field_email.InvalidFormat")),

  asunto: Yup.string()
    .required(t("form.field_subject.required"))
    .min(3,t("form.field_subject.min"))
    .max(300,t("form.field_subject.max")),

   mensaje: Yup.string()
    .required(t("form.field_message.required"))
    .min(3,t("form.field_message.min"))
});

const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), 
  mode: "onSubmit" });

  const keysID = {
    service_id: import.meta.env.VITE_APP_YOUR_SERVICE_ID,
    template_id: import.meta.env.VITE_APP_YOUR_TEMPLATE_ID,
    public_key: import.meta.env.VITE_APP_YOUR_PUBLIC_KEY
  }

  const {service_id,template_id,public_key} = keysID

  const onSubmit = (data) => {
    reset();
    setCargando(true); // Inicia el loader

    const emailData = {
      user_name: data.nombre,
      user_email: data.correo,
      subject: data.asunto,
      message: data.mensaje,
      from_name:"Portafolio personal",
      to_name:"Miguel Koh Avila"
    };

    emailjs.send(service_id, template_id, emailData, public_key)
      .then(() => {
        setCargando(false); // Finaliza el loader
        setEnviado(true); // Muestra el mensaje de éxito
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setCargando(false); // Finaliza el loader si hay un error
      });
  };
  

  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text"  placeholder={t("form.field_name.placeholder")} {...register("nombre")} autoComplete="off"/>
        {errors.nombre && (
           <span className="errors">{errors.nombre.message}</span>
         )}

        <input type="email" placeholder={t("form.field_email.placeholder")} {...register("correo")} autoComplete="off"/>
        {errors.correo && (
           <span className="errors">{errors.correo.message}</span>
         )}

        <input type="text" placeholder={t("form.field_subject.placeholder")} {...register("asunto")} autoComplete="off"/>
        {errors.asunto && (
           <span className="errors">{errors.asunto.message}</span>
         )}
        
        <textarea placeholder={t("form.field_message.placeholder")} {...register("mensaje")} autoComplete="off"></textarea> 
        {errors.mensaje && (
           <span className="errors">{errors.mensaje.message}</span>
         )}

        <button>{t("form.btn_form")}</button>
        
        {cargando && (
           <div className="loader"></div>
         )}
        {enviado && (
           <span className="send_success">{t("form.success")}</span>
         )}
         
    </form>
    {/* <pre>
        {JSON.stringify(watch(),null,2)}
      </pre> */}

    </>
  )
}

export default Formulario