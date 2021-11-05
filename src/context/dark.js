import { createContext, useContext } from 'react';

export const DarkContext = createContext(null);

export const useDark = () => {
  return useContext(DarkContext);
};
