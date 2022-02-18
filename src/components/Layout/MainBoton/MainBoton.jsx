import React, {useState,useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import ImagenBtn1 from "../../../assets/Imagen/imagenBtn1.jpg"
import ImagenBtn2 from "../../../assets/Imagen/imagenBtn2.jpg"


export const MainBoton = () => {

    const [cambio, setCounter] = useState(true)
    const cambioImg = () => {setCounter(!cambio)

    }
useEffect(() => {
        const imgbtn1 = document.getElementById('imagenBtn1')
        const imgbtn2 = document.getElementById('imagenBtn2')
        const btn = document.getElementById('btnCambio')
        if(cambio === true){
            imgbtn1.classList.remove('imagenBtn1')
            imgbtn1.classList.add('imagenBtn3')
            imgbtn2.classList.remove('imagenBtn2')
            imgbtn2.classList.add('imagenBtn4')
            btn.classList.remove('btnImg2')
            btn.classList.add('btnImg3')
            btn.textContent="Cambio"
        }else{
            imgbtn1.classList.remove('imagenBtn3')
            imgbtn1.classList.add('imagenBtn1')
            imgbtn2.classList.remove('imagenBtn4')
            imgbtn2.classList.add('imagenBtn2')
            btn.classList.remove('btnImg3')
            btn.classList.add('btnImg2')
            btn.textContent="Original"
        }
    
    },[cambio]);
      


    
  return (
    <div className='cambioImg'>
        <div className="contenedorImgs">
        <Imagenes id="imagenBtn1" className="imagenBtn1" url={ImagenBtn1}/>
        <Imagenes id="imagenBtn2" className="imagenBtn2" url={ImagenBtn2}/>
        </div>
        <Botones id='btnCambio' evento={cambioImg} classe='btnImg2' nombre='CAMBIOS' />
        
    </div>
  )
}
