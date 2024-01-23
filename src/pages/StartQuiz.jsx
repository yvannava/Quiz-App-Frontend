import OptionCard from "../Components/OptionCard";
import QuestionCard from "../Components/QuestionCard";

const StartQuiz = ()=>{
const arr = ["Red","Blue","Green","Yellow"]
    const startTheQuiz =()=>{
         return(
        <div className="quiz-container">
        <h4>Question 1 of 20</h4>
        <QuestionCard/>
<OptionCard option ={arr[0]}/>
<OptionCard option ={arr[1]}/>
<OptionCard option ={arr[3]}/>
<OptionCard option ={arr[2]}/>
    </div>
         )
    }

   
    return(
        <>
        <h4>Select which quiz you would like to start.</h4>
        {/* {startTheQuiz} */}
        </>
    )
}
export default StartQuiz;