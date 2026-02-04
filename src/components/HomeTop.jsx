import { useEffect, useState } from "react";
// import "./home.css";

function HomeTop() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000); // update every minute
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
    <section className="home-top">
      {/* LEFT */}
     <div className="card attendance-card">
  <p className="attendance-title">Daily Attendance</p>
  <p className="attendance-date">Wednesday 27th, 2021</p>

  <div className="attendance-toggle">
    <span>Remote</span>
    <span className="active">On-Site</span>
  </div>

  <p className="greeting">Good Morning</p>

  <div className="time-boxes">
    <span>0</span>
    <span>9</span>
    <span className="colon">:</span>
    <span>3</span>
    <span>0</span>
  </div>

  <div className="clock-hint">Clock in time&nbsp;&nbsp;00:00</div>

  <button className="clock-btn">Clock in</button>

  <p className="status">
    Status: <span className="present">Present</span>
  </p>
</div>


      {/* MIDDLE */}
      <div className="card activity-card">
        <h3>
          Activity <span className="count">5</span>
        </h3>

        {activities.map((item, i) => (
          <div className="activity-row" key={i}>
            <p>{item.text}</p>
            <span className="action">{item.action}</span>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="card celebration-card">
        <h3>Celebration</h3>
        <span className="pill">Birthdays</span>

        <div className="birthday-row">
          <img src="https://i.pravatar.cc/40?img=11" alt="" />
          <div>
            <strong>John Micheal</strong>
            <p>Leader Designer</p>
          </div>
          <span className="date-pill">Jan 23</span>
        </div>

        <div className="birthday-row">
          <img src="https://i.pravatar.cc/40?img=12" alt="" />
          <div>
            <strong>John Micheal</strong>
            <p>Leader Designer</p>
          </div>
          <span className="date-pill">Jan 23</span>
        </div>
      </div>
    </section>
  );
}

export default HomeTop;
