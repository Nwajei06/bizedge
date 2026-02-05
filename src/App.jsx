import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DashboardHero from "./components/DashboardHero";
import EmployeeOverviewSection from "./components/EmployeeOverviewSection";
import Home from "./pages/Home";
import "./global.css";

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
      </Routes>
    </>
  );
}

export default App;
