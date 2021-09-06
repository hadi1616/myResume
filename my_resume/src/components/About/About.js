import Navbar from '../NavBar/NavBar'
import '../About/About.css'
import personalImg from '../../image/linkedin pic.jpeg'


{/* <Navbar/> */ }

function About() {
        var body = document.body,
                html = document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);
        return (
                <div className={'container'}>
                        <img className={'personalPic'} src={personalImg} />
                        <div className={'aboutMe'}>
                                <p>Practical engineer with high motivation and passion for succeeding and  progressing, excellent <br />communication skills with team members , high responsibility.<br /> <div className={'lookingFor'}>Looking for entry level positions in the Front-end , Back-end , Full stack developer</div></p>
                        </div>
                </div>
        )
}

export default About;