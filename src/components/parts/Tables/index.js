import React, { Component } from 'react'
import CTable from '../../pieces/tables'
import axios from 'axios'

class Tables extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requesting: false,
            listInQueue: false,
            TableHeader: ['Position', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'GF', 'GA', 'GD', 'Points'],
            list: [],
            count: 0,
            pageIndex: 1

        }

        this.callApiList = this.callApiList.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    componentDidMount() {
        let state = this.state
        this.callApiList(state)
    }

    componentWillUpdate(newProps, newState) {
        let oldState = this.state
        let mustCallList = false
        if (newState.pageIndex !== oldState.pageIndex) {
            mustCallList = true
        }
        if (mustCallList) {
            this.callApiList(newState)
        }
    }

    setPageConfig(config) {
        this.setState(config)
    }

    callApiList() {
        if (this.state.requesting) {
            this.setState({ listInQueue: true })
            return
        }

        axios.request({
            url: 'http://localhost:1900/api/team',
            method: 'GET'
        }).then(res => {
            let list = res.data
            this.setState({ list })
            console.log("tables list", list)
        })
    }

    render() {
        let { list, TableHeader } = this.state
        console.log("render list",list)
        return (
            <div className="c-table-group">
                <div>
                    <CTable list={list}
                        header={TableHeader} />
                </div>
            </div>
        )
    }


}

export default Tables