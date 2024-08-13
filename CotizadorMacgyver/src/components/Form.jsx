import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import miImagen from '../assets/image/logo_350px.png';
import { useFormulario } from './context/context';

import NewFormProduct from '../components/NewFormProduct';

function Formulario() {
  const { formulario } = useFormulario(); // No necesitas setFormulario ni setFormularioSelect aquí si no los usas
  const [alert, setAlert] = useState(null); // Estado para alertas

  if (!Array.isArray(formulario)) {
    console.error("formulario no es una matriz o está vacío");
    return <div>Error al cargar los datos del formulario.</div>;
  }

  const [selects, setSelects] = useState([0]); // Comienza con un select

  const addSelect = () => {
    setSelects([...selects, selects.length]);
  };

  const removeSelect = () => {
    if (selects.length > 1) {
      setSelects(selects.slice(0, -1));
    }
  };

  return (
    <>
    <div>
    <h1>Formulario de Diagnósticos</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={miImagen} rounded={true} />
          </Col>
        </Row>
      </Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre del cliente" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ficha de ingreso</Form.Label>
          <Form.Control type="password" placeholder="Número de ficha" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" placeholder="Selecciona una fecha" />
        </Form.Group>

        {selects.map((_, index) => (
          <Form.Group key={index} className="mb-3" controlId={`formSelectProducto${index}`}>
            <Form.Label>Producto {index + 1}</Form.Label>
            <Form.Select size="lg">
              <option>Selecciona un producto</option>
              {formulario.map((item, i) => (
                <option key={i} value={item.producto}>{item.producto}</option>
              ))}
            </Form.Select>
          </Form.Group>
        ))}
        <Button variant="primary" type="button" onClick={addSelect}>
          <strong>+</strong>
        </Button>

        <Button variant="primary" type="button" onClick={removeSelect}>
          <strong>-</strong>
        </Button>

        <Button variant="primary" type="submit">
          Generar
        </Button>
      </Form>
      <br />
      {alert && (
        <div className={`alert alert-${alert.color}`} role="alert">
          {alert.msg}
        </div>
      )}
      <NewFormProduct setAlert={setAlert} />
    </div>
    
    </>
  );
}

export default Formulario;
