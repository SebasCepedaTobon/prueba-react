import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import Imagen from "../../../assets/Imagen/Imagen.jpeg"
import { MainContador } from '../MainContador/MainContador'



export const Main = () => {
  return (
    <div className='Main'>
        <Imagenes url={Imagen}/>       
    </div>
  )
}
