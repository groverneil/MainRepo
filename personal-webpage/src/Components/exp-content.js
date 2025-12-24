function ExpBox(props) {
  return (
    <div className="main-container">
      <div className="content_container_proj">
        <h2>{props.title} <span className="exp-company">@ {props.organization}</span></h2>
        <p className="exp-dates">{props.dates}</p>
        <p>{props.content}</p>
      </div>
      {props.media && (
        <div className="image-container_proj">
          {props.mediaType === 'video' ? (
            <video autoPlay loop muted playsInline>
              <source src={props.media} type="video/mp4" />
            </video>
          ) : (
            <img src={props.media} alt={props.organization + ' logo'} />
          )}
        </div>
      )}
    </div>
  );
}

export default ExpBox;
