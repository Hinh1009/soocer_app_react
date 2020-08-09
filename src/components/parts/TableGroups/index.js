import React, { Component } from 'react'
import CDropdown from '../../pieces/Dropdown'
import CTable from '../../pieces/Table'
import SearchForm from './SearchForm'
import TableControls from './TableControls'
import axios from 'axios'

class TableGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requesting: false,
            listInQueue: false,
            TableHeader: ['Name', 'Number','Position', 'Clubs'],
            list: [],
            count: 0,
            pageIndex: 1,
            pageSize: 5,
            search: '',
            filter: {
                clubId: ''
            },
            optionClubs: [
                { value: '', text: "Select club" }
            ]
        }
        this.callApiCount = this.callApiCount.bind(this)
        this.callApiList = this.callApiList.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    componentDidMount() {
        let state = this.state
        this.callApiCount(state)
        this.callApiList(state)
        this.callOptionClubs()
    }

    componentWillUpdate(newProps, newState) {
        // console.log('will update', newState, this.state)
        let oldState = this.state
        let mustCallList = false
        let mustCallCount = false
        if (newState.pageIndex !== oldState.pageIndex) {
            mustCallList = true
        }
        if (newState.pageSize !== oldState.pageSize) {
            mustCallList = true
        }
        if (newState.search !== oldState.search) {
            mustCallList = true
            mustCallCount = true
        }
        if (newState.filter.clubId !== oldState.filter.clubId) {
            mustCallList = true
            mustCallCount = true
        }

        if (mustCallCount) {
            this.callApiCount(newState)
        }
        if (mustCallList) {
            this.callApiList(newState)
        }
    }
    setPageConfig(config) {
        this.setState(config)
    }

    callApiCount(state) {
        this.setState({ requesting: true })
        let { search, filter } = state
        let queryParams = {
            count: true,
            search,
            clubId: filter.clubId || ''
        }
        axios.request({
            url: 'http://localhost:1900/api/player',
            method: 'GET',
            params: queryParams
        }).then(
            res => {
                let count = res.data.count || 0
                this.setState({ count })
            }
        ).finally(() => {
            this.setState({ requesting: false })
        })
    }

    callApiList(state) {
        if (this.state.requesting) {
            this.setState({ listInQueue: true })
            return
        }
        let { pageIndex, pageSize, search, filter } = state
        let queryParams = {
            pageIndex,
            pageSize,
            search,
            clubId: filter.clubId || ''
        }

        axios.request({
            url: 'http://localhost:1900/api/player',
            method: 'GET',
            params: queryParams
        }).then(res => {
            console.log("response",res)
            let list = res.data
            this.setState({ list })
            console.log("list",list)
        })
    }

    callOptionClubs() {
        axios.request({
            url: 'http://localhost:1900/api/team',
            method: 'GET',
        }).then(res => {
            let clubs = res.data
            console.log("clubs",clubs)
            let optionClubs = [
                { value: '', text: 'Select club' }, ...clubs.map(club => {
                    return { value: clubs._id, text: club.tenDoiBong }
                })
            ]
            this.setState({ optionClubs })
        })
    }

    render() {
        let { list, TableHeader, count, pageIndex, pageSize, filter, optionClubs, search } = this.state
        return (
            <div className="c-table-group">
                <div>
                    <SearchForm
                        value={search}
                        onChange={(value) => {
                            this.setPageConfig({ search: value })
                        }}
                        placeholder="Enter search keywords..." />
                    <CDropdown
                        value={filter.clubId}
                        options={optionClubs}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { clubId: value } })
                        }}
                    />
                </div>
                <div>
                    <CTable list={list}
                        header={TableHeader} />
                </div>
                <div>
                    <TableControls
                        count={count}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        setPageConfig={this.setPageConfig}
                    // callApiList={this.callApiList}
                    />
                </div>
            </div>
        )
    }
}

export default TableGroup