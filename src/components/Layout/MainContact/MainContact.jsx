import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const MainContact = () => {


    const[state, setState] = useState({
        form:{
            "username":"",
            "password":"",
        },
        error:false,
        errorMsg:""
    })

    const controladorSubmit=(e)=>{
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
            error:false,
            errorMsg:"Ingreso exitoso"
        })
    }

    const controladorBoton=()=>{
        let url = "https://backend-edw.herokuapp.com/login"
        axios.post(url, state.form)
        .then(response => {
            console.log(response);
            if(response.data.status === "ok"){
                
            }else{
                setState({
                    error:true,
                    errorMsg:response.data.Message
                })
            }
            alertaC()
        }).catch(error => {
            console.log(error);
            setState({
                error:true,
                errorMsg:"Error al conectar con el API"
            })
        })
    }

  return (
    <div className='MainContact'>
        <div className='center'>
            <h1>Login</h1>
            <form onSubmit={controladorSubmit}>
                <div className='txt_field'>
                    <input type="text" name='username' autoComplete='off' onChange={controladorChage} required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div autocomplete="off" className="txt_field">
                    <input type="password" name='password'   required autoComplete='off' onChange={controladorChage} />
                    <span></span>
                    <label>Contraseña</label>
                </div>
                <div className='btns-login'>
                <div className='contenedorEnviar'>
                    <input type="submit" value="Ingregar" onClick={controladorBoton}/>
                    {/* <Botones id='btn-ingresar' value="Iniciar sesión" nombre="Ingresar"/> */}
                </div>
                <div className='contenedorLoginRegistro'>
                    <p>¿No tienes cuenta?</p>
                    <NavLink className='p' to='/Registro'><p>Registrate</p></NavLink>
                </div>
                </div>
                <div className="signup_link">
                </div>
                {state.error === true &&
                <div className='alerta'>
                    <p>{state.errorMsg}</p>
                </div>
                }
            </form>
        </div>
    </div>
  )
}
