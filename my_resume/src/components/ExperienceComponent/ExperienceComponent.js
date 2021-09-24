import '../ExperienceComponent/ExperienceComponent.css'

function ExperienceComponent({workTitle , workDescription}) {

    return (
        <div className={'ExperienceContainer'}>
            <h2>{workTitle}</h2>
            <hr size="2.5" width="25%" color="#A6A4A4"/>
            <p className={'workDescription'}>{workDescription}</p>

        </div>
    )
}

export default ExperienceComponent