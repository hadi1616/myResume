import NavBar2 from "./NavBar2.css";
import { useHistory } from "react-router-dom";

function Navbar2(){

    let history = useHistory();

return(
    <div className="Navbar">
        <span className="HomeButton" onClick={(e) => { history.push("/"); }}>Home</span>
        <span className="AboutButton" onClick={(e) => { history.push("/about")}}>About & Resume </span>
        <span className="EducationButton" onClick={(e) => { history.push("/education"); }}>Education</span>
        <span className="ProjectsButton" onClick={(e) => { history.push("/projects"); }}>Projects</span>
        <span className="ExperienceButton" onClick={(e) => { history.push("/experience"); }}>Experience</span>
    </div>
)

}

export default Navbar2;