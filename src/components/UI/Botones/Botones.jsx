import React from 'react'

export const Botones = ({classe, nombre, id, evento}) => {
  return (
    <button className={classe} onClick={evento} id={id}>{nombre}</button>
  )
}
