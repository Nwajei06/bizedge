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
            <h4>View Record Of Employee Complaints</h4>
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
            <h4>Setup Investigation & Assign Investigation Managers</h4>
            <p>
              Assign assets to departments, employees or to a location.
            </p>
          </div>

          {/* RIGHT – investigation card */}
          <div className="investigation-card">
            <div className="investigation-header">
              <strong>Complaint Type : Persistent Lateness</strong>
            </div>

            <div className="investigation-tabs">
              <span className="active">Collaborators</span>
              <span>Meetings</span>
              <span>Notes</span>
            </div>

            <div className="investigation-user">
              <img src="https://i.pravatar.cc/32?img=5" alt="" />
              <div>
                <strong>Animashaun Adeeko</strong>
                <div>Lead Designer</div>
              </div>
              <span className="role-pill">Investigation Manager</span>
            </div>

            <div className="investigation-user">
              <img src="https://i.pravatar.cc/32?img=15" alt="" />
              <div>
                <strong>Queens Jonah</strong>
                <div>Head, Welfare</div>
              </div>
              <span className="role-pill muted">Witness</span>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE ONLY — NO CARD */}
      <div className="overview-image-wrap">
        <img
          src="/images/bizedge-admin.png"
          alt="Complaints table"
          className="overview-image"
        />
      </div>

    </section>
  );
}

export default OverviewSection;
