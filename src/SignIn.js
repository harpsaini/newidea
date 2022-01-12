import { useState } from "react";

const SignIn = ({handleRouteChange}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  
  return(
    <div className="formElement">
      <h2>Sign in</h2>
      <form>
        <label htmlFor="Email"></label>
        <input type="Email" placeholder="Email" id="Email" onChange={handleEmailChange}/>
        <label className="sr-only" htmlFor="Password"></label>
        <input type="password" placeholder="Password" id="Password" onChange={handlePasswordChange}/>
        <input type="submit" value="Sign in" onClick={()=> handleRouteChange('home')}/>
      </form>
      <div>
        <p className="button" onClick={()=>handleRouteChange('register')}>Register</p>
      </div>
    </div>
  )
}

export default SignIn