import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { MainContador } from '../../Layout/MainContador/MainContador'



export const Contador = () => {
  return (
    <div className='body'>
        <Header/>
        <MainContador/>
        <Footer/>
    </div>
  )
}
