import React from 'react'
import { Botones } from '../../UI/Botones/Botones'


export const MainContact = () => {
  return (
    <div className='MainContact'>
        <div className='center'>
            <h1>Login</h1>
            <form method="post">
                <div className='txt_field'>
                    <input type="text" required/>
                    <span></span>
                    <label>Nombre</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Correo Electronico</label>
                </div>
                <div className='txt_field'>
                    <input type="text" required/>
                    <span></span>
                    <label>Mensaje</label>
                </div>
                <div className='contenedorEnviar'>
                    <Botones id='btn-header-footer' nombre="Enviar"/>
                </div>
                <div className="signup_link">
                </div>
            </form>
        </div>
    </div>
  )
}
