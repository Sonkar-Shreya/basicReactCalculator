function Buttons(props){
    const value=props.value;
    const func=props.func;
    return(
        <div>
            <input type="button" className="btns" value={value} onClick={func}></input>
        </div>
    )
}
export default Buttons