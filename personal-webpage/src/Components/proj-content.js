function ProjectContainer(props){

    //This content box is used in the projects page.

    return (

        <div className="main-container">
            <div className="content_container_proj">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            {/* 
            If you have a presentation flag as TRUE use that else use the image
            */}
            {props.presentation
            ?
            <div className="present">
                <iframe 
                src="https://docs.google.com/presentation/d/1TiIlbI5TDcXfKcH7oDqx8n0WW34SQdqzGStZ75isNvE/embed?start=false&loop=false&delayms=3000" 
                title="FASO Presentation"
                frameborder="0" 
                width="960" 
                height="569" 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"></iframe>
            </div> 
            :
            <div className="image-container_proj">
            <img src={props.pic} alt="Tis moi" />
            </div>
            }
        </div>
    )
    
}

export default ProjectContainer