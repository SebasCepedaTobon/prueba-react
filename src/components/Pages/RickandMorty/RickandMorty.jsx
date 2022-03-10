import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { MainRick } from '../../Layout/MainRick/MainRick'


export const RickandMorty = () => {
  return (
    <div className='body'>
        <Header/>
        <MainRick/>
        <Footer/>
    </div>
  )
}
