import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  };

  addTask() {
    this.setState(previousState => ({
      tasks: [...previousState.tasks, 'new item'],
    }));
  };

  render() {
    return (
      <div className="App">
        <Overview />
      </div>
    );
  }
}

export default App;
