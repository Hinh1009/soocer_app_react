import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
      let { tenCauThu, avatarUrl, soAo, viTri, club, quocTich, _id } = item
      // console.log("item club", tenDoiBong)
      console.log("item", item)
      return (
        <tr
          onClick={() => this.props.history.push(`/player-detail?id=${_id}`)}
          key={i}>
          <td><img src={avatarUrl} style={{ width: '30px', height: '30px' }} alt="description"/> {tenCauThu}</td>
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

export default withRouter(Table)