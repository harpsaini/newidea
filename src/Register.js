import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  console.log(email);

  const handleEmailChange = (e)=>{
    // console.log(e.target.value );
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

const handleSubmit = (e) => {
  e.preventDefault()
  setEmail("")
  setName("")
  setPassword("")
}


// we need to check if the information entered already exists
  // if no, save the user information in the database and direct to login page
  // if yes, throw an errow 


  return(
    <div className="formElement"> 
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" value={name} id="Name" onChange={handleNameChange}/>
        <label className="sr-only" htmlFor="Email">Email</label>
        <input type="Email" placeholder="Email" value={email} id="Email" onChange={handleEmailChange}/>
        <label className="sr-only" htmlFor="Password"></label>
        <input type="password" placeholder="Password" value={password} id="Password" onChange={handlePasswordChange}/>
        <button type="submit">Register</button>  
      </form>
    </div>
  )
}


export default Register