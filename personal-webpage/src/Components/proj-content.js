function ProjectContainer(props){

    //This content box is used in the projects page.

    return (

        <div className="main-container">
            <div className="content_container_proj">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className="image-container_proj">
                {props.link ? (
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <img src={props.pic} alt={props.title} />
                    </a>
                ) : (
                    <img src={props.pic} alt={props.title} />
                )}
            </div>
        </div>
    )
    
}

export default ProjectContainer