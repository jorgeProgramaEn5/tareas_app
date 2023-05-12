import '../Estilos/AppTareas.css';
import React from 'react';
import EntradaTareas from './EntradaTareas';
import BtnAgregar from './BtnAgregar';
import Tareas from './Tareas';
import { useState } from 'react';

const App_tareas = ()=>{
	
	let [valorInput, setValorInput] = useState('');
	
	function handleChange(evento) {
		setValorInput(valorInput=evento.target.value);
	}

	const manejarClick =()=>{
		console.log(valorInput);
	}

	return (
		<div className='contenedor__app'>
			<p>LIST</p>
			<div className='contenedor__input'>
				<EntradaTareas  handleChange={handleChange}/>
				<BtnAgregar manejarClick={manejarClick}/>
			</div>
			<div className='contenedor__list'>
	  			<Tareas 
					tarea={valorInput}
	  			/>
			</div>

		</div>
	)
}

export default App_tareas;
