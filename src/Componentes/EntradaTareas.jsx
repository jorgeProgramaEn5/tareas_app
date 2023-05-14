import '../Estilos/EntradaTareas.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const EntradaTareas = (props)=>{

	let [input, setInput] = useState('');

  const manejarCambio = e=> {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();  //evita que se actualice el form y toda la app 
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return(
    <form 
      onSubmit={manejarEnvio}    //atributo para manejar el envio del form
    >
      <input 
        className='input'
        placeholder='write an assignment'
        onChange={manejarCambio}
      >
      </input>
      <button 
        className='btn'
        // onClick={manejarClick}
      >
        AGGREGATE
      </button>
    </form>
  )
}

export default EntradaTareas;
