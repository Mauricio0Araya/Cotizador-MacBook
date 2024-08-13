import React, { createContext, useContext, useState, useEffect } from 'react';
import formularioData from '../../Backend/Formulario.json';

const FormularioContext = createContext();

export function FormularioProvider({ children }) {
  const [formulario, setFormulario] = useState([]);
  const [formularioSelect, setFormularioSelect] = useState([]);

  useEffect(() => {
    if (formularioData && Array.isArray(formularioData.productos)) {
      setFormulario(formularioData.productos);
    } else {
      console.error("formularioData no contiene una propiedad 'productos' o no es una matriz");
    }
  }, []);

  const addProducto = (nuevoProducto) => {
    setFormulario([...formulario, nuevoProducto]);
  };

  return (
    <FormularioContext.Provider value={{ formulario, setFormulario, formularioSelect, setFormularioSelect, addProducto }}>
      {children}
    </FormularioContext.Provider>
  );
}

export function useFormulario() {
  return useContext(FormularioContext);
}
