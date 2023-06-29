import React, { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if( !email || !password ) {
      setErrorMsg("Please enter both email and password");
      return;
    }
    console.log("Email: ", email);
    console.log("password: ", password);
    
    
    //onSubmit 
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };
  
  return (
    <div>
      <h2>Signup Page</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <form onSubmit={handleSignup}>


        <div>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit'>Signup</button>

      </form>
    </div>
  )
}