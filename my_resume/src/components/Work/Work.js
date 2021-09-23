import '../Work/Work.css'

function Work({workTitle , githubLink ,websiteLink ,workDescription  }) {

    function webSiteRedirectionFunction(){
        window.open(websiteLink);
    }

    function githubRedirectionFunction(){
        window.open(githubLink);
    }

    return (
        <div className={'WorkContainer'}>
            <h2>{workTitle}</h2>
            <hr size="2.5" width="64%" color="#A6A4A4"/>
            <p className={'pColor'}>{workDescription}</p>
            <div className={'LinkContainer'}>
            <p  className={'Link'} onClick={webSiteRedirectionFunction}>website</p>
            <p  className={'Link'} onClick={githubRedirectionFunction}>Github Repository</p>
            </div>
        </div>
    )
}

export default Work