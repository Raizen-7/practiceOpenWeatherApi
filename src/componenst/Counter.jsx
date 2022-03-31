import React, { useState } from 'react';





const Counter = () => {

    const [counter, setCounter] = useState(0);


    return (
        <div>
            <h2> {counter} </h2>
            <button onClick={ () => {setCounter(counter - 1)}}> Decrement </button>
            <button onClick={ () => {setCounter(counter + 1)}}> Increment </button>
            
            { counter % 2 === 0 ? (
                <p>El número es Par</p>
            ) : (
                counter % 3 === 0 ? (
                    <p>El es multiplo de 3</p>
                ) : (
                    counter % 5 === 0 ? (
                        <p>El es multiplo de 5</p>
                    ) : (
                        <p> No es multiplo de 2, 3 o 5 </p>
                    )
                )
            )}           
        </div>
    );
};

export default Counter;