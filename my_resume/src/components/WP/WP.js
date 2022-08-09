import '../Work/Work.css'

function WP({workTitle ,websiteLink ,workDescription  }) {

    function webSiteRedirectionFunction(){
        window.open(websiteLink);
    }

    return (
        <div className={'WorkContainer'}>
            <h2 className='h2'>{workTitle}</h2>
            <hr size="2.5" width="64%" color="#A6A4A4"/>
            <p className={'pColor'}>{workDescription}</p>
            <p  className={'Link'} onClick={webSiteRedirectionFunction}>website</p>
        </div>
    )
}

export default WP