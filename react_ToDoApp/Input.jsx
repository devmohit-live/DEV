class  Input extends React.Component{
    state={task:""}


    render(){
        return(
        <div>
          <input type="text" value={this.state.task} onChange={
              (e)=>{ 
                  this.setState({task : e.currentTarget.value});
              }
          } />

            <button  onClick={
                (e)=>{
                    // console.log(this.state.task);
                    this.props.taskHandlerFunction(this.state.task);
                    this.setState({task: ""});
                }
            } >Add Task</button>
        </div>
    );
    }
}

