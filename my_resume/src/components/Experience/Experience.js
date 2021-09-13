import React, { useState } from 'react'
import '../Experience/Experience.css'
import Work from '../Work/Work.js'


function Experience() {

    const [experienceData, setExperienceData] =[
        {
            workTitle: { first: 'Intel Corporation', second: 'Tik Tak' },
            workDescription: { first: 'hello1', second: 'hello2' }
        }
    ]

    return (
        <div className={'ExperienceContainer'}>

            <Work workTitle={`${experienceData.workTitle.first}`} workDescription={`${experienceData.workDescription.first}`} className={'firstJob'}/>
            <Work workTitle={`${experienceData.workTitle.second}`} workDescription={`${experienceData.workDescription.second}`} className={'secondJob'}/>

        </div>
    )
}

export default Experience