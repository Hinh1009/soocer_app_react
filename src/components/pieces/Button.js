import React, { Component } from 'react'

class Button extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <button
        className="btn"
        style={this.props.style}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
