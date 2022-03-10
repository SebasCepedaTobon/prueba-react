import axios from 'axios'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const MainRegistro = () => {

    const [state, setState] = useState({
        form:{
            "name":"",
            "username":"",
            "password":"",           
        },
        error:false,
        errorMensaje:""
    })

    const controladorSubmit = (e)=>{
        e.preventDefault()
    }

    const controladorChage = async (e)=>{
        await setState({
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        })
    }

     const alertaC = ()=>{
        setState({
           error:true,
            errorMensaje:"Registro exitosoooooo"
       })
    }

    const controladorBoton=()=>{
        let url ="https://backend-edw.herokuapp.com/usuario"
        axios.post(url, state.form)
        .then(response =>{
            if(response.data.status === "ok"){
                alertaC()
            }else{
                setState({
                    error:true,
                    errorMensaje:response.data.Message
                })
            }
        }).catch(error=>{
            console.log(error);
            setState({
                error:true,
                errorMensaje:"Error al conectar con el API"
            })
        })
    }

  return (
    <div className='MainContact' onSubmit={controladorSubmit}>
        <div className='center'>
            <h1>Registro</h1>
            <form method="post">
                <div className='txt_field'>
                    <input type="text" name='name' onChange={controladorChage} required/>
                    <span></span>
                    <label>Nombre</label>
                </div>
                <div className='txt_field'>
                    <input type="email" name='username' onChange={controladorChage} required/>
                    <span></span>
                    <label>Correo Electronico</label>
                </div>
                <div autocomplete="off" className="txt_field">
                    <input type="text"  required autoComplete='off' name='password' onChange={controladorChage}/>
                    <span></span>
                    <label>Contraseña</label>
                </div>
                {/* <div autocomplete="off" className="txt_field">
                    <input type="text"  required autoComplete='off'/>
                    <span></span>
                    <label>Confirmar Contraseña</label>
                </div> */}
                <div className='btns-login'>
                <div className='contenedorEnviar'>
                <input type="submit" value="Registrar" onClick={controladorBoton}/>
                </div>
                <div className='contenedorLoginRegistro'>
                    <p>¿Ya tienes cuenta?</p>
                    <NavLink className='p' to='/Contact'><p>Iniciar sesión</p></NavLink>
                </div>
                </div>
                <div className="signup_link">
                </div>
                {/* {state.error === true &&
                    <div className='alerta'>
                        <p>{state.errorMensaje}</p>
                    </div>
                } */}
            </form>
        </div>        
    </div>
  )
}
