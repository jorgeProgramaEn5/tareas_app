import '../Estilos/AppTareas.css';
import React from 'react';
import EntradaTareas from './EntradaTareas';
import Tareas from './Tareas';
import { useState } from 'react';

const App_tareas = ()=>{
	
	let [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea)=>{
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas = [tarea,...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTareas = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

	const completarTareas = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

	return (
		<div className='contenedor__app'>
			<p>LIST</p>
			<div className='contenedor__input'>
				<EntradaTareas  
					// handleChange={handleChange}
          onSubmit={agregarTarea}
				/>
			</div>
			<div className='contenedor__list'>
        {
          tareas.map(items =>{
            return(
              <Tareas
                key={items.id} 
                id={items.id} 
                texto={items.texto}
                completada={items.completada}
                completarTareas={completarTareas}
                eliminar={eliminarTareas}
              />
            )
          })
        }
			</div>

		</div>
	)
}

export default App_tareas;
