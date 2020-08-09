import React, { Component } from 'react'
import { Input } from 'antd'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    e.preventDefault()
    if (this.props.onChange instanceof Function) {
      let value = e.target.value
      this.props.onChange(value)
      console.log(value)
    }
  }

  render() {
    let { value, placeholder } = this.props
    return (
      <Input
        className="search-form"
        value={value}
        onChange={this.onChange}
        placeholder={placeholder}
        style={{ borderRadius:'50px' }} />
    )
  }
}

export default SearchForm
