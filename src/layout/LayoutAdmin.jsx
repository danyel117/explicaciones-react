import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const LayoutAdmin = () => {
  return (
    <div>
      <nav>Este es el navbar</nav>
      <Sidebar />
      <Outlet />
      <footer>Este es el footer</footer>
    </div>
  );
};

export default LayoutAdmin;
