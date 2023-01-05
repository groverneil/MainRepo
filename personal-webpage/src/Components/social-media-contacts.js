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
                <img className = {classes.pic} src= {props.pic} alt = "Media Logo"/>
            </div>
            <div>
                <h1 className={classes.heading}>{props.platform}</h1>
            </div>
            <div>
                <p className = {classes.name} >{props.pltname}</p>
            </div>
            <div>
                <button className= {classes.copy} onClick = {testClick} >Visit</button>
            </div>
        </div>
    )
}

export default SocialContact