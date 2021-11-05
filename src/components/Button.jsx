import React from 'react';

const Button = ({ texto = 'cualquiercosa', color = 'coral' }) => {
  return (
    <button style={{ backgroundColor: color }} className='button'>
      {texto}
    </button>
  );
};

export default Button;
