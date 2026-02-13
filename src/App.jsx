import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DashboardHero from "./components/DashboardHero";
import EmployeeOverviewSection from "./components/EmployeeOverviewSection";
import Home from "./pages/Home";
import "./global.css";
import "./hr.css"
import "./loader.css"
import FileComplaint from "./pages/FileComplaint";
import EmployeeComplaint from "./pages/EmployeeComplaint";
import Complaints from "./pages/Complaints";
import HrHome from "./pages/HrHome";
import InitialHrComp from "./pages/InitialHrComp";
import HrFileComp from "./pages/HrFileComp";
import { useEffect, useState } from "react";
import Loader from "./components/Loader"; // adjust path if needed


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // duration of loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
             <Route path="/hr" element={<HrHome />} />
             <Route path="/hr-complaint" element={<InitialHrComp />} />
             <Route path="/hr-file-complaint" element={<HrFileComp />} />
      </Routes>
    </>
  );
}

export default App;
