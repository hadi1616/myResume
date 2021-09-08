import Navbar from '../NavBar/NavBar'
import '../About/About.css'
import personalImg from '../../image/linkedin pic.jpeg'
import { Button } from 'reactstrap';
import jsPDF from 'jspdf'
import myResume from '../Resume/Hadi_Moallem_CV.pdf'

{/* <Navbar/> */ }

// var body = document.body,
//         html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//         html.clientHeight, html.scrollHeight, html.offsetHeight);
function About() {

        function pdfGenerate() {
                var doc = new jsPDF('landscape', 'px', 'a4', 'false');
                doc.addPage(myResume, 'PDF', 65, 20, 500, 400)
                doc.save('resume.pdf')
        }

        return (
                <div className={'container'}>
                        <img className={'personalPic'} src={personalImg} />
                        <div className={'aboutMe'}>
                                <p>Practical engineer with high motivation and passion for succeeding and  progressing, excellent <br />communication skills with team members , high responsibility.<br /> <div className={'lookingFor'}>Looking for entry level positions in the Front-end , Back-end , Full stack developer</div></p>
                        </div>
                        {/* <button><a href="../Resume/Hadi_Moallem_CV.pdf" download> Download CV</a></button> */}

                        <Button onClick={pdfGenerate} className={'downloadButton'}> Download resume</Button>
                </div>
        )
}

export default About;