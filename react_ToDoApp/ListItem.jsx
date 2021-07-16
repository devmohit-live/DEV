function ListItem(props){
    return(
        <div>
        <span className="task"> {props.taskData} </span>
        <button onClick={ ()=>{
            props.removeTask(props.taskData);
        } }  >Delete</button>
        </div>
    );
}