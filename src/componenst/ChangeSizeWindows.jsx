import {React, useState, useEffect} from 'react';

const ChangeSizeWindows = () => {

    const [sizeScreem, setSizeScreem] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const sizeScreemF = e => {
        if( window.innerWidth <=  499 ){
            setSizeScreem('Screem small')
        } else{
            setSizeScreem('Screem big')
        }        
    
    }
    window.addEventListener('resize', sizeScreemF)
    return() => {
        window.removeEventListener('resize', sizeScreemF )
    }
        
    }, []);
    


    return (
        <div className='Cuadrado'>
           {isVisible ?
            sizeScreem : <p>Texto desmontado</p>
            }

            <button onClick={()=> setIsVisible(!isVisible)}> Montar/Desmontar Texto </button>
        </div>
    );
};

export default ChangeSizeWindows;
