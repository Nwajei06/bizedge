import React, { useState } from "react";
import NavClone from "../components/NavClone";
import SubNav from "../components/SubNav";
import { NavLink } from "react-router-dom";

function Complaints() {
  const [view, setView] = useState("reported");
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div>
      <NavClone />
      <SubNav />

      <div className="general-complaint">
        {/* HEADER */}
        <div className="gen-comp-header">
          <h1>Complaints</h1>
          <NavLink to="/employee-complaint">
            <button>File a complaint</button>
          </NavLink>
        </div>

        {/* TOGGLE BUTTONS */}
        <div className="you-against-but">
          <button
            className={view === "reported" ? "active" : ""}
            onClick={() => setView("reported")}
          >
            Reported By You
          </button>

          <button
            className={view === "against" ? "active" : ""}
            onClick={() => setView("against")}
          >
            Against You
          </button>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="search-comp">
          <input type="search" placeholder="Search complaints" />

          <div className="dropdown">
            <button className="dropdown-btn">Complaint type</button>
            <div className="dropdown-menu">
              <p>Sexual assault</p>
              <p>Theft</p>
              <p>Hostile work environment</p>
              <p>Violation of health and safety</p>
              <p>Discrimination</p>
              <p>Intoxication</p>
              <p>Insubordination</p>
              <p>Falsification of document</p>
              <p>Others</p>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-btn">Status</button>
            <div className="dropdown-menu">
              <p>Pending</p>
              <p>Open</p>
              <p>Closed</p>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-btn">Stage</button>
            <div className="dropdown-menu">
              <p>Investigation</p>
              <p>Resolution</p>
              <p>N/A</p>
            </div>
          </div>
        </div>

        {/* CONTENT SWITCH */}
        {view === "reported" && (
          <ReportedByYou onRowClick={() => setOpenPanel(true)} />
        )}
        {view === "against" && (
          <AgainstYou onRowClick={() => setOpenPanel(true)} />
        )}

        {/* SIDE PANEL */}
        {openPanel && (
          <>
            <div className="overlay" onClick={() => setOpenPanel(false)} />

            <div className="side-panel">
              <div className="panel-header">
                <h3>Complaint Details</h3>
                <button onClick={() => setOpenPanel(false)}>✕</button>
              </div>

              <div className="panel-body">
                <label>Incident Type</label>
                <input value="Persistent lateness" disabled />

                <label>Description</label>
                <textarea
                  disabled
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />

                <label>Reported To</label>
                <input value="Rachael Patrick" disabled />

                <label>Documents</label>
                <div className="doc-box">image.jpg</div>
                <div className="doc-box">image.jpg</div>
              </div>

              <button
                className="panel-close"
                onClick={() => setOpenPanel(false)}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------- REPORTED BY YOU ---------------- */
function ReportedByYou({ onRowClick }) {
  return (
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
        <tr onClick={onRowClick} className="click-row">
          <td>12 Jun, 2023</td>
          <td>Sexual Assault</td>
          <td>John Thomas</td>
          <td>Pending</td>
          <td>Investigation</td>
          <td>N/A</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>02 Sept, 2022</td>
          <td>Violation of health & safety</td>
          <td>N/A</td>
          <td>Open</td>
          <td>Investigation</td>
          <td>N/A</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>12 Aug, 2022</td>
          <td>Hostile work environment</td>
          <td>N/A</td>
          <td>Open</td>
          <td>Resolution</td>
          <td>Dismissed</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>12 Dec, 2021</td>
          <td>Theft</td>
          <td>Rebekah Ayilah</td>
          <td>Open</td>
          <td>Investigation</td>
          <td>N/A</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>12 Jun, 2021</td>
          <td>Sexual Harassment</td>
          <td>Mobuntu Thulani</td>
          <td>Closed</td>
          <td>Resolution</td>
          <td>Suspension</td>
        </tr>
      </tbody>
    </table>
  );
}

/* ---------------- AGAINST YOU ---------------- */
function AgainstYou({ onRowClick }) {
  const hasData = true;

  if (!hasData) {
    return <p style={{ textAlign: "center" }}>You have no records yet.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date of Complaint</th>
          <th>Complaint Type</th>
          <th>Status</th>
          <th>Stage</th>
          <th>Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={onRowClick} className="click-row">
          <td>03 Jun, 2023</td>
          <td>Slow response to work requests</td>
          <td>Open</td>
          <td>Investigation</td>
          <td>N/A</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>02 Sept, 2022</td>
          <td>Sexual Assault</td>
          <td>Closed</td>
          <td>Resolution</td>
          <td>Written warning</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>28 Mar, 2021</td>
          <td>Inability to prioritize</td>
          <td>Closed</td>
          <td>Resolution</td>
          <td>Dismissed</td>
        </tr>
        <tr onClick={onRowClick} className="click-row">
          <td>12 Jun, 2020</td>
          <td>Sexual Harassment</td>
          <td>Closed</td>
          <td>Resolution</td>
          <td>Suspension</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Complaints;
