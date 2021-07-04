import React, { Component } from 'react'
import CDropdown from '../../pieces/Dropdown'
import CBroadcast from '../../pieces/broadcast'
import axios from 'axios'

class FixtureBroadCasts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requesting: false,
            listInQueue: false,
            list: [],
            count: 0,
            pageIndex: 1,
            pageSize: 5,
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
        let { filter } = state
        let queryParams = {
            count: true,
            clubId: filter.clubId || ''
        }
        axios.request({
            url: 'http://localhost:1900/api/matches',
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
        let { pageIndex, pageSize, filter } = state
        let queryParams = {
            pageIndex,
            pageSize,
            clubId: filter.clubId || ''
        }

        axios.request({
            url: 'http://localhost:1900/api/matches',
            method: 'GET',
            params: queryParams
        }).then(res => {
            let list = res.data
            this.setState({ list })
            console.log("list", list)
        })
    }

    callOptionClubs() {
        axios.request({
            url: 'http://localhost:1900/api/team',
            method: 'GET',
        }).then(res => {
            let clubs = res.data
            console.log("clubs", clubs)
            let optionClubs = [
                { value: '', text: 'Select club' }, ...clubs.map(club => {
                    return { value: club._id, text: club.tenDoiBong }
                })
            ]
            this.setState({ optionClubs })
        })
    }


    render() {
        let { list,
            //  count, pageIndex, pageSize,
              filter, optionClubs } = this.state
        return (
            <div className="c-table-group">
                <div>
                    <CDropdown
                        value={filter.clubId}
                        options={optionClubs}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { clubId: value } })
                        }}
                    />
                </div>
                <div>
                    <CBroadcast list={list} />
                </div>
            </div>
        )
    }
}

export default FixtureBroadCasts