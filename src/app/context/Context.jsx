'use client';
import { createContext, useContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState({
    title: '',
    description: '',
    img: '',
  });

  return (
    <Context.Provider value={{ posts, setPosts }}>{children}</Context.Provider>
  );
};

export const UseGlobalContext = () => useContext(Context);
