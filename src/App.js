import React, {Component} from 'react';

import BlogItem from './BlogItem'

import './App.css';

class App extends Component{
  state = {
    displayList: true,
  }

  onBtnClick = () => {
    let updatedVal = !this.state.displayList;
    this.setState({displayList: updatedVal});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onBtnClick}>Show/Hide List</button>
        {
          this.state.displayList ? 
          <div>
            <BlogItem title="My First Blog" desc="This is my description" />
            <div className="blog">
              <h3>Blog Title 1</h3>
              <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor </p>
            </div>
            <div className="blog">
              <h3>Blog Title 1</h3>
              <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor </p>
            </div>
          </div> : null
        }
      </div>
    );
  }
}

export default App;