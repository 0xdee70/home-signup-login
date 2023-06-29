import React, { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if(email.trim === "" || password.trim === "") {
      setError("Please enter both email and password");
      return;
    }
    console.log("Email: ", email);
    console.log("password: ", password);


    //onSubmit 
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div>
      <h2>Signup Page</h2>
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
        {error && <p>{error}</p>}
        <button type='submit' disabled={email.trim === "" || password.trim === ""}>Signup</button>

      </form>
    </div>
  )
}
