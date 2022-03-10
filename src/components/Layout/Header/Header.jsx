import React from 'react'
import { NavLink } from 'react-router-dom'
import {Botones} from '../../UI/Botones/Botones'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import LOGO from "../../../assets/Imagen/logo.PNG"


export const Header = () => {
  return (
    <div className='Header'>
      <div className='contenedor-logo'>
        <Imagenes id='img-logo' url={LOGO}/>
      </div>
      <div className='menu'>
        <NavLink to='/'><Botones id='btn-header-footer' nombre="HOME"/></NavLink>
        <NavLink to='/AboutUs'><Botones id='btn-header-footer' nombre="ABOUT US"/></NavLink>
        <NavLink className='iniciosesion' to='/Contact'><Botones id='btn-header-footer' nombre="INICIO DE SESIÓN"/></NavLink>
        <NavLink to='/Contador'><Botones id='btn-header-footer' nombre="CONTADOR"/></NavLink>
        <NavLink to='/BotonCambio'><Botones id='btn-header-footer' nombre="CAMBIO"/></NavLink>
      </div>
    </div>
  )
}
