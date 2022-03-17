import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import ImagenPrueba from "../../../assets/Imagen/Imagen2.jpeg"



export const Main = () => {
  return (
    <div className='Main'>
        <Imagenes url={ImagenPrueba}/>       
    </div>
  )
}
