import { useState } from "react";

function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-header">
      {/* LEFT */}
      <div className="home-header-left">
        <p className="home-greeting">Good Morning,</p>
        <h1 className="home-username">Williams Oluwadamilare</h1>
      </div>

      {/* RIGHT */}
      <div className="home-header-right">
        <button
          className="more-actions-btn"
          onClick={() => setOpen(!open)}
        >
          More Actions
          <span className="caret">⌄</span>
        </button>

        {open && (
          <div className="actions-dropdown">
            <div className="dropdown-item">Report Asset issue</div>
            <div className="dropdown-item">Expense Request</div>
            <div className="dropdown-item">File a complaint</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeHeader;
