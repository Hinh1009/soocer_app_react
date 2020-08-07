import React, { Component } from 'react'

class Table extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderHeader(header) {
    return (
      <tr>
        {header.map((item, i) => {
          return (
            <td key={i}>{item}</td>
          )
        })}
      </tr>
    )
  }

  renderList(list) {
    return list.map((item, i) => {
      let { tenCauThu, soAo, viTri, tenDoiBong } = item
      return (
        <tr key={i}>
          <td>{tenCauThu}</td>
          <td>{soAo}</td>
          <td>{viTri}</td>
          <td>{this.getTeams(tenDoiBong)}</td>
        </tr>
      )
    })
  }

  getTeams(CLB = []) {
    return CLB
      .map(item => item.tenCauThu || '')
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