import React from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='Footer'>
        <a to="chart" target="_blank" href="https://github.com/"><Botones id='btn-header-footer' nombre="Github"/></a>
        <a to="chart" target="_blank" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D"><Botones id='btn-header-footer' nombre="Twitter"/></a>
        <a to="chart" target="_blank" href="https://www.linkedin.com/login/es"><Botones id='btn-header-footer' nombre="Linkedin"/></a>
        <NavLink to='/RickandMorty'><Botones id='btn-header-footer' nombre="RickAndMorty"/></NavLink>
        <NavLink to='/EnvioEmail'><Botones id='btn-header-footer' nombre="Envio Email"/></NavLink>
    </div>
  )
}
