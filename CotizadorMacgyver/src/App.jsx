import React from 'react';
import Form from './components/Form';
import { FormularioProvider } from './components/context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';





function App() {
  return (
    <FormularioProvider>
      <div>
        <Form />
      </div>
    </FormularioProvider>
  );
}

export default App;
