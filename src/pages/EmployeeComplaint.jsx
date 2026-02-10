import React, { useState } from "react";
import NavClone from "../components/NavClone";
import SubNav from "../components/SubNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const incidentOptions = [
  "Abusive conduct",
  "Assault",
  "Discrimination",
  "Disconnect with line manager",
  "Falsification of document",
  "Hostile work environment",
  "Insubordination",
  "Intoxication",
  "Sexual harassment",
  "Theft",
  "Violation of health and safety regulations",
  "Other",
];

const employees = [
  { name: "Racheal Patrick", role: "Software Engineer", dept: "Software & Tech" },
  { name: "Oluwaseun Adekande", role: "Product Manager", dept: "UI/UX" },
  { name: "Tosin Araba", role: "Lead Copywriter", dept: "Writing" },
  { name: "Tayo Tajudeen", role: "Chief of Operations", dept: "Operations" },
  { name: "John Tunde", role: "Accountant", dept: "Accounting" },
];

export default function EmployeeComplaint() {
  const [incident, setIncident] = useState("");
  const [openIncident, setOpenIncident] = useState(false);

  const [frequency, setFrequency] = useState("one");
  const [count, setCount] = useState("");

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [visibility, setVisibility] = useState("HR");

  const [file, setFile] = useState(null);

  const [openEmployee, setOpenEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <>
      <NavClone />
      <SubNav />

      <div className="complaint-page">
        <div className="complaint-card">

          <p className="back">← Back</p>
          <h2>File A Complaint</h2>
          <p className="sub">
            Make a grievance about an employee or general working conditions
          </p>

          <div className="section-divider" />


          





          {/* SELECT EMPLOYEE */}
          <label className="label">Select employee*</label>
          <div className="select-input" onClick={() => setOpenEmployee(true)}>
            {selectedEmployee ? selectedEmployee.name : "Select Employee"}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          {/* INCIDENT TYPE */}
          <label className="label">Select incident you're complaining about*</label>
          <div className={`select-box ${openIncident ? "active" : ""}`}>
            <div className="select-input" onClick={() => setOpenIncident(!openIncident)}>
              {incident || "Select incident"}
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            {openIncident && (
              <div className="select-dropdown">
                {incidentOptions.map((i) => (
                  <div
                    key={i}
                    className={`option ${incident === i ? "selected" : ""}`}
                    onClick={() => {
                      setIncident(i);
                      setOpenIncident(false);
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <label className="label">Description of incident*</label>
          <textarea
            className="textarea"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* FREQUENCY */}
          <label className="label">Frequency*</label>
          <div className="radio-wrapper">
            <div
              className={`radio-item ${frequency === "one" ? "active" : ""}`}
              onClick={() => setFrequency("one")}
            >
              <span className="radio-circle" />
              <span>One Time</span>
            </div>

            <div
              className={`radio-item ${frequency === "repeat" ? "active" : ""}`}
              onClick={() => setFrequency("repeat")}
            >
              <span className="radio-circle" />
              <span>Repeat Behavior</span>
            </div>
          </div>

          {frequency === "repeat" && (
            <>
              <label className="label">How many times has this incident occurred*</label>
              <input
                type="number"
                className="input"
                placeholder="Enter a number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </>
          )}

          {/* DATE */}
          <label className="label">Most recent date of incident*</label>
          <input
            type="date"
            className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* VISIBILITY */}
          <div className="visibility-box">
            <p>Who should receive this complaint?</p>

            <input type="radio" name="hr" id="hr" />Hr &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="hr" id="line" /> Line manager  &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="hr" id="both" /> Both
          </div>




            {/* hr line manager andd both */}











          {/* DOCUMENT */}
          <label className="label">Documents (Optional)</label>

          {!file ? (
            <label className="upload-box">
              <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
              Add Document or Image
            </label>
          ) : (
            <div className="file-preview">
              <span>{file.name}</span>
              <button onClick={() => setFile(null)}>✕</button>
            </div>
          )}

          {/* ACTIONS */}
          <div className="actions">
            <button className="cancel">Cancel</button>
            <button className="submit">File Complaint</button>
          </div>
        </div>
      </div>

      {/* SELECT EMPLOYEE MODAL */}
      {openEmployee && (
        <div className="modal-overlay">
          <div className="employee-modal">
            <div className="modal-header">
              <h3>Select Employee</h3>
              <FontAwesomeIcon icon={faXmark} onClick={() => setOpenEmployee(false)} />
            </div>

            <div className="modal-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input placeholder="Search for employee" />
            </div>

            <div className="employee-list">
              {employees.map((e, i) => (
                <div
                  key={i}
                  className={`employee-row ${
                    selectedEmployee?.name === e.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedEmployee(e)}
                >
                  <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="" />
                  <div>
                    <strong>{e.name}</strong>
                    <small>{e.role}</small>
                  </div>
                  <span>{e.dept}</span>
                </div>
              ))}
            </div>

            <button className="submit" onClick={() => setOpenEmployee(false)}>
              Select Employee
            </button>
          </div>
        </div>
      )}
    </>
  );
}
