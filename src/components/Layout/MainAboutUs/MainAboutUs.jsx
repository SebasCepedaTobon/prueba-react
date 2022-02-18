import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import Imagen1 from "../../../assets/Imagen/Imagen2.jpeg"

export const MainAboutUs = () => {
  return (
    <div className='MainAboutUs'>
        <Imagenes className="imgenAbo" url={Imagen1}/>
    </div>
  )
}