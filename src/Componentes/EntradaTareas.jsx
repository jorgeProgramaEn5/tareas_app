import '../Estilos/EntradaTareas.css';

const EntradaTareas = ({ handleChange })=>{
  return(
    <input 
      className='input'
      placeholder='write an assignment'
      onChange={handleChange}
    >
    </input>
  )
}

export default EntradaTareas;
