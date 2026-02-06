import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function TimeoffSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="timeout-global-container">
      <div className="timeout-container">
        <div className="aside-left">
          <div className="card-complaint">

            {/* HEADER */}
            <div className="timeoff-header">
              <h3>Timeoff</h3>

              <div className={`dropdown ${open ? "open" : ""}`}>
                <div className="dropdown-btns">
                  <button className="but1">Request Other Timeoffs</button> &nbsp;
                  <button className="but2" onClick={() => setOpen(!open)}>
                    <img src="/images/arrow-down.png" alt="" />
                  </button>
                </div>

                <div className="dropdown-menu">
                  <button>Maternity Timeoff</button>
                  <button>Paternity Timeoff</button>
                  <button>Pet Time</button>
                </div>
              </div>
            </div>

            {/* ARROWS */}
            <div className="arr-right-left">
              <button>
                <img src="/images/arrow-left.png" alt="" />
              </button>
              <button>
                <img src="/images/arrow-right.png" alt="" />
              </button>
            </div>

            {/* TIMEOFF CARDS */}
            <div className="status-cards">
              {[20, 5, 5, 5].map((days, i) => (
                <div className="same timeoff-card" key={i}>
                  <h3>{i === 0 ? "Annual Timeoff" : "Sick Timeoff"}</h3>

                  <div className="arc-container">
                    <svg viewBox="0 0 200 100" className="arc-svg">
                      <path
                        d="M20 90 A80 80 0 0 1 180 90"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="arc-text">
                      <div className="days">{days}</div>
                      <div className="label">Days</div>
                      <div className="sub">Paid Timeoff</div>
                    </div>
                  </div>

                  <button className="btn primary">Request Timeoff</button>
                  <button className="btn ghost">View Policy Details</button>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="card-benefits">
            <h3>Benefits</h3>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-top">
                  <div className="icon blue">
                    <img src="/images/familyhealth.png" alt="" />
                  </div>
                  <div className="info">
                    <strong>Family Healthcare Plan</strong>
                    <span>Leadway & Associates</span>
                    <small>3 Dependents</small>
                  </div>
                </div>

                <NavLink to="/" className="visit-btn blue">
                  <FontAwesomeIcon icon={faGlobe} /> Visit Website
                </NavLink>

                <button className="view-btn">View</button>
              </div>

              <div className="benefit-card">
                <div className="benefit-top">
                  <div className="icon red">
                    <img src="/images/leadway.png" alt="" />
                  </div>
                  <div className="info">
                    <strong>Leadway Pension</strong>
                    <span>Leadway & Associates</span>
                    <small>1 Dependent</small>
                  </div>
                </div>

                <NavLink to="/" className="visit-btn red">
                  <FontAwesomeIcon icon={faGlobe} /> Visit Website
                </NavLink>

                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="aside-right">
          <div className="team-card">
            <div className="header">
              <h3>Timeoff Record</h3>
              <a href="#">View All Record</a>
            </div>

            <div className="tabs">
              <button className="tab active">
                Upcoming <span>3</span>
              </button>
              <button className="tab">
                Ongoing <span>2</span>
              </button>
            </div>

            <div className="records">
              {[15, 12, 18].map((img, i) => (
                <div className="record" key={i}>
                  <img src={`https://i.pravatar.cc/40?img=${img}`} />
                  <div className="info">
                    <strong>John Micheal</strong>
                    <span>Leader Designer</span>
                    <small>
                      Start Date: Jan 23 | End Date: Jan 25, 2022
                    </small>
                  </div>
                  <div className="badge">(2 Days)</div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-teams">
            <h3>My Teams</h3>

            <div className="team-list">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="team-item" key={i}>
                  <div className="left">
                    <img src={`https://i.pravatar.cc/40?img=${20 + i}`} />
                    <div className="info">
                      <strong>John Micheal</strong>
                      <span>Founder</span>
                    </div>
                  </div>
                  <button className="contact-btn">Contact</button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TimeoffSection;
