import React from 'react'
import Home from './Rotas/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Rotas/Login/Iniciar'
import PagForum from './Rotas/Forum e Petição/PagForum';
import PagPeticao from './Rotas/Forum e Petição/PagPeticao';
import Cadastro from './Rotas/Login/Cadastro'
import FormD from './Rotas/Forum e Petição/FormDenuncia'




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/PagForum' element={<PagForum/>} />
          <Route path='/PagPeticao' element={<PagPeticao/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
          <Route path='/FormD' element={<FormD/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
