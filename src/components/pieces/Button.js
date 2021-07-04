import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class button extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Button
        // className="btn"
        // style={this.props.style}
        variant="contained"
        // color="#ff2882"
        style={{width:"100%",backgroundColor:"#ff2882",color:"white"}}
        onClick={this.props.onClick}>
        {this.props.children}
      </Button>
    )
  }
}

export default button
