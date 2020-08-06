import React, { Component } from 'react'

class Title extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="c-title">
        {this.props.children}
      </div>
    )
  }
}

export default Title
