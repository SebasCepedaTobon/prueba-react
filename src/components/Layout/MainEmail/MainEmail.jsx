import React from 'react'
import emailjs from '@emailjs/browser';

export const MainEmail = () => {
  
  const sendEmail = (event)=>{
    event.preventDefault()

    emailjs.sendForm('service_ipjote4', 'template_hqs9pdm', event.target, 't12OJ3mz_oAwsJa0Y')
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  return (
    <div className='MainContact'>
        <div className='center'>
            <h1>Contacto</h1>
            <form onSubmit={sendEmail}>
                <div className='txt_field'>
                    <input type="text" name='user_name' autoComplete='off' required/>
                    <span></span>
                    <label>Nombre</label>
                </div>
                <div className='txt_field'>
                    <input type="text" name='user_email' autoComplete='off' required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div autocomplete="off" className="txt_field">
                    <textarea name="user_mensaje" id="" cols="40" rows="7"></textarea>
                </div>
                <div className='btns-login'>
                  <div className='contenedorEnviar'>
                      <input type="submit" value="Enviar"/>
                      {/* <Botones id='btn-ingresar' value="Iniciar sesión" nombre="Ingresar"/> */}
                  </div>
                </div>
            </form>
        </div>
    </div>
  )
}
