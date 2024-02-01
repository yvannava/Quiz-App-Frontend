

const DashCard = (props)=>{
    return(
        <>
        <div className="dash-card d-flex flex-column text-center p-3">
        <h3 style={{color:"#b5e2fa"}}>{props.title}</h3>
        <hr style={{color:"white", width:200,marginLeft:50}}></hr>
        <p style={{height:100,color:"#23c9ff"}}>{props.description}</p>
        <i className="dash-card-icon" >{props.icon}</i>
        </div>
        
        </>
    )
}
export default DashCard;