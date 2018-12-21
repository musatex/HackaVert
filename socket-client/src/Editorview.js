import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './editor.css'


class Editorview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  render() {
    return (
      
        <CodeMirror
          value='<h1>I ♥ react-codemirror2</h1>'
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      
    )
  }

}

export default Editorview