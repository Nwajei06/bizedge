
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";


function TimeoffSection() {
  return (
    <section className="timeoff-wrapper">
      <div className="timeoff-layout">
        {/* LEFT COLUMN */}
        <div className="timeoff-left">
          {/* TIMEOFF */}
          <div className="card">
            <div className="timeoff-header">
              <h3>Timeoff</h3>

              <div className="dropdown">
                <button className="btn-primary">
                  Request Other Timeoffs ⌄
                </button>

                <div className="dropdown-menu">
                  <div>Maternity Timeoff</div>
                  <div>Paternity Timeoff</div>
                  <div>Pet Time</div>
                </div>
              </div>
            </div>

            <div className="timeoff-cards">
              <div className="timeoff-card">Annual Timeoff</div>
              <div className="timeoff-card">Sick Timeoff</div>
              <div className="timeoff-card">Pet Time</div>
            </div>
          </div>

        
          {/* BENEFITS */}
          <>
          <h2 className="benefits-title">Benefits</h2>
          <div className="b-card">
            {/* <div className="align"> */}
            <div className="benefit-card">
              <div className="b-center">
                <img style={{width:"90px"}} src="/images/familyhealth.png" alt="imgvector" />
                <div>
                  <strong>Family Healthcare Plan</strong>
                  <p>Leadway & Associates  <br /> <span style={{ fontSize: "smaller", fontWeight:"bold", color:"#878787" }}> 3 Dependent</span></p>
                </div>
                 </div>
                <NavLink className="globe" to="/"> <button> <FontAwesomeIcon icon={faGlobe} />
                  View Website</button></NavLink>
                <NavLink className="b-view" to="/"> <button>
                  View </button></NavLink>
             

            </div>

            <div className="benefit-card">
              <div className="b-center">
              <img style={{width:"90px"}}  src="/images/leadway.png" alt="imgvector" />
              <div>
                <strong>Leadway Pension</strong>
                <p>Leadway & Associates  <br /> <span style={{ fontSize: "smaller",fontWeight:"bold", color:"#878787" }}> 1 Dependent</span></p>
                {/* <a href="#">Visit Website</a> */}
                </div>
                </div>
                <NavLink className="globe2"to="/"> <button> <FontAwesomeIcon icon={faGlobe} />
                  View Website</button></NavLink>
                <NavLink className="b-view"to="/"> <button>  View </button></NavLink>
              
            </div>
            {/* </div> */}
          </div>
        </>

        </div>


        {/* RIGHT COLUMN */}
        <div className="timeoff-right">
          {/* TIMEOFF RECORD */}
          <div className="card record-scroll">
            <h3>Timeoff Record</h3>

            <div className="record-row"  style={{background: "#FEF6E6"}}>
              <img src="https://i.pravatar.cc/40" alt="" />
              <div>
                <strong >John Micheal</strong>
                <p>Leader Designer</p>
              </div>
              <span className="pill-warning">2 Days</span>
            </div>

            <div className="record-row" style={{background: "#FEF6E6"}}>
              <img src="https://i.pravatar.cc/41" alt="" />
              <div>
                <strong>John Micheal</strong>
                <p>Leader Designer</p>
              </div>
              <span className="pill-warning">2 Days</span>
            </div>
          </div>

          {/* MY TEAMS */}
          <div className="card team-scroll">
            <h3>My Teams</h3>

            {[1, 2, 3, 4].map((_, i) => (
              <div className="team-row" key={i}>
                <img src={`https://i.pravatar.cc/40?img=${i}`} alt="" />
                <div>
                  <strong>John Micheal</strong>
                  <p>Founder</p>
                </div>
                <button className="btn-light">Contact</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default TimeoffSection;
