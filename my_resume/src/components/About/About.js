import React from 'react'
import '../About/About.css'
import personalImg from '../../image/linkedin pic3.jpeg'
import { Button } from 'reactstrap';
import jsPDF from 'jspdf'
import myResume from '../Resume/Hadi_Moallem_Resume (3).pdf'
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Slide from "react-reveal";


function About() {


        const [selfInformation, setSelfInformation] = React.useState({ fullName: 'Full Name : ', name: 'Hadi Moallem', address: 'Address : ', livingLocation: 'Haifa', phone: 'Phone Number : ', phoneNumber: '0528112984', Email: 'Email : ', gmail: 'hadimoallem1999@gmail.com' });

        function pdfGenerate() {
                var doc = new jsPDF();
                doc.addPage(myResume, 'PDF')
                // doc.save('Hadi_Moallem_Resume.pdf')
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
                <>
                        <Slide right duration={1100}>
                                <h1 className={'aboutmeH1'}>About Me</h1>
                        </Slide>
                        <div className={'container'}>

                                <Slide right duration={1100}>
                                        <div className={'AvatarDiv'}>
                                                <Avatar alt="Remy Sharp" src={personalImg} className={classes.large} />
                                        </div>
                                </Slide>

                                <Slide right duration={1100}>
                                        <div className={'aboutMe'}>
                                                <p>Practical engineer with high motivation and passion for succeeding and  progressing, excellent <br />communication skills with team members , high responsibility.<br /> <div className={'lookingFor'}>Looking for entry level positions in the Front-end , Back-end , Full stack developer</div></p>
                                        </div>

                                </Slide>

                                <Slide right duration={1100}>
                                        <h1 className={'contactMeH1'}>Contact Info</h1>

                                        <div className={'ContactMeContainer'}>
                                                <p className={'ContactMeSecContainer'}>

                                                        {/* <span className={'ContactMe'}>{selfInformation.fullName + selfInformation.name}</span>
                                                <span className={'ContactMe'}>{selfInformation.address + selfInformation.livingLocation}</span>
                                                <span className={'ContactMe'}>{selfInformation.phone + selfInformation.phoneNumber}</span>
                                                <span className={'ContactMe'}>{ selfInformation.Email + selfInformation.gmail}</span> */}

                                                        {/* <span className={'ContactMe'}><b className={'infoAboutMe'}>Full Name </b>{ selfInformation.name}</span>
                                                <span className={'ContactMe'}><b className={'infoAboutMe'}>Address </b>{ selfInformation.livingLocation}</span>
                                                <span className={'ContactMe'}><b className={'infoAboutMe'}>Phone Number </b>{ selfInformation.phoneNumber}</span>
                                                <span className={'ContactMe'}><b className={'infoAboutMe'}>Gmail : </b> {` ${"    "} ` + selfInformation.gmail}</span> */}

                                                        <span className={'ContactMe'}>{selfInformation.name}</span>
                                                        <span className={'ContactMe'}>{selfInformation.livingLocation}</span>
                                                        <span className={'ContactMe'}>{selfInformation.phoneNumber}</span>
                                                        <span className={'ContactMe'}>{selfInformation.gmail}</span>
                                                </p>

                                        </div>
                                </Slide>


                                <Slide right duration={1100}>
                                        <Button onClick={pdfGenerate} className={'downloadButton'}> <a href='./Hadi_Moallem_CV(3).pdf' download='Hadi_Moallem_CV.pdf' className={'downloadCVButton'}>Download resume</a></Button>
                                        
                                </Slide>
                        </div>
                </>
        )
}

export default About;