import axios from 'axios';
import { useEffect, useState} from 'react';




const Users = () => {

     const [user, setUser] = useState({});
   
   
     useEffect(() => {
      changeUser()
     },[]);


    const changeUser = () =>{
      axios.get('https://randomuser.me/api/')
      .then(res => setUser(res.data.results[0]))
     }; 
     
 
    return (
      <div className="App">
        <h1>{user.name?.title}</h1>
        <h2>{user.name?.first} {user.name?.last} </h2>
        <img src={user.picture?.large} alt="" />
        <p>{user.email} </p>
        <p>{user.location?.state} {user.location?.city} </p>
        <button onClick={changeUser}>Change User</button>
      </div>
      
    );
  };

export default Users;
