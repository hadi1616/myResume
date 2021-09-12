import Navbar from '../NavBar/NavBar'
import '../Work/Work.css'

function Work({workTitle , workDescription}) {

    return (
        <div className={'WorkContainer'}>
            <h2>{workTitle}</h2>
            <hr size="2.5" width="60%" color="#A6A4A4"/>
            <p className={'pColor'}>{workDescription}</p>

        </div>
    )
}

export default Work