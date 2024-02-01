import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetRequest, PostRequest} from "../ApiRequest";
import ConfirmModal from "./ConfirmModal";

const Topic = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [topic, setTopic] = useState("");
    const [getDetails, setGetDetails] = useState([]);
    const[error,setError] = useState();
    const [modal,showModal] = useState();
    // Sends a Post Request to add a new Topic.
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            topic: topic
        };
        const url = "http://localhost:8080/App/v1/Quiz/Topic";
        PostRequest(formdata, url);
        console.log("data being sent: " + JSON.stringify(formdata));
        showModal(<ConfirmModal word={topic}/>)
        setTopic("");
    };

    //Grabs all the topics from DB.
    useEffect(() => {
        const getApi = "http://localhost:8080/App/v1/Quiz/Topics";
        GetRequest(getApi, setGetDetails,setError);
    }, [modal]);

    // generates a list of Topics.
    const topicList = () => {
        
        return (

                    <ul className="all-topic-list">
                        <p style={{color:"red",fontSize:20,textAlign:"center"}}>{error}</p>
                        {getDetails.map((item) => {
                            return (
                                <Link to={"/createQuestionForm"} style={{textDecoration:"none",color:"white"}}>
                                <li key={item.id} onClick={()=>{localStorage.setItem("topic",JSON.stringify(item))}}> {item.topic} </li>
                                </Link>
                            );
                        })}
                    </ul>
        );
    };

    

    //Displays the Create a Topic component.
    const newTopic = () => {
        return (
            <>
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input
                        placeholder="Enter new topic"
                        id="input-field"
                        value={topic}
                        onChange={(e) => {
                            setTopic(e.target.value);
                        }}
                        required
                    />
                    <Button variant="contained" type="submit">
                        Create Topic
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => {
                            setIsVisible(true);
                        }}
                    >
                        Cancel
                    </Button>
                </form>
            </>
        );
    };
    

     // Displays the modal for 1.5 seconds
  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        showModal(null);
      }, 1500);
    }
  }, [modal]);


    return (
        <>
        {modal}
            <div className="topic-container">
            
                <h4>Select a Topic:</h4>
                {/* Toggles the button */}
                {isVisible ? (
                    <Button
                        onClick={() => {
                            setIsVisible(false);
                        }}
                        size="medium"
                        variant="contained"
                        style={{
                            width: "30vw",
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                    >
                        Create a new Topic
                    </Button>
                ) : null}

                {/* Toggles the topic list view and create a topic view */}
                {isVisible ? topicList() : newTopic()}
                <i className="p-2">*Previously saved topics will appear under "Create a new Topic".</i>
                <Link to={"/"}>
                    <Button variant="contained" color="error">
                        Go Home
                    </Button>
                </Link>
            </div>
        </>
    );
};
export default Topic;
