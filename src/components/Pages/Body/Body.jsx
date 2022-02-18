import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Main } from '../../Layout/Main/Main'

export const Body = () => {
  return (
    <div className='body'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}
