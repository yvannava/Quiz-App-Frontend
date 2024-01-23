import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteRequest, GetRequest } from "../ApiRequest";

const AllQuestions = () => {
  const[quizDetails,setQuizDetails] = useState([]);
  const deletePromptMessage = "Are you sure you wish to delete?"

  useEffect(() => {
    const getApi = 'http://localhost:8080/App/v1/Quiz/Topics';
    GetRequest(getApi, setQuizDetails);
}, []);

const confirmDelete = async (id) => {
  const delApi = `http://localhost:8080/App/v1/Quiz/Topic/${id}`;
  if (window.confirm(deletePromptMessage)) {
    await DeleteRequest(delApi);

    // State is updated after deletion
    const updatedQuizDetails = quizDetails.filter(q => q.id !== id);
    setQuizDetails(updatedQuizDetails);
  }
};

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
    <h3 align="center"  style={{color:"wheat",marginTop:"10vh"}}>List of all your saved Quizzes</h3>
    <div className="table-container">
     <table className="all-quiz-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Topic</th>
        <th># of Quest</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {quizDetails.map((q) => generateNewTableRow(q))}
      </tbody>
     </table>
     </div>
     <Link to={"/"}>
  <Button variant="contained" color="error" id="home-btn">Go Home</Button>
  </Link>
    </>
  );
};

export default AllQuestions;
