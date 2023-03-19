import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("https://tourandtravel.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate.push("/login");
    }
  }

  return (
    <div>
      <h1 className="align">Register</h1>
      <form onSubmit={registerUser} className="align">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="height"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="height"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="height"
        />
        <br />
        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
}

export default SignUp;
