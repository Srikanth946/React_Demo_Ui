
import React from 'react'
import {useState} from 'react'

const Login=()=>{
    const [loginData, setLoginData]= useState({
        email:'',
        password:''

    })
    const changeHandler= (e)=>{
        console.log("entered");
        setLoginData({...loginData,[e.target.name]:e.target.value})
        console.log(loginData)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(loginData.password.length<5){
            alert("Invalid Password")
        }else{
        console.log(loginData);}
    }
  return (
      <div>
          <center>
          <form onSubmit={submitHandler} >
        
              <label>UserName</label><br/>
              <input type="text" name="email" placeholder='Username' onChange={changeHandler}/><br/>
              <label>Password</label><br/>
              <input type="password" name="password" placeholder='Password' onChange={changeHandler}/><br/>
              <input type="submit" value="Login" />
              
            

          </form>
          </center>
      </div>
  )
}

export default Login;
