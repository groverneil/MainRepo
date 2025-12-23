function ExpBox(props) {
  return (
    <div className="main-container exp-block">
      <div className="exp-banner">
        <span className="exp-title">{props.title}</span> <span className="exp-company">@ {props.organization}</span>
        <span className="exp-dates">{props.dates}</span>
      </div>
      <div className="content_container_proj exp_content">
        <ul>
          {props.details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="exp-bar">
          <div className="level" style={{width: props.level + '%'}}></div>
        </div>
      </div>
    </div>
  );
}

export default ExpBox;
