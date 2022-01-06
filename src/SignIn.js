import { useState } from "react";
import { Link } from 'react-router-dom';


const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  



  return(
    <div className="formElement">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email"></label>
        <input type="Email" placeholder="Email" id="Email" onChange={handleEmailChange}/>
        <label className="sr-only" htmlFor="Password"></label>
        <input type="password" placeholder="Password" id="Password" onChange={handlePasswordChange}/>
        <button type="submit">Sign in</button>  
      </form>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default SignIn