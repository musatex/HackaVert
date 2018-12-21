import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'white',
      code:""
    };
  }

  
  send = (e) => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', e.target.value) // change 'red' to this.state.color
  }


  
  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (code) => {
      this.setState({code})
    })

    return (
      <div style={{ textAlign: "center", backgroundColor:this.state.color }}>
        {/* <button onClick={() => this.send() }>Change Color</button> */}
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <input type="text" id="txt" onChange={(e) => this.send(e)} value={this.state.code}/>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    )
  }
}
export default App;