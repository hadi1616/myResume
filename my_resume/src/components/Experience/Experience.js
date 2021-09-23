import React, { useState } from 'react'
import '../Experience/Experience.css'
import ExperienceComponent from '../ExperienceComponent/ExperienceComponent.js'
import Slide from "react-reveal";


function Experience() {

    const [experienceData, setExperienceData] =React.useState(
        {
            workTitle: { first: 'Intel Corporation', second: 'Tik Tak' },
            workDescription: { first: 'Maintaining server farms for post silicon validation of Intel Network Interface Cards (NICs). My responsibility is to ensure correct operation of the servers and to support the validation program, this includes handling the hardware, updating and testing the software, debugging of failures and developing automation. The work requires knowledge of the Linux operating system.', 
            second: 'Worked on e-learning platform that connects teachers and students.  Technologies: React.js, Express.js , MongoDB, GitHub.' }
        }
    )

    return (
        <div className={'ExperienceContainer'}>
             <Slide top duration={1100}>
            <h1 className={'ExperienceH1'}>Experience</h1>
            </Slide>
            <Slide right duration={1100}>
            <ExperienceComponent workTitle={`${experienceData.workTitle.first}`} workDescription={`${experienceData.workDescription.first}`} className={'firstJob'}/>
            </Slide>
            <Slide left duration={1100}>
            <ExperienceComponent workTitle={`${experienceData.workTitle.second}`} workDescription={`${experienceData.workDescription.second}`} className={'secondJob'}/>
            </Slide>
        </div>
    )
}

export default Experience