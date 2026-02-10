import { NavLink } from "react-router-dom";

function SubNav() {
  return (
    <div className="subnav">
    
      {/* CENTER */}
      <div className="subnav-links">
        <NavLink to="/home" className="subnav-link">
          Home
        </NavLink>
        <NavLink to="/people" className="subnav-link">
          People
        </NavLink>
        <NavLink to="/timeoff" className="subnav-link">
          Timeoff
        </NavLink>
        <NavLink to="/benefits" className="subnav-link">
          Benefits
        </NavLink>
        <NavLink to="/documents" className="subnav-link">
          Documents
        </NavLink>
        <NavLink to="/payslips" className="subnav-link">
          Payslips
        </NavLink>
        <NavLink to="/performance" className="subnav-link">
          Performance Review
        </NavLink>
        <NavLink to="/complaint" className="subnav-link">
          Complaints
        </NavLink>
        <NavLink to="/assets" className="subnav-link">
          Assets
        </NavLink>
        <NavLink to="/tasks" className="subnav-link">
          Tasks
        </NavLink>
      </div>

      <div className="subnav-right" />
    </div>
  );
}

export default SubNav;
