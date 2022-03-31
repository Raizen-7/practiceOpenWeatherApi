import {React, useState} from 'react';




const MostrarOcultar = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    
    
    
    return (
        
        <div className='Cuadrado'>
            {isVisible ?
            <img src="https://picsum.photos/200/300" alt="" /> : <p>Imagen desmontada</p>
            }

            <button onClick={()=> setIsVisible(!isVisible)}> Montar/Desmontar Imagen </button>
            
        </div>
    );
};

export default MostrarOcultar;