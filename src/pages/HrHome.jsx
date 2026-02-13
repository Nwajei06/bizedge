import React, { useState } from "react";
import NavClone from "../components/NavClone";
import HrNav from "../components/HrNav";
import { NavLink } from "react-router-dom";
function HrHome() {
  const [periodOpen, setPeriodOpen] = useState(false);
  const [period, setPeriod] = useState("Year to date");

  const periods = ["June", "May", "April", "March", "February", "January"];

  return (
    <div>
      <NavClone />
      <HrNav />

      <div className="hr-home">
        {/* TOP BAR */}
        <div className="hr-top">
          <div className="period-wrap">
            <span>Period</span>
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => setPeriodOpen(!periodOpen)}
              >
                {period}
              </button>

              {periodOpen && (
                <div className="dropdown-menu">
                  {periods.map((p) => (
                    <p
                      key={p}
                      onClick={() => {
                        setPeriod(p);
                        setPeriodOpen(false);
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div> 
              )}
            </div>
          </div>

        <NavLink to="/hr-file-complaint"  style={{textDecoration:"none"}}>  <button className="primary-btn">File A Complaint</button> </NavLink>
        </div>

        {/* STATS + CHART */}
        <div className="hr-stats">
          <div className="stats-left">
            <div className="stat-card gray">
              <p style={{fontWeight:"bold"}}>Total Complaints</p>
              <h2>25</h2>
            </div>

            <div className="stat-card red">
              <p style={{fontWeight:"bold"}}>Pending Complaints</p>
              <h2>25</h2>
            </div>

            <div className="stat-card yellow">
              <p style={{fontWeight:"bold"}}>Open Complaints</p>
              <h2>25</h2>
            </div>

            <div className="stat-card blue">
              <p style={{fontWeight:"bold"}}>Closed Complaints</p>
              <h2>25</h2>
            </div>
          </div>

          <div className="stats-right">
            {/* <h4>Complaint Distribution By Type</h4> */}
            <img
              src="/images/hrhomestat.png"
              alt="Complaint distribution"
            />
          </div>
        </div>

        {/* RECENT COMPLAINTS */}
        <div className="recent">
          <h3>Recent Complaints</h3>

          <table>
            <thead>
              <tr>
                <th>Date Reported</th>
                <th>Complaint Type</th>
                <th>Filed Against</th>
                <th>Status</th>
                <th>Stage</th>
                <th>Decision</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>12 Jun, 2021</td>
                <td>Sexual Assault</td>
                <td>John Thomas</td>
                <td>Pending</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>12 Jun, 2021</td>
                <td>Sexual Assault</td>
                <td>Samuel Okocha</td>
                <td>Open</td>
                <td>Investigation</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>12 Jun, 2021</td>
                <td>Hostile work environment</td>
                <td>N/A</td>
                <td>Open</td>
                <td>Resolution</td>
                <td>Dismissed</td>
              </tr>
              <tr>
                <td>12 Jun, 2021</td>
                <td>Theft</td>
                <td>Rebekah Ayilah</td>
                <td>Open</td>
                <td>Investigation</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>12 Jun, 2021</td>
                <td>Sexual Harassment</td>
                <td>Mobuntu Thulani</td>
                <td>Closed</td>
                <td>Resolution</td>
                <td>Suspension</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HrHome;
