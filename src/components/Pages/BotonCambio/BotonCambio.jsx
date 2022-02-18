import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { MainBoton } from '../../Layout/MainBoton/MainBoton'


export const BotonCambio = () => {
  return (
    <div className='body'>
        <Header/>
        <MainBoton/>
        <Footer/>
    </div>
  )
}
