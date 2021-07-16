function List(props){
    
        return(
            <ul>
            {
               props.taskData.map( (el,index)=>{
                    return <li> <ListItem  removeTask={props.removeTaskHandler} key={index} taskData={el}/> </li>
                } )
            }
            </ul>
        );
}