import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentRegister from "./pages/StudentRegister";
import CollegeProfile from "./pages/CollegeProfile";
import Projects from "./pages/Project";
import NotFound from "./pages/NotFound";
import CollegeRegister from "./pages/CollegeRegister";
import Dashboard from "./pages/Dashboard";
import CollegeLogin from "./pages/CollegeLogin";
import StudentsData from "./pages/StudentsData";
import Problems from "./pages/Problem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route excart path="/" element={<Dashboard />} />
        <Route excart path="/login" element={<CollegeLogin />} />
        <Route excart path="/register" element={<CollegeRegister />} />
        <Route
          excart
          path="/student-registration"
          element={<StudentRegister />}
        />
        <Route excart path="/students" element={<StudentsData />} />
        <Route excart path="/profile" element={<CollegeProfile />} />
        <Route excart path="/projects" element={<Projects />} />
        <Route excart path="/problems" element={<Problems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
