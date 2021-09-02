import React from 'react'
import Navbar from '../NavBar/NavBar'
import homeBackgroundPic from '../../image/testimonials.jpg'
import '../Home/Home.css'

function Home() {
    
    const [fullName ,setFullName] = React.useState("Hadi Moallem")


    return (
        <div className={'homePageContainer'}> 
            <Navbar />
            <a href='/about' className={'TitleHref'}><h1 className={'homePageTitle'}>I'm {fullName} </h1></a>
        
        </div>
    )
}

export default Home