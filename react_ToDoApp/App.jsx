 class  App extends React.Component{
    state={
        tasks  : []
    }

    taskHandler = (value)=>{
        let tmp = this.state.tasks;
        tmp.push(value)

        this.setState({
            tasks : tmp
        });
    }

    removeTask = (task)=>{
       let temp = this.state.tasks.filter((el)=>{
            return el!=task;
        })

        this.setState({tasks: temp});
    };

    render(){
        return(
        <div>
            <p className="heading center">TODO App</p>
            <Input  taskHandlerFunction={this.taskHandler}/>
            <List taskData={this.state.tasks} removeTaskHandler={this.removeTask}/>
        </div>
    );
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
);



