import classes from './social-media-contacts.module.css'

function SocialContact(props){

    return (

        <div className= {classes.sm_container}>
            <div>
                <img class = {classes.pic} src= {props.pic} alt = "Media Logo"/>
            </div>
            <div>
                <h1 className={classes.heading}>{props.platform}</h1>
            </div>
            <div>
                <p className = {classes.name} >{props.pltname}</p>
            </div>
            <div>
                <button className= {classes.copy} >Visit</button>
            </div>
        </div>
    )
}

export default SocialContact