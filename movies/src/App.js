import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";
import LifeCycleShort from "./LifeCycleShort";

class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString : ""
  };

  receiveMovieData = (number) => {
    this.setState({ noOfMovies: number });
  };
  receiveSearchParam = (param) =>{
    this.setState({searchString: param});
  }

  countMovies = (count)=>{
    this.setState({
        noOfMovies : count
    })
  }

  render() {

    // return(<LifeCycleShort/>);

    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
            <div className="col-2 p-4">
             <Category/>
            </div>
            <div className="col-10">
                <div className="row">
                <div className="col-3">
                    <Search countOfMovies={this.state.noOfMovies}  searchHandler={this.receiveSearchParam}/>
                </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <Table countHandler={this.countMovies} searchString={this.state.searchString}/>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );

  }
}

export default App;
