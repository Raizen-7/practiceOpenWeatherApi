import  Axios  from 'axios';
import {React, useState,  useEffect }from 'react';
import sol from '../img/sol.jpg';



const WheartherApp = () => {

    const [Whearthers, setWhearthers] = useState({});
  

    useEffect(() => { 
        changeWhearther()
 
    },[]);

    const changeWhearther = () => {  
        Axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=1eab1a58556dc9f09bab546d6c9abda2')
            .then(res => {
                setWhearthers(res.data);
            }
      )};



            console.log( Whearthers.main )




    return (
        <div className='Conteiner'>
            <div className='contentRes'>
                <div className='imgWeather'>
                    <img src={ sol } alt="img"/>
                    <p>Temp : { Whearthers.main?.temp } <strong>°F</strong></p> 
                </div>
                <div className='resApi'>
                    <h1>Whearther</h1>
                    <p> { Whearthers.name }, { Whearthers.sys?.country}  </p> 
                    <p> Wind Speed : { Whearthers.wind?.speed } m/s</p>
                    <p> Clouds : { Whearthers.clouds?.all }%</p>
                    <p> Clouds : { Whearthers.main?.pressure } mb</p>
                    <button>Degrees °F/°C</button>
                </div> 
            </div>
            
        </div>
    );
};

export default WheartherApp;