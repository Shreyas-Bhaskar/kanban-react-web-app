import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
  type="text"
  value={credentials.username}
  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
  placeholder="Username"
  style={{ border: '2px solid black' }}
/>
<br />
<input
  type="password"
  value={credentials.password}
  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
  placeholder="Password"
  style={{ border: '2px solid black' }}
/>
<br/>
      <button onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;