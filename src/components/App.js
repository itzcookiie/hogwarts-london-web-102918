import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import HogForm from './HogForm'


class App extends Component {

  state = {
    hogsData: []
  }

  componentDidMount() {
    this.setState({
      hogsData: hogs
    })
}

  render() {
    return (
      <div className="App">
          < Nav />
          <HogForm />
          < HogList hogsData={this.state.hogsData} />
      </div>
    )
  }
}

export default App;
