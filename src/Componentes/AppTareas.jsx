import '../Estilos/AppTareas.css';
import React from 'react';
import EntradaTareas from './EntradaTareas';
import BtnAgregar from './BtnAgregar';
import Tareas from './Tareas';

const App_tareas = ()=>{
	return (
		<div className='contenedor__app'>
			<p>LIST</p>
			<div className='contenedor__input'>
				<EntradaTareas />
				<BtnAgregar />
			</div>
			<div className='contenedor__list'>
				<Tareas />
				<Tareas />
				<Tareas />
				<Tareas />
				<Tareas />
				<Tareas />
				<Tareas />
			</div>

		</div>
	)
}

export default App_tareas;
