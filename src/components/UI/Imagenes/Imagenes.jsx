import React from 'react'


export const Imagenes = ({url, className, id}) => {
  return (
    <div className='divImagen'>
        <img id={id} className={className} src={url} alt="" />
    </div>
  )
}
