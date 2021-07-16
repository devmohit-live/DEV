class  Input extends React.Component{
    state={task:""}

    inv =()=>{
        alert("Please enter a task!")
    }

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
                    let taksname = this.state.task.trim();
                    taksname!=""?this.props.taskHandlerFunction(taksname):this.inv();
                    this.setState({task: ""});
                }
            } >Add Task</button>
        </div>
    );
    }
}

