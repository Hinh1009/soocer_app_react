import React, { Component } from 'react'

class Table extends Component {
  constructor(props = { list, header }) {
    super(props)
  }

  renderHeader(header) {
    return (
      <tr>
        {header.map((item, i) => {
          return (
            <th key={i}>{item}</th>
          )
        })}
      </tr>
    )
  }

  renderList(list) {
    return list.map((item, i) => {
      let { title, description, categories } = item
      return (
        <tr key={i}>
          <td>{title}</td>
          <td>{description}</td>
          <td>{this.getCategoryTitles(categories)}</td>
        </tr>
      )
    })
  }

  getCategoryTitles(categories = []) {
    return categories
      .map(item => item.title || '')
      .join()
  }

  render() {
    let list = this.props.list || []
    let header = this.props.header || []

    return (
      <table className="c-table table table-striped">
        <thead>
          {this.renderHeader(header)}
        </thead>
        <tbody>
          {this.renderList(list)}
        </tbody>
      </table>
    )
  }
}

export default Table
