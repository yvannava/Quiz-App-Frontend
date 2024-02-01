

const OptionCard = (props)=>{

    return(
        <>
        <div className="option-card-container" onClick={()=>props.onClick(props.option)}>
            <p>{props.option}</p>
        </div>
        </>
    )
}
export default OptionCard;