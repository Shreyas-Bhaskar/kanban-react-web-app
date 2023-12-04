import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    if (!credentials.username || !credentials.password) {
      setError("Username and password are required");
      return;
    }

    try {
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h1>Signin</h1>
      {error && <div className="error-message">{error}</div>}
      <input
  type="text"  // Specify the input type as text for both fields
  value={credentials.username}
  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
  placeholder="Username"  // Add a placeholder for the username
  style={{ border: '2px solid black' }}  // Apply a bolder border using inline styles
/>
<br />
<input
  type="password"  // Specify the input type as password for the password field
  value={credentials.password}
  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
  placeholder="Password"  // Add a placeholder for the password
  style={{ border: '2px solid black' }}  // Apply a bolder border using inline styles
/>
<br />

      <button onClick={signin}>Signin</button>
    </div>
  );
}

export default Signin;