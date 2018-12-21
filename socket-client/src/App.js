import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './codemirror.css';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'white',
      code: ""
    };
  }


  send = (value) => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', value) // change 'red' to this.state.color
  }



  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (code) => {
      this.setState({ code })
    })

    return (

      <div className="main">
        {/* <button onClick={() => this.send() }>Change Color</button> */}
        <h1>'title Project title'</h1>
        <input type="text" id="txt" onChange={(e) => this.send(e)} value={this.state.code} />
        <CodeMirror
          value={this.state.code}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            this.send(value)
          }}
        />
      </div>
    )
  }
}
export default App;