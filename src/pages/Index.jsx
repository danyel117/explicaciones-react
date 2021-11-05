import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDark } from '../context/dark';
import { useUser } from '../context/user';

const Index = () => {
  const { userData, setUserData } = useUser();
  const { dark } = useDark();
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log('este es un useEffect que se ejecuta solo una vez');
    console.log('info del usuario', userData);
  }, [userData]);

  useEffect(() => {
    console.log('cambió alguno de los valores y ya son:', 'valor1:', valor1, 'valor2:', valor2);
    setSuma(valor1 + valor2);
  }, [valor1, valor2]);

  return (
    <div className={`container ${dark ? 'fondo-oscuro' : 'fondo-claro'}`}>
      <input
        value={valor1}
        onChange={(e) => setValor1(parseInt(e.target.value))}
        placeholder='valor 1'
        type='number'
      />
      <input
        value={valor2}
        onChange={(e) => setValor2(parseInt(e.target.value))}
        placeholder='valor 2'
        type='number'
      />
      <span>La suma de los valores 1 y 2 es: {suma}</span>
      <button onClick={() => setUserData({ ...userData, suma: suma })}>Guardar Suma</button>
      <Link to='/admin/usuarios/daniel'>Ir a la pagina del usuario</Link>
      <Link to='/configuracion'>Ir a la pagina de config</Link>
    </div>
  );
};

export default Index;
