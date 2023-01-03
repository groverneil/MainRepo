
function ContentBox (props){


    return (

        <div className="main-container">
            <div className="content_container">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className="image-container">
            <img src={props.pic} alt="Tis moi" />
            </div>
        </div>
    )

}

export default ContentBox