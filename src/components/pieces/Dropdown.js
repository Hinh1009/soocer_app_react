import React, { Component } from 'react'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    if (this.props.onChange instanceof Function) {
      let value = e.target.value
      this.props.onChange(value)
    }
  }
  render() {
    let {options,value} = this.props
   console.log(options)
      return (
      <select
        className="c-dropdown"
        value={value}
        onChange={this.onChange}>
        {options.map((option, i) => {
          let optValue, optText
          if (typeof option == 'string') {
            optValue = option
            optText = option
          }
          else {
            optValue = option.value
            optText = option.text
          }
          return (
            <option key={i} value={optValue}>{optText}</option>
          )
        })}

      </select>
    )
  }
}

export default Dropdown
