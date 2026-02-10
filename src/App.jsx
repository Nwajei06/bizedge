import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DashboardHero from "./components/DashboardHero";
import EmployeeOverviewSection from "./components/EmployeeOverviewSection";
import Home from "./pages/Home";
import "./global.css";
import FileComplaint from "./pages/FileComplaint";
import EmployeeComplaint from "./pages/EmployeeComplaint";
import Complaints from "./pages/Complaints";

function App() {
  return (
    <>
      

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Nav />
              <DashboardHero />
              <EmployeeOverviewSection />
            </>
          }

        />
             <Route path="/home" element={<Home />} />
             <Route path="/file-complaint" element={<FileComplaint />} />
             <Route path="/employee-complaint" element={<EmployeeComplaint />} />
             <Route path="/complaint" element={<Complaints />} />
      </Routes>
    </>
  );
}

export default App;
