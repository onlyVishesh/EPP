import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginBtns from "./component/LoginBtns";
import LoginForm from "./component/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginBtns />} />
        <Route path="/student-login" element={<LoginForm />} />
        <Route path="/teacher-login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
