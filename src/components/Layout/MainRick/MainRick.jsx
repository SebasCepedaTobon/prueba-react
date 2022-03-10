import React, {useState, useEffect} from 'react'

export const MainRick = () => {

      const [character, setTodos] = useState()
      const [nombre, setNombres] = useState()
      const [especie, setEspecie] = useState()
      const url = "https://rickandmortyapi.com/api/character/?name="
  
      const fetchApi = async ()=>{
          const response = await fetch("https://rickandmortyapi.com/api/character/?name="+nombre)
          const responseJSON = await response.json()
          setTodos(responseJSON.results)
          console.log(responseJSON);
      }
      const mostrar = (evento)=>{       
          setNombres(evento.target.value)
          console.log(nombre);
          if(evento.keyCode===13){
            
              fetchApi()
          } 
      }

      useEffect(()=>{
        fetchApi(url)
      },[])

    return (
      <div className="MainRick">
        <div className='contenedorInput'>
            <input autoComplete='off' id="input" type="text" onKeyDown={mostrar} required />
            <span></span>
            <label>Ingresa nombre</label>
        </div>
        
        <div className="MainCards">
        {!character ? 'Cargando...' :
          character.map((character, index)=>{
            return(
              <div key={index} className='cards'>
                  <img className='img-rickand' src={character.image} alt=""/>
                  <p className='nombreRick'>{character.name}</p>
                  <p className='specieRick'>{character.species}</p>
              </div>
            )
          })  
        }
        </div>
      </div>
    );
}
