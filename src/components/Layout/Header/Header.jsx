import React from 'react'
import { NavLink } from 'react-router-dom'
import {Botones} from '../../UI/Botones/Botones'


export const Header = () => {
  return (
    <div className='Header'>
      <NavLink to='/'><Botones id='btn-header-footer' nombre="Home"/></NavLink>
      <NavLink to='/AboutUs'><Botones id='btn-header-footer' nombre="About Us"/></NavLink>
      <NavLink to='/Contact'><Botones id='btn-header-footer' nombre="Contact"/></NavLink>
      <NavLink to='/Contador'><Botones id='btn-header-footer' nombre="Contador"/></NavLink>
    </div>
  )
}
