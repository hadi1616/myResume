import React from 'react'
import '../About/About.css'
import personalImg from '../../image/linkedin pic3.jpeg'
import { Button } from 'reactstrap';
import jsPDF from 'jspdf'
import myResume from '../Resume/Hadi_Moallem_Resume (3).pdf'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Slide from "react-reveal";
import LightSpeed from "react-reveal";


function About() {


        const [selfInformation, setSelfInformation] = React.useState({ fullName: 'Full Name : ', name: 'Hadi Moallem', address: 'Address : ', livingLocation: 'Haifa', phone: 'Phone Number : ', phoneNumber: '0528112984', Email: 'Email : ', gmail: 'hadimoallem1999@gmail.com' });
        const [aboutMe ,setAbouMe] = React.useState({First:'Practical engineer with high motivation and passion for succeeding and  progressing, excellent',Sec:'communication skills with team members , high responsibility.',Third:'Looking for entry level positions in the Front-end , Back-end , Full stack developer'})


        function pdfGenerate() {
                var doc = new jsPDF();
                doc.addPage(myResume, 'PDF')
        }


        const useStyles = makeStyles((theme) => ({
                root: {
                        display: 'flex',
                        '& > *': {
                                margin: theme.spacing(1),
                        },
                },

                large: {
                        width: theme.spacing(14),
                        height: theme.spacing(14),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                },
        }));


        const classes = useStyles();

        return (
                <div className='aboutMeContainer'>
                        <Slide top duration={1100}>
                                <h1 className={'aboutmeH1'}>About Me</h1>
                        </Slide>
                        <div className={'container'}>

                                <div className={'AvatarDiv'}>
                                        <Avatar alt="Remy Sharp" src={personalImg} className={classes.large} />
                                </div>

                                {/* <div className={'aboutMe'}> */}
                                        <p className={'aboutMe'}>{aboutMe.First} <br />{aboutMe.Sec}<br /> <div className={'lookingFor'}>{aboutMe.Third}</div></p>
                                {/* </div> */}


                                <h1 className={'contactMeH1'}><LightSpeed top cascade>Contact Info</LightSpeed></h1>

                                <div className={'ContactMeContainer'}>
                                        {/* <p className={'ContactMeSecContainer'}> */}
                                                <span className={'ContactMe'}>{selfInformation.name}</span>
                                                <span className={'ContactMe'}>{selfInformation.livingLocation}</span>
                                                <span className={'ContactMe'}>{selfInformation.phoneNumber}</span>
                                                <span className={'ContactMe'}>{selfInformation.gmail}</span>
                                        {/* </p> */}

                                </div>


                                <button onClick={pdfGenerate} className={'downloadButton'} > <a style={{ textDecoration: 'none' }} href='./Hadi_Moallem_CV(3).pdf' download='Hadi_Moallem_CV.pdf' className={'downloadCVButton'}> Download Resume</a></button>

                        </div>
                </div>
             
        )
}

export default About;



{/* <Button onClick={pdfGenerate} className={'downloadButton'} > <a style={{ textDecoration: 'none' }} href='./Hadi_Moallem_CV(3).pdf' download='Hadi_Moallem_CV.pdf' className={'downloadCVButton'}> Download Resume</a></Button> */}
