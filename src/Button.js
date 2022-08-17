function Buttons({value,func}){
   
    return(
        <div>
            <input type="button" className="btns" value={value} onClick={func}></input>
        </div>
    )
}
export default Buttons
