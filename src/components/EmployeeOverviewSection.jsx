function OverviewSection() {
  return (
    <section className="overview-wrap">

      {/* ROW 1 */}
      <div className="overview-card">
        <div className="overview-row">

          {/* LEFT – complaint previews */}
          <div>
            <div className="complaint-preview warning">
              <div>
                <div className="complaint-title">
                  Complaint Type : Persistent Lateness
                </div>
                <div className="complaint-user">
                  <img src="https://i.pravatar.cc/40?img=12" alt="" />
                  <div>
                    <strong>Jayrock Ollie</strong>
                    <div>Operations Assistant</div>
                  </div>
                </div>
              </div>
              <span className="status-pill warning">Under Investigation</span>
            </div>

            <div className="complaint-preview success">
              <div>
                <div className="complaint-title">
                  Complaint Type : Hostile work environment
                </div>
                <div className="complaint-user">
                  <img src="https://i.pravatar.cc/40?img=32" alt="" />
                  <div>
                    <strong>Sarah Allison</strong>
                    <div>HR Officer</div>
                  </div>
                </div>
              </div>
              <span className="status-pill success">Resolved</span>
            </div>
          </div>

          {/* RIGHT – text */}
          <div className="overview-text">
            <h2>View Record Of Employee Complaints</h2>
            <p>
              Asides from our default asset types, you can create your own
              unique asset type for easier tracking of your assets.
            </p>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="overview-card">
        <div className="overview-row reverse">

          {/* LEFT – text */}
          <div className="overview-text">
            <h2>Setup Investigation & Assign Investigation Managers</h2>
            <p>
              Assign assets to departments, employees or to a location.
            </p>
          </div>

          {/* RIGHT – investigation card */}
          <div className="investigation-card figma-investigation">

            {/* HEADER */}
            <div className="investigation-header figma-header">
              <div className="complaint-title">
                Complaint Type : Persistent Lateness
              </div>

              <div className="complaint-user">
                <img src="https://i.pravatar.cc/32?img=12" alt="" />
                <div>
                  <strong>Jayrock Ollie</strong>
                  <div>Operations Assistant</div>
                </div>
              </div>
            </div>

            {/* TABS */}
            <div className="investigation-tabs figma-tabs">
              <span className="active">Collaborators</span>
              <span>Meetings</span>
              <span>Notes</span>
            </div>

            {/* USERS */}
            <div className="investigation-user success">
  <img src="https://i.pravatar.cc/32?img=5" alt="" />
  <div>
    <strong>Animashaun Adeeko</strong>
    <div>Lead Designer</div>
  </div>

  <span className="role-pill">Investigation Manager</span>

  <button className="user-menu">⋮</button>
</div>

<div className="investigation-user success">
  <img src="https://i.pravatar.cc/32?img=15" alt="" />
  <div>
    <strong>Queens Jonah</strong>
    <div>Head, Welfare</div>
  </div>

  <span className="role-pill muted">Witness</span>

  <button className="user-menu">⋮</button>
</div>



          </div>
        </div>
      </div>


      {/* ROW 3 */}
<div className="overview-card">
  <div className="overview-row">

    <img
      src="/images/bizedge-admin.png"
      alt="Complaints table"
      className="overview-image"
    />

    <div className="overview-text">
      <h2>Manage Employee Complaints</h2>
      <p>
        Keep track of your assets maintenance and get up to date reminders
        on upcoming or overdue maintenance schedules.
      </p>
    </div>

  </div>
</div>


    </section>
  );
}

export default OverviewSection;
