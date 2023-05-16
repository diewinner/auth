import './App.css';
import { useState } from 'react';
import {LogPage} from './LogInPage/LogPage';
import {AccPage} from './AccPage/AccPage';
import {Route,Routes, Link} from 'react-router-dom'
import {BrowserRouter } from 'react-router-dom';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [loginError,setLoginError] = useState('Введи admin')
  const [passwordError,setPasswordError] = useState('Введи admin')
  const [loginDirty,setLoginDirty] = useState(false)
  const [passwordDirty,setPasswordDirty] = useState(false)
  const [formValid,setFormValid] = useState(false)
  // function logIn (event) {
  //   if (event.target.value === 'admin')
  // }
  return ( 
      <> 
        <Routes>
          <Route path='/' element={<LogPage formValid={formValid} setFormValid={setFormValid} setPasswordDirty={setPasswordDirty} passwordDirty={passwordDirty} setLoginDirty={setLoginDirty} loginDirty = {loginDirty} setPasswordError={setPasswordError} setLoginError={setLoginError} passwordError={passwordError} loginError={loginError} login = {login} password ={password} setIsLoggedIn={setIsLoggedIn} isLoggedIn= {isLoggedIn} setPassword={setPassword} setLogin = {setLogin}/>}></Route>
          <Route path='/login' element={<AccPage setIsLoggedIn={setIsLoggedIn} isLoggedIn= {isLoggedIn}/>}></Route>
        </Routes>
      {/* <LogPage login = {login} password ={password} setIsLoggedIn={setIsLoggedIn} isLoggedIn= {isLoggedIn} setPassword={setPassword} setLogin = {setLogin}/> */}
      </>

  );
}

export default App;
