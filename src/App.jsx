import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {ActualizarOrdenes} from './components/ActualizacionOrdenes';
import {CrearOrdenes} from './components/CrearOrdenes';
import {RegistrarOrdenes} from './components/RegistrarOrdenes';
import Menu from './components/Menu';


function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Menu/>
    <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/CrearOrdenes" element= {<CrearOrdenes/>}/>
        <Route path="/ActualizacionOrdenes" element= {<ActualizarOrdenes/>}/>
        <Route path="/RegistrarOrdenes" element= {<RegistrarOrdenes/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route path="/Signup" element= {<Signup/>}/>

    </Routes>
  </Router>    
       
  )
}

export default App
