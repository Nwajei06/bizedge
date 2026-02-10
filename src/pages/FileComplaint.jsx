import React, { useState } from "react";
import SubNav from "../components/SubNav";
import NavClone from "../components/NavClone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const complaintOptions = [
  "Hostile work environment",
  "Violation of health and safety regulations",
  "Unsustainable workload",
  "Theft",
  "Ambiguously defined employee role",
  "Not enough personal time off",
  "Favouritism",
  "Disconnect with line manager",
  "Others - Please specify in the description section",
];

export default function FileComplaint() {
  const [complaintType, setComplaintType] = useState("");
  const [openComplaint, setOpenComplaint] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("general");

  // ✅ DATE STATES (ALL INSIDE COMPONENT)
  const [openDate, setOpenDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2000);

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

          <div className="radio-wrapper">
            <div
              className={`radio-item ${type === "general" ? "active" : ""}`}
              onClick={() => setType("general")}
            >
              <span className="radio-circle" />
              <span className="radio-text">General Complaint</span>
            </div>

            <div
              className={`radio-item ${type === "employee" ? "active" : ""}`}
              onClick={() => setType("employee")}
            >
              <span className="radio-circle" />
              <span className="radio-text">An Employee</span>
            </div>
          </div>

          <label className="label">Select complaint type*</label>
          <div className={`select-box ${openComplaint ? "active" : ""}`}>
            <div
              className="select-input"
              onClick={() => setOpenComplaint(!openComplaint)}
            >
              {complaintType || "Select complaint type*"}
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            {openComplaint && (
              <div className="select-dropdown">
                {complaintOptions.map((item) => (
                  <div
                    key={item}
                    className="option"
                    onClick={() => {
                      setComplaintType(item);
                      setOpenComplaint(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="label">Incident Date (If Date related)</label>

          <div className="date-field">
            <div
              className="date-input"
              onClick={() => setOpenDate(true)}
            >
              {selectedDate || "Choose Date"}
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>

            {openDate && (
              <div className="date-modal">
                <div className="date-header">
                  <strong>Select Date</strong>
                  <span onClick={() => setOpenDate(false)}>✕</span>
                </div>

                <div className="date-nav">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() =>
                      month === 0
                        ? (setMonth(11), setYear(year - 1))
                        : setMonth(month - 1)
                    }
                  />

                  <span>
                    {new Date(year, month).toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>

                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() =>
                      month === 11
                        ? (setMonth(0), setYear(year + 1))
                        : setMonth(month + 1)
                    }
                  />
                </div>

                <div className="calendar-grid">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className="day"
                      onClick={() =>
                        setSelectedDate(`${i + 1}/${month + 1}/${year}`)
                      }
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <button className="date-submit" onClick={() => setOpenDate(false)}>
                  Submit
                </button>
              </div>
            )}
          </div>

          <label className="label">Provide description*</label>
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />








          <div className="radio-wrapper">
            <div
              className={`radio-item ${type === "general" ? "active" : ""}`}
              onClick={() => setType("general")}
            >
              <span className="radio-circle" />
              <span className="radio-text">Hr</span>
            </div>

            <div
              className={`radio-item ${type === "employee" ? "active" : ""}`}
              onClick={() => setType("employee")}
            >
              <span className="radio-circle" />
              <span className="radio-text">Line manager</span>
            </div>
            <div
              className={`radio-item ${type === "both" ? "active" : ""}`}
              onClick={() => setType("both")}
            >
              <span className="radio-circle" />
              <span className="radio-text">Both</span>
            </div>
          </div>









          <label className="label">Documents (Optional)</label>

          {!file ? (
            <label className="upload-box">
              <input
                type="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
              + Add Document or Image
            </label>
          ) : (
            <div className="file-preview">
              <span>{file.name}</span>
              <button onClick={() => setFile(null)}>✕</button>
            </div>
          )}

          <div className="actions">
            <button className="cancel">Cancel</button>
            <button className="submit">File Complaint</button>
          </div>
        </div>
      </div>
    </>
  );
}
