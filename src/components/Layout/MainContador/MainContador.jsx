import React, {useState,useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import Imagen3 from "../../../assets/Imagen/Imagen3.jpeg"



export const MainContador = () => {
    

    const [counter, setCounter] = useState(0)
    const suma = () => {setCounter(counter + 10)}

    const rest = () =>{setCounter(0)}
    const restar = () => {setCounter(counter - 10)}


useEffect(() => {
  const img = document.getElementById('imagenContador');
  if (counter >= 100){
    img.classList.remove('normal');
    img.classList.add('cambio');
  }else{
    img.classList.remove('cambio');
    img.classList.add('normal');
  }
},[counter]);



  return (
    <div className='MainContador'>
      <Imagenes id="imagenContador" className="normal" url={Imagen3}/>
        <div>
            <h1 className='h1'>{counter}</h1>
        </div>            
        <div className='botones'>            
            <Botones evento={restar} id='conta' nombre='-'/>
            <Botones evento={rest} id='conta' nombre='rest'/>
            <Botones evento={suma} id='conta'nombre='+'/>           
        </div>        
    </div>
      
  )
}
