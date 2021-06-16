import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super()

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this);
  }

  // updateColor
  updateColor(val){
    this.setState({ fontColor: val})
  }

  // updateSize
  updateSize = (val) => {
    this.setState({ fontSize: val})
  }
  
  // updateFamily
  updateFamily = (val) => {
    this.setState({ fontFamily: val})
  }

  // updateEditStatus
  updateEditStatus = (val) => {
    this.setState({ allowEdit: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger 
            allowEdit={this.state.allowEdit} 
            update={this.updateColor}
          />
          <SizeChanger 
            allowEdit={this.state.allowEdit}
            update={this.updateSize}
          />
          <FamilyChanger 
            allowEdit={this.state.allowEdit}
            update={this.updateFamily}
          />
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    );
  }
}

export default App;