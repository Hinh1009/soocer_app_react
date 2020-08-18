import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd'

class ClubList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamInfo: ''
        }
    }

    componentDidMount() {
        axios.request({
            url: 'http://localhost:1900/api/team',
            method: 'GET'
        }).then(res => {
            let item = res.data
            this.setState({ teamInfo: item })
            console.log(item)
        })
    }

    render() {
        let { teamInfo } = this.state
        return (
            <div>
                <Card
                    style={{
                        width: 340,
                        margin: 'auto',
                        // marginTop: 64,
                        padding: "10px",
                        textAlign: "center"
                    }}>

                </Card>
            </div>
        )
    }
}

export default ClubList