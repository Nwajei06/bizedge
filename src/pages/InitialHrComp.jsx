import { NavLink } from "react-router-dom";
import NavClone from "../components/NavClone";
import SubNav from "../components/SubNav";

function InitialHrComp() {
  return (
    <>
      <NavClone />
      <SubNav />

      <div className="hr-comp-empty" style={{display:"flex", justifyContent:"center", alignItems:"center",
        flexDirection:"column", marginTop:"100px"
      }}>
        <p className="hr-comp-empty-text">
          You have no complaint records yet
        </p> 

        <NavLink to="/hr-file-complaint">
          <button className="hr-comp-primary-btn" style={{width:"150px  "}}>
            Record a complaint
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default InitialHrComp;
