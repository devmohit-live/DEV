class  Input extends React.Component{
    state={task:""}


    render(){
        return(
        <div className="center">
          <input type="text" value={this.state.task} onChange={
              (e)=>{ 
                  this.setState({task : e.currentTarget.value});
              }
          } />

            <button  onClick={
                (e)=>{
                    // console.log(this.state.task);
                    this.state.task!=""?this.props.taskHandlerFunction(this.state.task):0;
                    this.setState({task: ""});
                }
            } >Add Task</button>
        </div>
    );
    }
}

