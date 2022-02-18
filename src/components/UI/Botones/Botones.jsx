import React from 'react'

export const Botones = ({nombre, id, evento}) => {
  return (
    <button onClick={evento} id={id}>{nombre}</button>
  )
}
