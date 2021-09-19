import Navbar from '../NavBar/NavBar'
import '../Work/Work.css'

function Work({workTitle , githubLink ,websiteLink ,workDescription  }) {

    return (
        <div className={'WorkContainer'}>
            <h2>{workTitle}</h2>
            <hr size="2.5" width="60%" color="#A6A4A4"/>
            <p className={'pColor'}>{workDescription}</p>
            <div className={'LinkContainer'}>
            <h4><a href={websiteLink} className={'Link'}>Website Link</a></h4>
            <h4><a href={githubLink} className={'Link'}>Github Repository</a></h4>
            </div>
        </div>
    )
}

export default Work