import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { MainAboutUs } from '../../Layout/MainAboutUs/MainAboutUs'

export const AboutUs = () => {
  return (
    <div className='body'>
        <Header/>
        <MainAboutUs/>
        <Footer/>
    </div>
  )
}
