import React from 'react'
import './Projects.css'
import Slide from "react-reveal";
import Work from '../Work/Work'


function Works() {

    const [workProps, setWorkProp] = React.useState(
        {
            workTitle: { first: 'Bluberries shop', second: 'My Resume', third: 'Draw&Guess game', furth: 'Events & wishes', fifth: 'Duroos' },

            workDescription: {
                first: 'This website is an e-commerce website developed using React. The website was developed for blueberries ice cream shop in Nazareth.',
                second: 'This project represents my resume as a website.',
                third: 'Each player receives a word and draws it without using characters or numbers. The next player guesses the word behind the drawing. Then another player draws the word that he chose! The cycle continues until one of the players exit the game, in the end there is a list if the top 10 players',
                furth: 'This website make users open an event and other users can send wishes to him, every user can see the wishes that he received any time, The user keep all events and wishes in one place like memory box.',
                fifth: 'Developed a digital education platform for teachers and students that connects teachers and students. This project refers to Tik tak company.'
            },

            githubLink: { first: 'https://github.com/WebAhead8/Blueberries-Shop', second: 'https://github.com/hadi1616/myResume', third: 'https://github.com/hadi1616/draw-and-guess-front-end', furth: 'https://github.com/WebAhead8/EventsApp-frontend', fifth: 'https://github.com/WebAhead8/duroos-frontend' },

            websiteLink: { first: 'https://blueberries.netlify.app/', second: 'https://hadi-moallem-resume.netlify.app', third: 'https://draw-guess-words.netlify.app', furth: 'https://eventsandwishes.netlify.app/', fifth: 'https://eager-bhabha-b18fe5.netlify.app' }
        }
    )
    return (
        <div className={'projectContainer'}>
            <Slide top duration={1100}>
                <h1 className={'h1Project'}>Check out my projects</h1>
            </Slide>
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

                <Slide top duration={1100}>
                    <Work workTitle={workProps.workTitle.fifth} githubLink={workProps.githubLink.fifth} websiteLink={workProps.websiteLink.fifth} workDescription={workProps.workDescription.fifth} />
                </Slide>

            </div>
        </div>
    )
}

export default Works