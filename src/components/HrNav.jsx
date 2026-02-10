import { NavLink } from "react-router-dom";


function HrNav() {
  return (
    <div className="hr-nav">
      <NavLink to="/hr" className="hr-nav-link">
        Overview
      </NavLink>

      <NavLink to="/" className="hr-nav-link active">
        Complaints
      </NavLink>

      <NavLink to="/" className="hr-nav-link">
        Employee Complaints
      </NavLink>

      <NavLink to="/" className="hr-nav-link">
        Timeoff
      </NavLink>

      <NavLink to="/" className="hr-nav-link">
        Holidays
      </NavLink>
    </div>
  );
}

export default HrNav;
