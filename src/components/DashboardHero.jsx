function DashboardHero() {
  return (
    <section className="hero-card">
      <div className="hero-content">

        {/* Left */}
        <div className="hero-text">
          <h2>Welcome to Case Management</h2>
          <p>
            Bring simplicity to managing, investigating and resolving
            employee complaints. Keep records of all employee complaints
            over time.
          </p>

          <button className="btn-primary">File A Complaint</button>
        </div>
        

        {/* Right */}
        <div className="hero-stats">

          {/* Chart 1 */}
          <div className="stat-card">
            <div className="stat-header">
              <h4>Complaints Distribution</h4>
              <span>Here is a breakdown by case status</span>
            </div>

            <div className="donut-wrap">
              <div className="donut donut-status">
                <div className="donut-center">
                  <strong>36</strong>
                  <span>Complaints</span>
                </div>
              </div>
            </div>

            <div className="legend">
              <div><i className="dot resolved"></i> Resolved</div>
              <div><i className="dot investigation"></i> Investigation</div>
              <div><i className="dot pending"></i> Pending</div>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="stat-card">
            <div className="stat-header">
              <h4>Complaint Type Distribution</h4>
              <span>Here is a breakdown of gender distribution</span>
            </div>

            <div className="donut-wrap">
              <div className="donut donut-type"></div>
            </div>

            <div className="legend">
              <div><i className="dot absenteeism"></i> Absenteeism</div>
              <div><i className="dot bullying"></i> Bullying</div>
              {/* <div><i className="dot harassment"></i> Sexual harassment</div> */}
              {/* <div><i className="dot insubordination"></i> Insubordination</div>
              <div><i className="dot lateness"></i> Lateness</div>
              <div><i className="dot unspecified"></i> Not Specified</div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DashboardHero;