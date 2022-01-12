import {  useState } from "react";

const Register = ({handleRouteChange}) => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
 
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    // setregister
    // Email("")
    // setName("")
    // setregisterPassword("")

      fetch('http://localhost:5000/register',{
        method:'post',
        headers : { 'Content-Type':'application/json'},
        body: JSON.stringify({
          name: name,
          email:email,
          password:password
        })
      })
      .this(res=>res.JSON())
      .then(user=>{
        console.log(user);
      })
  }


  return(
    <div className="formElement"> 
      <h2>Register</h2>
      <form>
        <label className="sr-only" htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" value={name} id="Name" onChange={handleNameChange}/>
        <label className="sr-only" htmlFor="email">Email</label>
        <input type="email" placeholder="Email" value={email} id="Email" onChange={handleEmailChange}/>
        <label className="sr-only" htmlFor="password"></label>
        <input type="password" placeholder="password" value={password} id="password" onChange={handlePasswordChange}/>
        <input type="submit" onSubmit={handleSubmit} onClick={()=>handleRouteChange('home')} value="sign in" />  
      </form>
    </div>
  )
}


export default Register