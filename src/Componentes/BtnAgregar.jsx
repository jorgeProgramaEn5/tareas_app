import '../Estilos/BtnAgregar.css';

const BtnAgregar = ({manejarClick})=>{
  return(
    <button 
      className='btn'
      onClick={manejarClick}
    >
    AGGREGATE
    </button>
  )
}

export default BtnAgregar;