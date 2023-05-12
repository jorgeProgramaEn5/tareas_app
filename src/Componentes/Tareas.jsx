import '../Estilos/Tareas.css';

const Tareas = ({ tarea })=>{
  return(
    <div className='contenedor__tareas'>
        <p>{tarea}</p>
        <button>X</button>
    </div>
  )
}

export default Tareas;