import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginBtns from "./component/LoginBtns";
import FacultyLoginForm from "./component/FacultyLoginForm";
import StudentLoginForm from "./component/StudentLoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginBtns />} />
        <Route path="/student-login" element={<StudentLoginForm />} />
        <Route path="/faculty-login" element={<FacultyLoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
