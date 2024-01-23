

const OptionCard = (props)=>{

    return(
        <>
        <div className="option-card-container">
            <p onClick={(e)=>{console.log(e.target.value)}}>{props.option}</p>
        </div>
        </>
    )
}
export default OptionCard;