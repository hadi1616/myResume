import NavBar2 from "./NavBar2.css";
import { useHistory } from "react-router-dom";

function Navbar2(){

    let history = useHistory();

return(
    <div className="Navbar">

    <span className="HomeButton" onClick={(e) => { history.push("/");
        document.getElementsByClassName("HomeButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("AboutButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("EducationButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ProjectsButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ExperienceButton")[0].style.color='#FFFFFF';}}>Home
    </span>


    <span className="AboutButton" onClick={(e) => { history.push("/about")
        document.getElementsByClassName("AboutButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("EducationButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ProjectsButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ExperienceButton")[0].style.color='#FFFFFF';}}>About & Resume 
    </span>



    <span className="EducationButton" onClick={(e) => { history.push("/education");
        document.getElementsByClassName("EducationButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("AboutButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ProjectsButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ExperienceButton")[0].style.color='#FFFFFF'; }}>Education
    </span>



    <span className="ProjectsButton" onClick={(e) => { history.push("/projects");
        document.getElementsByClassName("ProjectsButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("AboutButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("EducationButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ExperienceButton")[0].style.color='#FFFFFF';}}>Projects
    </span>

    <span className="ExperienceButton" onClick={(e) => { history.push("/experience"); 
        document.getElementsByClassName("ExperienceButton")[0].style.color='#f5a25a';
        document.getElementsByClassName("HomeButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("AboutButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("ProjectsButton")[0].style.color='#FFFFFF';
        document.getElementsByClassName("EducationButton")[0].style.color='#FFFFFF';}}>Experience
    </span>
    </div>
)

}

export default Navbar2;