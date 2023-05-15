import '../Estilos/AppTareas.css';
import React from 'react';
import EntradaTareas from './EntradaTareas';
import BtnAgregar from './BtnAgregar';
import Tareas from './Tareas';
import { useState } from 'react';

const App_tareas = ()=>{

	let tareas = [];
	
	let [valorInput, setValorInput] = useState('');
	
	function handleChange(evento) {
		setValorInput(valorInput=evento.target.value);
	}

	const manejarClick =()=>{
		tareas.push(valorInput);
		console.log(tareas);
	}

	return (
		<div className='contenedor__app'>
			<p>LIST</p>
			<div className='contenedor__input'>
				<EntradaTareas  handleChange={handleChange}/>
				<BtnAgregar manejarClick={manejarClick}/>
			</div>
			<div className='contenedor__list'>
			{
	  			// tareas.map((items) => { 
	  			// 	return (
	  			// 		<Tareas 
          //       tarea={items}
          //       key={items.id} 
          //       id={items.id} 
          //       name={items.name} 
          //       username={items.username} 
          //       email={items.email}
	  			// 		/>
	  			// 	)
	  			// })
	  		}
			</div>

		</div>
	)
}

export default App_tareas;
