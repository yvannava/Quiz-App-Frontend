

const TopicCard =(props)=>{

        return (
            <div className="topic-card">
              <h4>{props.topic}</h4>
              <button className="btn" onClick={()=>{props.handleClick(true)}}>Start</button>
            </div>
        );

}
export default TopicCard;