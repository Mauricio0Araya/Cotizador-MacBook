import React, { useState } from 'react';
import { useFormulario } from './context/context';

function NewFormProduct({ setAlert }) {
  const { addProducto } = useFormulario();
  const [nuevoProducto, setNuevoProducto] = useState({
    modelo: '',
    producto: '',
    precioIVA: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoProducto.modelo && nuevoProducto.producto && nuevoProducto.precioIVA) {
      addProducto(nuevoProducto);
      setAlert({ msg: 'Producto añadido correctamente', color: 'success' });
      setNuevoProducto({ modelo: '', producto: '', precioIVA: '' }); // Limpiar el formulario
    } else {
      setAlert({ msg: 'Por favor completa todos los campos', color: 'danger' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Nuevo Producto</h3>
      <div className="mb-3">
        <label htmlFor="modelo" className="form-label">Modelo</label>
        <input type="text" className="form-control" id="modelo" name="modelo" value={nuevoProducto.modelo} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="producto" className="form-label">Producto</label>
        <input type="text" className="form-control" id="producto" name="producto" value={nuevoProducto.producto} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="precioIVA" className="form-label">Precio IVA</label>
        <input type="text" className="form-control" id="precioIVA" name="precioIVA" value={nuevoProducto.precioIVA} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
}

export default NewFormProduct;
