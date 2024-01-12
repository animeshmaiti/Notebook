import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credential, setCredential] = useState({username:"", email: "", password: "",cPassword:"" });
  const alert=props.alert;
  const navigate = useNavigate();
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:credential.username,
        email: credential.email,
        password: credential.password,
        cPassword:credential.cPassword
      }),
    });
    const result = await response.json();
    if (result.success) {
      localStorage.setItem("token", result.authToken);
      navigate("/login");
      alert("success","Successfully created");
    }
    console.log(result);
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container vh-100">
      <form onSubmit={handleCreateUser}>
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={onChange}
            required
            minLength="3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            required
            minLength="5"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cPassword"
            name="cPassword"
            onChange={onChange}
            required
            minLength="5"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create New Account
        </button>
      </form>
    </div>
  )
}

export default Signup