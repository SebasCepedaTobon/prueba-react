import logo from './logo.svg';
import './App.css';
import { Body } from './components/Pages/Body/Body';
import { AboutUs } from './components/Pages/AboustUs/AboutUs';
import { Contact } from './components/Pages/Contact/Contact';
import { Contador } from './components/Pages/Contador/Contador';


import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { BotonCambio } from './components/Pages/BotonCambio/BotonCambio';
import { RickandMorty } from './components/Pages/RickandMorty/RickandMorty';
import { Registro } from './components/Pages/Registro/Registro';
import { EnvioEmail } from './components/Pages/EnvioEmail/EnvioEmail';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Contact' element={<Contact/>}/>      
      <Route path='/Contador' element={<Contador/>}/>    
      <Route path='/BotonCambio' element={<BotonCambio/>}/>  
      <Route path='/RickandMorty' element={<RickandMorty/>}/> 
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/EnvioEmail' element={<EnvioEmail/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

