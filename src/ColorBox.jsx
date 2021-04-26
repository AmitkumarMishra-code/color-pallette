function ColorBox(props){
    console.log(props)
    return(
        <div className="box-container">
        <div className="box" style={{backgroundColor:props.color, opacity:props.opacity}}></div>
        <div className="color-details"><p><em><strong>Color Code:</strong></em> {props.color}</p><p><em><strong>Opacity :</strong></em> {props.opacity}</p></div>
        </div>
    )
}

export default ColorBox;