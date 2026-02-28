import { useNavigate } from "react-router-dom";
import "./presentacion.css";

function Presentacion() {
  const navigate = useNavigate();

return (
  <div className='main'> 

    <h1> 
    Universidad Politécnica de Atlacomulco 
    </h1> 

      <datos texto ="Ingeniería en Sistemas Computacionales" /> 

    <h2> 
    Programación web
    </h2>
    
    <h2>
    Unidad 3: Programación del lado del cliente (JavaScript - React )
    </h2>

    <h2>
    Tema: Implementación de Frameworks
    </h2>
    <h2>
      Danna Jaqueline Miranda Correa (2331107044)
      </h2>
    <h2 className='fecha' >
      Atlacomulco, México. 
    <br /> 
    21/02/2026
    </h2> 
  </div>
  )
}
export default Presentacion;