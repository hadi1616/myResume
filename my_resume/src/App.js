import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Resume from './components/Resume/Resume.js'
import Works from './components/Works/Works.js'
import Contact from './components/Contact/Contact.js'
import SendEmail from './components/SendEmail/SendEmail.js'
import Navbar from "./components/NavBar/NavBar";
import '../src/App.css'


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        {/* <Route exact path='/resume' component={Resume}></Route> */}
        <Route exact path='/works' component={Works} ></Route>
        <Route exact path='/contact' component={Contact} ></Route>
        <Route exact path='/sendEmail' component={SendEmail} ></Route>
      </Switch>
      </div>
    </Router>
  // <div className={"root"}>

  //   <Navbar className={'navBar'}/>
  //     <Home className={'Home'}/>
  //     <About className={'About'}/>
  //     <Resume className={'Resume'}/>
  //     <Works className={'Works'}/>
  //     <Contact className={'Contact'}/>
  //     </div>
    );
  }
  
  export default App;