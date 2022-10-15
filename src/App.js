import React from 'react';
import './App.css';
import ListaDeTareas from './Componentes/ListadeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
