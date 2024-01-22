import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PostRequest } from "../ApiRequest";
import ConfirmModal from "../Components/ConfirmModal";


const CreateQuestion = ()=>{
    const [choices,setChoices] = useState([]);
    const[topic, setTopic] = useState(JSON.parse(localStorage.getItem("topic")));
    const[answer, setAnswer] = useState();
    const[modal,showModal] = useState(false);
    const [statement,setStatement] = useState();
    const[questions,setQuestions]= useState([]);
    const url = `http://localhost:8080/App/v1/Quiz/Topic/${topic.id}/Question`;
    const resetFields = ()=>{
     setAnswer("");
     setChoices([""]);
     setStatement("")
    }

    useEffect(() => {
      if (modal) {
        setTimeout(() => {
          showModal(null);
        }, 2000);
      }
    }, [modal]);
  

    const handlePostRequest = async (e)=>{
      e.preventDefault();
      const formdata = {
        text: statement,
        answer: answer,
        choices: choices
      };


       PostRequest(formdata, url);
      
      console.log("data being sent: " + JSON.stringify(formdata));
      showModal(<ConfirmModal word={statement.toUpperCase()}/>)
  
      resetFields();
    }

    
    return (
        <>
        <form className="container mt-5 pt-5" style={{width:"40vw",color:"white"}} onSubmit={handlePostRequest}>
         <div className="mb-3"> 
    <label className="form-label fs-4 fw-bold">Select Topic/Create Topic:</label>
    <input type="text" name="topic" className="form-control" value={topic.topic} disabled />
  </div> 
   <div className="mb-3">
    <label className="form-label fs-4 fw-bold" id="app-font-color">Enter Question</label>
    <input type="text" name="statement" className="form-control input-color" placeholder="Enter a Question" value={statement} onChange={(e)=>{setStatement(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label className="form-label fs-4 fw-bold" id="app-font-color">Answer: </label>
    <input type="text" name="answer" className="form-control input-color" placeholder="Answer to Question" value={answer} onChange={(e)=>{setAnswer(e.target.value)}} required/>
  </div>
  {[1, 2, 3, 4].map((index) => (
          <div className="mb-3" key={index}>
            <label className={`form-label fs-5 fw-semibold`} id="app-font-color">Option {index}:</label>
            <input type="text" name={`choice${index}`} className="form-control input-color" placeholder={`Option ${index}`} value={choices[index - 1] || ""} onChange={(e) => { setChoices([...choices.slice(0, index - 1), e.target.value, ...choices.slice(index)]) }} required/>
          </div>
        ))}
        <div className="d-flex justify-content-between">
          <Link to={"/createQuiz"}>
        <Button variant ="contained" color="error">Back</Button>
        </Link>
        <div className="d-flex justify-content-end gap-3">
        <Link to={"/"}>
  <Button variant="outlined">All Done</Button>
  </Link>
  <Button type="submit" variant="contained" >Add Question</Button>
  </div>
  </div>
</form>
{modal}
        </>
    )
}
export default CreateQuestion;