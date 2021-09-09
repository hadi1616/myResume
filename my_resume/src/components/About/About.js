import Navbar from '../NavBar/NavBar'
import '../About/About.css'
import personalImg from '../../image/linkedin pic3.jpeg'
import { Button } from 'reactstrap';
import jsPDF from 'jspdf'
import myResume from '../Resume/Hadi_Moallem_CV.pdf'


import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Slide from "react-reveal";


function About() {

        function pdfGenerate() {
                var doc = new jsPDF('landscape', 'px', 'a4', 'false');
                doc.addPage(myResume, 'PDF', 65, 20, 500, 400)
                doc.save('Hadi_Moallem_Resume.pdf')
        }


        const useStyles = makeStyles((theme) => ({
                root: {
                        display: 'flex',
                        '& > *': {
                                margin: theme.spacing(1),
                        },
                },

                large: {
                        width: theme.spacing(20),
                        height: theme.spacing(20),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                },
        }));


        const classes = useStyles();

        return (

                <div className={'container'}>

                        {/* <img className={'personalPic'} src={personalImg} /> */}
                        <Slide top duration={1100}>
                                <div className={'AvatarDiv'}>
                                        <Avatar alt="Remy Sharp" src={personalImg} className={classes.large} />
                                </div>
                        </Slide>
                        <Slide top duration={1100}>
                                <div className={'aboutMe'}>
                                        <p>Practical engineer with high motivation and passion for succeeding and  progressing, excellent <br />communication skills with team members , high responsibility.<br /> <div className={'lookingFor'}>Looking for entry level positions in the Front-end , Back-end , Full stack developer</div></p>
                                </div>
                                {/* <button><a href="../Resume/Hadi_Moallem_CV.pdf" download> Download CV</a></button> */}

                        </Slide>
                        <Slide top duration={1100}>
                                <Button onClick={pdfGenerate} className={'downloadButton'}> Download resume</Button>
                        </Slide>

                </div>
        )
}

export default About;