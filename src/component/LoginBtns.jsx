import { Link } from "react-router-dom";
import "./LoginBtns.css";

const LoginBtns = () => {
  return (
    <div className="login-btn">
      <Link to="/student-login">
        <button className="btn third">Student Login</button>
      </Link>
      <Link to="/faculty-login">
        <button className="btn third">Facility Login</button>
      </Link>
    </div>
  );
};

export default LoginBtns;
