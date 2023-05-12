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
	  			tareas.map((i) => { 
	  				return (
	  					<Tareas 
						tarea={tareas[i]}
	  					// key={robots[i].id} 
	  					// id={robots[i].id} 
	  					// name={robots[i].name} 
	  					// username={robots[i].username} 
	  					// email={robots[i].email}
	  					/>
	  				)
	  			})
	  		}
			</div>

		</div>
	)
}

export default App_tareas;
