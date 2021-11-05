import React, { useState } from 'react';
import Layout from './layout/Layout';
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import IndexAdmin from './pages/admin/Index';
import Usuarios from './pages/admin/usuarios/Index';
import LayoutAdmin from './layout/LayoutAdmin';
import UsuarioGenerico from './pages/admin/usuarios/UsuarioGenerico';
import { UserContext } from './context/user';
import { DarkContext } from './context/dark';
import Configuracion from './pages/Configuracion';

function App() {
  const [userData, setUserData] = useState({ nombre: 'Daniel', suma: 0 });
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<Index />} />
              <Route path='contacto' element={<Contacto />} />
              <Route path='configuracion' element={<Configuracion />} />
            </Route>
            <Route path='/admin' element={<LayoutAdmin />}>
              <Route path='' element={<IndexAdmin />} />
              <Route path='usuarios' element={<Usuarios />} />
              <Route path='usuarios/:nombreusuario' element={<UsuarioGenerico />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
