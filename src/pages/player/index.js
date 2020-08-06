import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CTableGroup from '../../components/parts/TableGroups'

class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CTitle>Player Info</CTitle>
                <CSpacer></CSpacer>
                <CTableGroup></CTableGroup>
            </div>
        )
    }
}

export default Player