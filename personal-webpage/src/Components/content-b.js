
function ContentBox (props){

    // This component box is going to be used on the homepage.

    return (

        <div className="main-container">
            <div className="content_container">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className={props.isPersonal ? "image-container-personal" : "image-container"}>
            <img src={props.pic} alt="Tis moi" />
            </div>
        </div>
    )

}

export default ContentBox