import FormGroup from "../components/FormGroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import "../style/register.scss";

const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const { username, email, password } = formData;
    await handleRegister({ email, username, password });

    navigate("/");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={formData.username}
            onChange={handleInputChange}
            label="name"
            name="Name"
            placeholder="Enter your username"
          />
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
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
