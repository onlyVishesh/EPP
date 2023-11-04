import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [resetForm, setResetForm] = useState(false);

  const toggleSignup = () => {
    setIsLogin(false);
    setResetForm(true);
  };

  const toggleLogin = () => {
    setIsLogin(true);
    setResetForm(true); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(formData.email)) {
      toast.error("Invalid email format. Please enter a valid email address.");
    } else if (formData.password.length < 8) {
      toast.error("Password should be at least 8 characters long.");
    } else {
      if (
        formData.email === "user@example.com" &&
        formData.password === "password"
      ) {
        setLoggedIn(true);
        toast.success("Login successful");
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    }
  };

  const handleSignup = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(formData.email)) {
      toast.error("Invalid email format. Please enter a valid email address.");
    } else if (formData.password.length < 8) {
      toast.error("Password should be at least 8 characters long.");
    } else if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match. Please re-enter your password.");
    } else {
      setLoggedIn(true);
      toast.success("Account created successfully. You are now logged in.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setResetForm(true); 
    toast.info("Logged out successfully");
  };

  const handleModelClose = () => {
    navigate("/");
  };

  return (
    <div>
   
    <div className="form-model">
      <div className="close-login" onClick={handleModelClose}>
        <FontAwesomeIcon icon={faTimes} style={{ color: "#fff" }} size="lg" />
      </div>
      <ToastContainer />
      {loggedIn ? (
        <div>
          <p>You are logged in as {formData.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <div className="form-toggle">
            <button
              id="login-toggle"
              onClick={toggleLogin}
              style={{
                backgroundColor: isLogin ? "#3387e8" : "#fff",
                color: isLogin ? "#fff" : "#222",
              }}
            >
              Log In
            </button>
            <button
              id="signup-toggle"
              onClick={toggleSignup}
              style={{
                backgroundColor: isLogin ? "#fff" : "#3387e8",
                color: isLogin ? "#222" : "#fff",
              }}
            >
              Sign Up
            </button>
          </div>

          <div id="login-form" style={{ display: isLogin ? "block" : "none" }}>
            <form>
              <input
                type="text"
                name="email"
                placeholder="Enter email or username"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button type="button" className="btn login" onClick={handleLogin}>
                Login
              </button>
              <p>
                <a href="/">Forgotten account</a>
              </p>
              <hr />
            </form>
          </div>

          <div id="signup-form" style={{ display: isLogin ? "none" : "block" }}>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Your Password (min 8 characters)"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="btn signup"
                onClick={handleSignup}
              >
                Create Account
              </button>
              <p>
                Clicking <strong>Create Account</strong> means that you agree to
                our <a href="/">terms of services</a>.
              </p>
              <hr />
            </form>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default LoginForm;
