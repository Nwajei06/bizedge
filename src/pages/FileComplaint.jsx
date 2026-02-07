import React, { useState } from "react";
import SubNav from "../components/SubNav";
import NavClone from "../components/NavClone";

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
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("HR");
    const [file, setFile] = useState(null);
    const [type, setType] = useState("general");

    return (

        <>
         <NavClone/>   

        <SubNav/>
        <div className="complaint-page">

            <div className="complaint-card">

                <p className="back">← Back</p>
                <h2>File A Complaint</h2>
                <p className="sub">
                    Make a grievance about an employee or general working conditions
                </p>
                {/* divider line */}
                <div className="section-divider" />

                <div className="radio-wrapper">
                    <label
                        className={`radio-item ${type === "general" ? "active" : ""}`}
                        onClick={() => setType("general")}
                    >
                        <span className="radio-circle" />
                        <span className="radio-text">General Complaint</span>
                    </label>

                    <label
                        className={`radio-item ${type === "employee" ? "active" : ""}`}
                        onClick={() => setType("employee")}
                    >
                        <span className="radio-circle" />
                        <span className="radio-text">An Employee</span>
                    </label>
                </div>

                {/* COMPLAINT TYPE */}
                <label className="label">Select complaint type*</label>
                <div className={`select-box ${openComplaint ? "active" : ""}`}>
                    <div
                        className="select-input"
                        onClick={() => setOpenComplaint(!openComplaint)}
                    >
                        {complaintType || "Select complaint type*"}
                        <span className="arrow">⌄</span>
                    </div>

                    {openComplaint && (
                        <div className="select-dropdown">
                            {complaintOptions.map((item, i) => (
                                <div
                                    key={i}
                                    className={`option ${complaintType === item ? "selected" : ""
                                        }`}
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

                {/* DATE */}
                <label className="label">Incident Date (If Date related)</label>
                <input
                    type="date"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                {/* DESCRIPTION */}
                <label className="label">
                    Provide description of complaint in details*
                </label>
                <textarea
                    className="textarea"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {/* VISIBILITY */}
                <div className="visibility-box">
                    <p>Who should be able to see this complaint ?</p>
                    {["HR", "Line Manager", "Both"].map((v) => (
                        <label key={v}>
                            <input
                                type="radio"
                                checked={visibility === v}
                                onChange={() => setVisibility(v)}
                            />
                            <span>{v}</span>
                        </label>
                    ))}
                </div>

                {/* DOCUMENT */}
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
                        <span>📄 {file.name}</span>
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
        </>
    );
}
