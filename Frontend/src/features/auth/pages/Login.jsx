import FormGroup from "../components/FormGroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import "../style/login.scss";

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = formData;
    await handleLogin({ email, password });

    navigate("/");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={formData.email}
            onChange={handleInputChange}
            label="email"
            name="Email"
            placeholder="Enter your email"
          />
          <FormGroup
            value={formData.password}
            onChange={handleInputChange}
            label="password"
            name="Password"
            placeholder="Enter your password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
