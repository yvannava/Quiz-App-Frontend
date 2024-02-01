import { Link } from "react-router-dom";
import GetTopicCards from "../Components/GetTopicCards";
import { Button } from "@mui/material";

const StartQuiz = ()=>{

    return(
        <>
        <h4 style={{color:"white"}}>Select which quiz you would like to start.</h4>
        {/* <button className="btn" onClick={()=>{setStart(startTheQuiz)}}>Begin</button> */}
        <GetTopicCards/>
        <Link to={"/"}>
  <Button variant="contained" color="error" id="home-btn">Back</Button>
  </Link>
        </>
    )
}
export default StartQuiz;