import { AddCircle, PlayCircle, RemoveCircle,List} from "@mui/icons-material";

import { Outlet, Link } from "react-router-dom";
import DashCard from "../DashCard";

const Dashboard = (props)=>{

    return(
    <>

    <div className="container d-flex gap-5 justify-content-center" style={{marginTop:200}}>

   <Link to={"/createQuiz"} style={{textDecoration:"none"}}>
    <DashCard title = "Create" description ="Make a custom quiz with any amount of questions. You can create quizzes based on subjects." icon = {<AddCircle className="dash-list-icon"/>}/>
      </Link>
      <Link to={"/startQuiz"} style={{textDecoration:"none"}}>
   <DashCard title = "Start" description ="Select this option to select a Quiz you wish to start." icon = {<PlayCircle className="dash-list-icon"/>}/>
      </Link>
      {/* <Link to={"/deleteQuestion"} style={{textDecoration:"none"}}>
  <DashCard title ="Delete" description ="Select a Quiz you wish to delete" icon = {<RemoveCircle className="dash-list-icon"/>}/>
      </Link> */}
      <Link to={"/allQuizzes"} style={{textDecoration:"none"}}>
   <DashCard title = "All Quizzes" description = "*Displays all the quizzes you have saved." icon = {<List className="dash-list-icon"/>}/>
      </Link>
   
   <Outlet/>
    </div>
    </>
    )
}
export default Dashboard;