import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
// import Resume from './components/Resume/Resume.js'
import Projects from './components/Projects/Projects.js'
import Education from './components/Education/Education.js'
import Experience from './components/Experience/Experience.js'
import SendEmail from './components/SendEmail/SendEmail.js'
import Navbar from "./components/NarBar2/NavBar2";
import '../src/App.css'


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/projects' component={Projects} ></Route>
          <Route exact path='/education' component={Education} ></Route>
          <Route exact path='/experience' component={Experience} ></Route>
          <Route exact path='/sendEmail' component={SendEmail} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;