import {React, useState } from 'react';

const ButtonShowing = () => {

    const [isShowing, setIsShowing] = useState(true)

    return (
        <div>
            <div>
                <button onClick={() => {setIsShowing(!isShowing)}}  >
                Mostrar/Ocultar
                </button>
            </div>
        </div>
    );
};

export default ButtonShowing;