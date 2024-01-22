import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteRequest, GetRequest } from "../ApiRequest";

const AllQuestions = () => {
  const[quizDetails,setQuizDetails] = useState([]);

  useEffect(() => {
    const getApi = "http://localhost:8080/App/v1/Quiz/Topics";
    GetRequest(getApi, setQuizDetails);
}, [onload]);

const confirmDelete= async (id)=>{
  const delApi = `http://localhost:8080/App/v1/Quiz/Topic/`+ BigInt(id);
  confirm("Are you sure you wish to delete?");
  if(confirm){
    DeleteRequest(delApi)
  }
}


const generateNewTableRow = (props) => (
  <tr key={props.id}>
    <td>{props.id}</td>
    <td>{props.topic}</td>
    <td>{props.questions.length}</td>
    <td align="center">
      <Button variant="outlined" color="error" onClick={()=>{confirmDelete(props.id)}}>
        Delete
      </Button>
    </td>
  </tr>
);


  return (
    <>
    <h3 align="center"  style={{color:"wheat",marginTop:"10vh"}}>List of all your quizzes currently</h3>

     <table className="all-quiz-table">
      <thead>
      <tr>
        <th>Quiz id</th>
        <th>title</th>
        <th>questions</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {quizDetails.map((q) => generateNewTableRow(q))}
      </tbody>
     </table>
     <Link to={"/"}>
  <Button variant="contained" color="error" id="home-btn">Go Home</Button>
  </Link>
    </>
  );
};

export default AllQuestions;
