import { NavLink } from "react-router-dom";


function NavClone() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Left */}
        <div className="nav-left">
          <img
            className="nav-logo"
            src="./images/makay.png"
            alt="Makay Logo"
          />

          <div className="nav-product">
            <span className="nav-badge">Case Management</span>

            {/* Dropdown */}
            <div className="nav-dropdown">
              <div className="nav-dropdown-item">Case Management</div>
              <div className="nav-dropdown-item">HR Records</div>
              <div className="nav-dropdown-item">Payroll</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="nav-right">
         <NavLink to="/home"><img className="nav-icon" src="./images/union.png" alt="Home" /></NavLink>
          <img className="nav-icon" src="./images/app-icon.png" alt="Apps" />
          <img className="nav-icon" src="./images/info-but.png" alt="Info" />
          <img className="nav-icon" src="./images/notifi-but.png" alt="Notifications" />

          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="nav-avatar"
          />
        </div>

      </div>
    </nav>
  );
}

export default NavClone;
