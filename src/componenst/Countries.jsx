import  Axios  from 'axios';
import {React, useState, useEffect }from 'react';

const Countries = () => {

    const [countries, setCoutries] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selected, setSelected] = useState('Demography');

    useEffect(() => { 
        changeCoutries()
    },[]);


    const changeCoutries = () => {  
        Axios.get('https://restcountries.com/v2/alpha/ca')
            .then(res => {
                setCoutries(res.data)
                setIsLoading(false)
            }
      )};
      console.log(countries)  
    

    return (
        <div>
            {isLoading ?  (
                <h2>Loading...</h2>
                
                ) : ( 
                <div>
                    <h2> {countries.name} </h2>
                    <img src= {countries.flags?.png} alt="" />
                    <div>
                        <button onClick={()=> {setSelected('Demography')}}>Demography</button>
                        <button onClick={()=> setSelected('Location')}>Location</button>
                        <button onClick={()=> setSelected('Capital')}>Capital</button>
                    </div>
                   
                    {
                        selected === 'Demography' ? (
                            <>
                                <h2> <b> Demography </b> </h2>
                                <p> <b> Population: </b> {countries.population} </p>
                                <p> <b> Area: </b> {countries.area} </p>
                            </>
                        ) : (
                            selected === 'Location' ? (
                                <>
                                    <h2> <b> Location </b> </h2>
                                    <p> <b> Countinent: </b> {countries.region} </p>
                                    <p> <b>Sub Region: </b> {countries.subregion} </p>
                                </>
                            ) : (
                                selected === 'Capital' ? (
                                    <>
                                        <h2> <b>Capital </b> </h2>
                                        <p> <b>Capital: </b> {countries.capital} </p> 
                                    </>
                                ) : (
                                    alert('No hay coincidencias')
                                )
                            )
                        )
                    }
                    
                    

                </div>
                    
            )}
        </div>
    );
};

export default Countries;