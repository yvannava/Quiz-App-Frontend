import { Button } from "@mui/material";
import OptionCard from "../Components/OptionCard";
import Question from "../Components/Question"

const QuestionCard=(props)=>{

    return(
        <>
        <div className="question-card">
            <p>Question {props.index} of {props.quizSize}</p>
           <Question prompt={props.prompt}/>
           <OptionCard option={props.option1} onClick={props.optionSelected} />
            <OptionCard option={props.option2} onClick={props.optionSelected} />
            <OptionCard option={props.option3} onClick={props.optionSelected} />
            <OptionCard option={props.option4} onClick={props.optionSelected} />
            <Button variant="outlined" color="primary" fullWidth onClick={props.validateResponse}>Check It!</Button>
            <Button variant="contained" fullWidth onClick={props.handleClick}>Next</Button>
            </div>
        </>

    )
}
export default QuestionCard;