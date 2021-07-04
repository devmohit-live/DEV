
      let App = function () {
         return (
           <div>
             <h1>This is a heading</h1>
             <h3>This is a sub heading</h3>
             <p>
                App1 =Function Base Component
             </p>
           </div>
         );
       };

       class App2 extends React.Component{
           render(){
               return(
                 <div>
                     <h1>This is a heading</h1>
                     <h3>This is a sub heading</h3>
                     <p>
                     App2 = Class Based Component.
                     </p>
                 </div>
               );
           }
       }
       class Counter extends React.Component{
        state = {
            currVal : 0
        };

            render(){
               return(
                 <div>
                   <center>
                    <button onClick={()=>{ this.setState({currVal: this.state.currVal+1 });}}> + </button>
                      <p> {this.state.currVal}  </p>
                      <button onClick={ ()=>{this.setState({currVal: this.state.currVal-1 });}}> - </button>
                   </center>
                  <br /><br />
                  </div>
               );
           }
       }

       ReactDOM.render( <div>
         <Counter/>
         <Counter/>
         <Counter/>
         <Counter/>
       </div> , document.querySelector("#root"));