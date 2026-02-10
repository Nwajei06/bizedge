import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-header">
      {/* LEFT */}
      <div className="home-header-left">
        <p className="home-greeting">Good Morning,</p>
        <h1 className="home-username">Williams Oluwadamilare</h1>
      </div>
<div className="home-header-right">
  <button
    className="more-actions-btn"
    onClick={(e) => {
      e.stopPropagation();
      setOpen(prev => !prev);
    }}
  >
    More Actions
    <span className="caret"><FontAwesomeIcon icon={faChevronDown} />
</span>
  </button>

  {open && (
    <div
      className="actions-dropdown"
      onClick={(e) => e.stopPropagation()}
    >
    <NavLink style={{textDecoration:"none", color:"#545354"}}> <div className="dropdown-item">Report Asset issue</div></NavLink> 
    <NavLink style={{textDecoration:"none", color:"#545354"}}>  <div className="dropdown-item">Expense Request</div></NavLink> 
     <NavLink to="/file-complaint" style={{textDecoration:"none", color:"#545354"}}><div className="dropdown-item">File a complaint</div></NavLink> 
    </div>
  )}
</div>

    </div>
  );
}

export default HomeHeader;
