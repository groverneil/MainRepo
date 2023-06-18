import classes from './social-media-contacts.module.css'

function SocialContact(props){

    function testClick() {

        window.open(props.link);

        //function to open the link associated with the visit button.

    }

    return (

        //This contains the content boxes for the Contact Me page.

        <div className= {classes.sm_container}>
            <div>
                <img className = {classes.pic} src= {props.pic} alt = "Media Logo" onClick={testClick}/>
            </div>
        </div>
    )
}

export default SocialContact