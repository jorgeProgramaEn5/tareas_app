import '../Estilos/Tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tareas = ({id, texto, completada, completarTareas, eliminar })=>{
  return(
    <div 
      className={ completada? 'contenedor__tareas completada' : 'contenedor__tareas'}
    >
      <div 
        className='texto__tareas' 
        onClick={()=>completarTareas(id)}
      >
        {texto}
      </div>
      <div className='icono__tareas' onClick={()=>eliminar(id)}>
        <AiOutlineCloseCircle className='icono'/>
      </div>
    </div>
  )
}

export default Tareas;