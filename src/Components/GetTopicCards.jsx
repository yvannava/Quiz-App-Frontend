import { useState ,useEffect} from "react";
import { GetRequest } from "../ApiRequest";
import TopicCard from "./TopicCard";
import QuestionCard from "./QuestionCard";

const GetTopicCard = (props)=>{
    const[topics,setTopics]=useState([]);
    const[error,setError]=useState();
   const[beginQuiz,setBeginQuiz] = useState(false);
   const[topicToStart,setTopicToStart] = useState([]);
   const[nextQuestion,setNextQuestion] = useState(0);
   const[selectedResponse,setSelectedResponse] = useState("");
   const[modal,setModal] = useState("");
    useEffect(() => {
        const getApi = 'http://localhost:8080/App/v1/Quiz/Topics';
        GetRequest(getApi, setTopics,setError);
    }, []);

    const generateList = () => {
        return (
            <>
                {topics.map((topic) => (
                    <TopicCard key={topic.id} topic={topic.topic} handleClick = {()=>{setBeginQuiz(true);setTopicToStart(topic)}}/>
                ))}
        </>
        );
    };

    const printEachQuestion =()=>{
        if(nextQuestion < topicToStart.questions.length -1){
           setNextQuestion(prevValue => prevValue + 1) 
        }
        else{
            console.log("end of quiz")
        }
    }

    const gradeQuestion = () => {
       selectedResponse === topicToStart.questions[nextQuestion].answer ?
       setModal(<p style={{color:"Green"}}>{String(selectedResponse).toUpperCase()} is Correct!</p>)

        : setModal(<p style={{color:"red"}}>Wrong! Correct Answer: {String(selectedResponse).toUpperCase()}</p>)
    };

    const handleOptionSelect = (optionValue) => {
        setSelectedResponse(optionValue);
        console.log("your choice was : " + optionValue)
    };

    const start = ()=>{
        return(
            <>
       <QuestionCard
        prompt={topicToStart.questions[nextQuestion].text}
       option1={topicToStart.questions[nextQuestion].choices[0].choiceText}
       option2={topicToStart.questions[nextQuestion].choices[1].choiceText}
       option3={topicToStart.questions[nextQuestion].choices[2].choiceText}
       option4={topicToStart.questions[nextQuestion].choices[3].choiceText}
        index ={nextQuestion + 1}
        validateResponse = {gradeQuestion}
        optionSelected ={handleOptionSelect}
            quizSize ={topicToStart.questions.length}
       handleClick={printEachQuestion}/>
       {modal}
            </>
            
        )
    }


    return(
        <>
        <div className="topic-card-container">
              {beginQuiz ?start() : generateList()}
        </div>
 
        </>
    )
}
export default GetTopicCard;