import FormGroup from "../components/FormGroup";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import "../style/login.scss";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const { navigate } = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    await handleLogin({ email: formData.email, password: formData.password });
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
            label="Email"
            placeholder="Enter your email"
          />
          <FormGroup
            value={formData.password}
            onChange={handleInputChange}
            label="Password"
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
