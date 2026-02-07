import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";

import NavClone from "../components/NavClone";
import SubNav from "../components/SubNav";
import HomeHeader from "../components/HomeHeader";
import TimeoffSection from "../components/TimeoffSection";

function HomeTop() {
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState("On-Site");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const activities = [
    { text: "Sam Johnson requested for 5 sick days off", action: "Accept Request" },
    { text: "Sam Johnson requested for 5 sick days off", action: "Accept Request" },
    { text: "Micheal request for 40 Days Annual Leave", action: "View" },
    { text: "Review Mar. 3 2022 – April 27, 2022 Payroll", action: "View" },
    { text: "Set up Performance Goals for March", action: "Set Up" },
  ];

  return (
    <>
      <NavClone />
      <SubNav />
      <HomeHeader />

      {/* MAIN GRID */}
      <section className="home-top">
        {/* ATTENDANCE */}
        <div className="card attendance-card">
          <p className="attendance-title">Daily Attendance</p>
          <p className="attendance-date">Wednesday 27th, 2021</p>

          <div className="attendance-toggle">
            <span
              className={mode === "Remote" ? "active" : ""}
              onClick={() => setMode("Remote")}
            >
              Remote
            </span>
            <span
              className={mode === "On-Site" ? "active" : ""}
              onClick={() => setMode("On-Site")}
            >
              On-Site
            </span>
          </div>

          <div className="attendance-inner">
            <p className="greeting">Good Morning</p>

            <div className="time-boxes">
              <span>{hours[0]}</span>
              <span>{hours[1]}</span>
              <span className="colon">:</span>
              <span>{minutes[0]}</span>
              <span>{minutes[1]}</span>
            </div>

            <div className="clock-hint">Clock in time 00:00</div>
            <button className="clock-btn">Clock in</button>

            <p className="status">
              Status: <span className="present">Present</span>
            </p>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="card activity-card">
          <h3>
            Activity <span className="count">&nbsp;5&nbsp;</span>
          </h3>

          <div className="activity-list">
            {activities.map((item, i) => (
              <div className="activity-row" key={i}>
                <p>{item.text}</p>
                <span className="action">{item.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CELEBRATION */}
        <div className="card celebration-card">
          <h3>Celebration</h3>

          <span className="pill">
            <button className="birth-but">Birthdays</button>
          </span>

          <p className="section-label">Today</p>

          <div className="celebration-scroll">
            {[11, 12, 13, 14, 15].map((img, i) => (
              <div className={`birthday-row ${i === 0 ? "active" : ""}`} key={i}>
                <img src={`https://i.pravatar.cc/40?img=${img}`} alt="" />

                <div className="birthday-info">
                  <strong>John Micheal</strong>
                  <p>Leader Designer</p>
                </div>

                <div className="birthday-right">
                  <FontAwesomeIcon icon={faCakeCandles} className="cake-icon" />
                  <span className="date-pill">Jan 23</span>
                </div>
              </div>
            ))}
          </div>

          <div className="upcoming">
            Upcoming Birthdays <span className="chevron">⌄</span>
          </div>
        </div>
      </section>

      {/* TIMEOFF + SIDE PANELS (NEW SECTION) */}
      <TimeoffSection />
    </>
  );
}

export default HomeTop;
