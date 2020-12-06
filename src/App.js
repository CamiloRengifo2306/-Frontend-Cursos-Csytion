import React, {useState, useEffect} from 'react';
import fire from '../src/Firebase-config'
import Login from './pages/login/login';
//import Deshboard from './pages/dashboard/dashboard';

const App = () => 
{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const cleanInputs = () =>
  {
    setEmail('');
    setPassword('');
  }

  const cleanErrors = () =>
  {
    setEmailError('');
    setPasswordError('');
  }

  const handeleLogin = () => 
  {
    cleanErrors();
    fire
    .auth()
    .signInWithEmailAndPassword (email, password)
    .catch(error => 
      {
      switch(error.code)
      {
        case "Auth/Incalid-Email":
          setEmailError(error.message);
        break;
        case "Auth/Wrong-Password":
          setPasswordError(error.message);
        break;
      }
     })
  }

  const userLis = () => 
  {
    fire
    .auth()
    .onAuthStateChanged((user) => 
    {
      if (user)
      {
        cleanInputs();
        setUser(user);
      }
      else
      {
        setUser("");
      }
    })
  }

  useEffect(() =>
  {
    userLis();
  
  }, []);

  return(
    <div>
      <Login/>
      
    </div>
  );
};


export default App
