// import React from 'react';
import logo_app_tarea from '../imagenes/logo_app_tarea.png';
import '../Estilos/Logo.css';

const Logo = ()=>{
  return (
    <div className="contenedor">
      <div className="contenedor_img">
        <img src={logo_app_tarea} alt="logo app" />
      </div>
      <div className="contenedor_text">
        <p>HOMEWORKS</p>
      </div>
    </div>
  )
}

export default Logo;