import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { MainContact } from '../../Layout/MainContact/MainContact'

export const Contact = () => {
  return (
    <div className='body'>
      <Header/>
      <MainContact/>
      <Footer/>
    </div>
  )
}
