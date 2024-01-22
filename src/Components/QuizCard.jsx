
const QuizCard =()=>{
    return (
        <>
        <div className="quizCard">
            <h4>What is the question?</h4>
            <ul>
                <li className="list-flex"><input type="radio"/><p>Option 1</p></li>
                <li className="list-flex"><input type="radio"/><p>Option 2</p></li>
                <li className="list-flex"><input type="radio"/><p>Option 3</p></li>
                <li className="list-flex"><input type="radio"/><p>Option 4</p></li>
            </ul>
        </div>
        </>
    )
}
export default QuizCard;