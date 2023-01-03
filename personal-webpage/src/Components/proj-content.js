function ProjectContainer(props){

    return (

        <div className="main-container">
            <div className="content_container_proj">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className="image-container_proj">
            <img src={props.pic} alt="Tis moi" />
            </div>
        </div>
    )
    
}

export default ProjectContainer