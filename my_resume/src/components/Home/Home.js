import React from 'react'
import Navbar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
// import homeBackgroundPic from '../../image/testimonials.jpg'
import git from '../../image/9919.png'
import linkedin from '../../image/linkedin2.png'
import gmail from '../../image/gmail3.jpg'
import '../Home/Home.css'
import { useHistory } from "react-router-dom";
import SendEmail from '../SendEmail/SendEmail';

function Home() {

    const [fullName, setFullName] = React.useState("Hadi Moallem .")
    let history = useHistory();

    function linkedinRedirect(){
        window.open('https://www.linkedin.com/in/hadi-moallem-2656121b5/', "_blank")
    }
    function githubRedirect(){
        window.open('https://github.com/hadi1616', "_blank")
    }
    function gmailRedirect(){
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnptrMqkWGTRDJdMBzHvrCCnNhpxsqKbRGWWklfZNQzFrMfDzjVdHSstMMFqqVDpPVGrQb', "_blank")
    }

    return (
        <div className={'MainContainer'}>
            {/* <Navbar className={'navBar'}/> */}

            <div className={'SceContainer'}>
                <div className={'H12'}>
                <h1 className={'homePageTitle'} onClick={(e) => { history.push("/about") }}>I'm {fullName}</h1>
                <p className={"personalDescription"}> I'm a Full Stack developer.<br/>
                    I Have knowledge and experience in React, JavaScript, Node.js, Express.js, <br/>CSS and SCSS  also I am with a high level of self-learning skills. Looking for a junior position.</p>
                </div>
                <hr size="2.5" width="45%" color="#A6A4A4" className={'hrLine'}/>
                <div className={'links'}>
                    <img className={'gitIcon'} src={git} alt="gitIcon" onClick={githubRedirect}/>
                    <img className={'linkedin'} src={linkedin} alt="linkedin"  onClick={linkedinRedirect}/>
                    {/* <img className={'gmail'} src={gmail} alt="gmail" onClick={gmailRedirect}/> */}
                    <img className={'gmail'} src={gmail} alt="gmail" onClick={()=>history.push('/sendEmail')}/>
                    
                </div>
            </div>
        </div>
    )
}
export default Home


