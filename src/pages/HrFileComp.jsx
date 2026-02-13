import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronLeft, faChevronRight } 
from "@fortawesome/free-solid-svg-icons";
import NavClone from "../components/NavClone";
import SubNav from "../components/SubNav";




const employees = [
  {
    id: 1,
    name: "Racheal Patrick",
    role: "Software Engineer",
    dept: "Software & Tech",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Oluwaseun Adekande",
    role: "Product Manager",
    dept: "UI/UX",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Tosin Araba",
    role: "Lead Copywriter",
    dept: "Writing",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Tayo Tajudeen",
    role: "Chief of Operations",
    dept: "Operation",
    img: "https://i.pravatar.cc/40?img=4",
  },
];

function HrFileComp() {
  const [complaintFor, setComplaintFor] = useState("employee");
  const [aboutEmployee, setAboutEmployee] = useState("general");
  const [frequency, setFrequency] = useState("one-time");
  const [files, setFiles] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // ✅ NEW Complaint Dropdown State
  const [showComplaintDropdown, setShowComplaintDropdown] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState("");

  const handleFileUpload = (e) => {
    setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSelectEmployee = (emp) => {
    setSelectedEmployee(emp);
    setShowModal(false);
  };

  const complaintOptions = [
    "Abusive conduct",
    "Assault",
    "Discrimination",
    "Disconnect with line manager",
    "Falsification of Document",
    "Hostile work environment",
    "Insubordination",
    "Intoxication",
    "Sexual harassment",
    "Theft",
    "Violation of health and safety regulations",
    "Other",
  ];




  const [openDate, setOpenDate] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2026);

  return (
    <>
      <NavClone />
      <SubNav />
    <div className="hr-comp-wrapper">
      <NavLink to="/hr"  style={{textDecoration:"none"}}>
        <span className="hr-comp-back">← Back</span>
      </NavLink>

      <h2 className="hr-comp-title">File a Complaint</h2>
      <p className="hr-comp-subtitle">
        File a complaint on behalf of an employee or against an employee
      </p>

      {/* ===== TOGGLE: EMPLOYEE / COMPANY ===== */}
      <div className="hr-comp-toggle">
        <button
          type="button"
          className={complaintFor === "employee" ? "active" : ""}
          onClick={() => setComplaintFor("employee")}
        >
          For Employee
        </button>
        <button
          type="button"
          className={complaintFor === "company" ? "active" : ""}
          onClick={() => setComplaintFor("company")}
        >
          On behalf of the company
        </button>
      </div>

      {/* ===== FOR EMPLOYEE FLOW ===== */}
      {complaintFor === "employee" && (
        <>
          <label className="hr-comp-label">Select Complainant*</label>
          <div
            className="hr-comp-input hr-comp-click"
            onClick={() => setShowModal(true)}
          >
            {selectedEmployee ? selectedEmployee.name : "Select Employee"}
          </div>

          <div className="hr-comp-toggle">
            <button
              type="button"
              className={aboutEmployee === "general" ? "active" : ""}
              onClick={() => setAboutEmployee("general")}
            >
              General Complaint
            </button>
            <button
              type="button"
              className={aboutEmployee === "employee" ? "active" : ""}
              onClick={() => setAboutEmployee("employee")}
            >
              An Employee
            </button>
          </div>

          {aboutEmployee === "employee" && (
            <>
              <label className="hr-comp-label">
                Select employee you want to make complaint about*
              </label>
              <div
                className="hr-comp-input hr-comp-click"
                onClick={() => setShowModal(true)}
              >
                {selectedEmployee
                  ? selectedEmployee.name
                  : "Select Employee"}
              </div>
            </>
          )}
        </>
      )}

      {/* ===== COMPANY FLOW ===== */}
      {complaintFor === "company" && (
        <>
          <label className="hr-comp-label">Select Employee*</label>
          <div
            className="hr-comp-input hr-comp-click"
            onClick={() => setShowModal(true)}
          >
            {selectedEmployee ? selectedEmployee.name : "Select Employee"}
          </div>
        </>
      )}

      {/* ===== COMPLAINT TYPE (UPDATED) ===== */}
      <label className="hr-comp-label">Select Complaint Type*</label>

      <div className="hr-custom-select">
        <div
          className="hr-custom-select-trigger"
          onClick={() =>
            setShowComplaintDropdown(!showComplaintDropdown)
          }
        >
          {selectedComplaint || "Select complaint type*"}
          <span className="arrow">▾</span>
        </div>

        {showComplaintDropdown && (
          <div className="hr-custom-select-menu">
            {complaintOptions.map((item, index) => (
              <div
                key={index}
                className="hr-custom-option"
                onClick={() => {
                  setSelectedComplaint(item);
                  setShowComplaintDropdown(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== FREQUENCY TOGGLE ===== */}
      <div className="hr-comp-toggle">
        <button
          type="button"
          className={frequency === "one-time" ? "active" : ""}
          onClick={() => setFrequency("one-time")}
        >
          One Time
        </button>
        <button
          type="button"
          className={frequency === "repeat" ? "active" : ""}
          onClick={() => setFrequency("repeat")}
        >
          Repeat Behavior
        </button>
      </div>

      {frequency === "repeat" && (
        <>
          <label className="hr-comp-label">
            Most Recent Date of Incident*
          </label>
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
        </>
      )}

      {/* ===== DESCRIPTION ===== */}
      <label className="hr-comp-label">Description*</label>
      <textarea className="hr-comp-textarea" />

      {/* ===== FILE UPLOAD ===== */}
      <div className="hr-comp-upload">
        <label className="hr-comp-upload-box">
          Add Document or Image
          <input
            type="file"
            multiple
            hidden
            accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
        </label>

        {files.map((file, i) => (
          <div key={i} className="hr-comp-file">
            {file.name}
            <button type="button" onClick={() => removeFile(i)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ===== ACTIONS ===== */}
      <div className="hr-comp-actions">
        <button className="hr-comp-cancel">Cancel</button>
        <button
          className="hr-comp-primary-btn"
          onClick={() => console.log("SUBMIT")}
        >
          File Complaint
        </button>
      </div>

      {/* ===== EMPLOYEE MODAL ===== */}
      {showModal && (
        <div className="hr-modal-overlay">
          <div className="hr-modal">
            <div className="hr-modal-header">
              <h3>Select Employee</h3>
              <span onClick={() => setShowModal(false)}>×</span>
            </div>

            <div className="hr-modal-list">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  className="hr-modal-item"
                  onClick={() => handleSelectEmployee(emp)}
                >
                  <div className="hr-emp-left">
                    <img
                      src={emp.img}
                      alt={emp.name}
                      className="hr-emp-avatar"
                    />
                    <div>
                      <div className="hr-emp-name">{emp.name}</div>
                      <div className="hr-emp-role">{emp.role}</div>
                    </div>
                  </div>
                  <div className="hr-emp-dept">{emp.dept}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default HrFileComp;
