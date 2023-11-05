import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentRegister from "./pages/StudentRegister";
import CollegeProfile from "./pages/CollegeProfile";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import CollegeRegister from "./pages/CollegeRegister";
import Dashboard from "./pages/Dashboard";
import CollegeLogin from "./pages/CollegeLogin";
import StudentsData from "./pages/StudentsData";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<CollegeLogin />} />
        <Route path="/register" element={<CollegeRegister />} />
        <Route path="/student-registration" element={<StudentRegister />} />
        <Route path="/students" element={<StudentsData />} />
        <Route path="/profile" element={<CollegeProfile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
