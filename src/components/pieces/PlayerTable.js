import React, { Component } from 'react'

class Table extends Component {

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
      let { tenCauThu, avatarUrl, soAo, viTri, club, quocTich } = item
      // console.log("item club", tenDoiBong)
      return (
        <tr key={i}>
          <td><a href="#"
            style={{ color: 'black' }}
          ><img src={avatarUrl} /> {tenCauThu}</a></td>
          <td>{soAo}</td>
          <td>{viTri}</td>
          <td>{quocTich}</td>
          <td>{this.getClubs(club)}</td>
        </tr>
      )
    })
  }

  getClubs(club = []) {
    return club
      .map(item => item.tenDoiBong || '')
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