import classes from './social-media-contacts.module.css'

function SocialContact(props){

    function handleClick() {
        window.open(props.link, '_blank', 'noopener,noreferrer');
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    }

    const altText = props.platform 
        ? `${props.platform} - ${props.pltname || 'profile'}` 
        : 'Social media link';

    return (
        //This contains the content boxes for the Contact Me page.
        <div className={classes.sm_container}>
            <div>
                <img 
                    className={classes.pic} 
                    src={props.pic} 
                    alt={altText}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open ${props.platform || 'social media'} profile`}
                />
            </div>
        </div>
    )
}

export default SocialContact