import React, { Component } from 'react'
import {Button} from '@material-ui/core'
// import Button from '../../pieces/Button'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'

class TableControls extends Component {
  
  genpageIndexNumbers(pageIndex, maxPage) {
    let result = [pageIndex]
    for (let i = 1; i < 3; i++) {
      let pageIndexNumber = pageIndex + i
      if (pageIndexNumber > maxPage) {
        break
      } else {
        result.push(pageIndexNumber)
      }
    }
    return result
  }

  toPage(newPageIndex, maxPage) {
    console.log(newPageIndex)
    let currentPageIndex = this.props.pageIndex
    if (newPageIndex !== currentPageIndex
      && newPageIndex > 0
      && newPageIndex <= maxPage) {
      this.props.setPageConfig({ pageIndex: newPageIndex })
      // this.props.callApiList()
      // setTimeout(this.props.callApiList(),1)
    }
  }
  changeBackground (e){
    e.preventDefault()
    e.target.style.background = 'blue'
  }
  render() {
    let { count, pageIndex, pageSize } = this.props
    let maxPage = Math.ceil(count / pageSize)
    let pageIndexNumbers = this.genpageIndexNumbers(pageIndex, maxPage)
    return (
      <div className="table-controls"
      style={{textAlign:"center"}}
      >
        <Button onClick={() => this.toPage(pageIndex - 1, maxPage)}><CaretLeftOutlined /></Button>
        {pageIndexNumbers.map(number => {
          let isCurrentPageIndex = number === pageIndex
          let clickHandler = () => this.toPage(number, maxPage)
          return isCurrentPageIndex
            ? (
              <Button
              variant="contained" 
              color="primary"
              key={number}
                style={{ textDecoration: 'underline' }}
                onMouseOver={this.changeBackground}
                onClick={clickHandler}>{number}</Button>
            )
            : (
              <Button
              variant="contained"
              color="primary" 
              key={number}
                onClick={clickHandler}>{number}</Button>
            )


        })}
        <Button onClick={() => this.toPage(pageIndex + 1, maxPage)}><CaretRightOutlined /></Button>

      </div>
    )
  }
}

export default TableControls


