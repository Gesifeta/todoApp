import React from 'react'
import Input from '../components/input'
import Button from '../components/button'

const Login=()=> {
  return (
    <div className='login'>
    <Input name="email" type="text" placeholder="Email address"/>
    <Input name="password" type="password" placeholder="Password"/>
    <div></div>
    <div className="loginButton">
      <Button name="Login"/>
     <Button name="Register" />  
    </div>
        
           </div>
  )
}

export default Login