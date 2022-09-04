import NavBar2 from "./NavBar2.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Navbar2(){

    let history = useHistory();


useEffect(() => {

    const items = document.querySelectorAll(".nav-item");
    const ind = document.querySelector(".indicator");

    const colorPallette = [
        { background: "#F59E51", foreground: "#ffffff" },
        { background: "#57B8FF", foreground: "#ffffff" },
        { background: "#D33E43", foreground: "#ffffff" },
        { background: "#CC7178", foreground: "#ffffff" },
        { background: "#FE6847", foreground: "#ffffff" }
    ];

function handleIndicator(el) {
  ind.style.backgroundColor = el.dataset.bcolor;
  el.style.color = el.dataset.fcolor;
  ind.style.width = el.offsetWidth + "px";
  ind.style.left = el.offsetLeft + "px";
}

items.forEach((item, index) => {
  item.dataset.bcolor = colorPallette[index].background;
  item.dataset.fcolor = colorPallette[index].foreground;
  item.addEventListener("mousemove", (e) => {
    handleIndicator(e.target);
  });
  item.addEventListener("click", (e) => {
    items.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    document
      .querySelector(".active")
      .style.setProperty("--bc", e.target.dataset.bcolor);
  });
  item.addEventListener("mouseleave", (e) => {
    e.target.style.color = "#fffff";
  });
});

      },[]);



return(
 
  <header class="header">
  <nav class="navbar">
    <ul class="main-nav">
      <li class="nav-item active" onClick={(e) => { history.push("/");}}>Home</li>
      <li class="nav-item" onClick={(e) => { history.push("/about");}}>About</li>
      <li class="nav-item" onClick={(e) => { history.push("/education");}}>Education</li>
      <li class="nav-item" onClick={(e) => { history.push("/projects");}}>Projects</li>
      <li class="nav-item" onClick={(e) => { history.push("/experience");}}>Experience</li>
    </ul>
    <div class="indicator"></div>
  </nav>
</header>
)

}

export default Navbar2;