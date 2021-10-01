import React from 'react'
import './Projects.css'
import Slide from "react-reveal";
import Work from '../Work/Work'

function Works() {

    const [workProps, setWorkProp] = React.useState(
        {
            workTitle: { first: 'Bluberries shop', second: 'Duroos', third: 'My Resume', furth: 'Events & wishes' },
            workDescription: {
                first: 'This website is an e-commerce website developed using React. The website was developed for blueberries ice cream shop in Nazareth.',
                second: 'Developed a digital education platform for teachers and students that connects teachers and students. This project refers to Tik tak company.',
                third: 'This project represents my resume as a website.',
                furth: 'This website make users open an event and other users can send wishes to him, every user can see the wishes that he received any time, The user keep all events and wishes in one place like memory box.'
            },
            githubLink: { first: 'https://github.com/WebAhead8/Blueberries-Shop', second: 'https://github.com/WebAhead8/duroos-frontend', third: 'https://github.com/hadi1616/myResume', furth: 'https://github.com/WebAhead8/EventsApp-frontend' },
            websiteLink: { first: 'https://blueberries.netlify.app/', second: 'https://eager-bhabha-b18fe5.netlify.app', third: '', furth: 'https://eventsandwishes.netlify.app/' }
        }
    )
    return (
        <div className={'projectContainer'}>
            <h1 className={'h1Project'}>Check out my projects</h1>
            {/* <hr size="4.5" width="25%" color="#BSSae08d"/> */}
            <div className={'WorksContainer'}>

                <Slide top duration={1100}>
                    <Work workTitle={workProps.workTitle.first} githubLink={workProps.githubLink.first} websiteLink={workProps.websiteLink.first} workDescription={workProps.workDescription.first} />
                </Slide>

                <Slide bottom duration={1100}>
                    <Work workTitle={workProps.workTitle.second} githubLink={workProps.githubLink.second} websiteLink={workProps.websiteLink.second} workDescription={workProps.workDescription.second} />
                </Slide>

                <Slide top duration={1100}>
                    <Work workTitle={workProps.workTitle.third} githubLink={workProps.githubLink.third} websiteLink={workProps.websiteLink.third} workDescription={workProps.workDescription.third} />
                </Slide>


                <Slide bottom duration={1100}>
                    <Work workTitle={workProps.workTitle.furth} githubLink={workProps.githubLink.furth} websiteLink={workProps.websiteLink.furth} workDescription={workProps.workDescription.furth} />
                </Slide>


            </div>
        </div>
    )
}

export default Works