import React, { Component } from 'react'
import Axios from 'axios'

class AddTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenDoiBong: '',
            namThanhLap: '',
            sanNha: '',
            tenHLV: '',
            logoDoiBong: ''
        }

        this.handleName = this.handleName.bind(this)
        this.handleLogo = this.handleLogo.bind(this)
        this.handleBornYear = this.handleBornYear.bind(this)
        this.handleHomeStadium = this.handleHomeStadium.bind(this)
        this.handleManager = this.handleManager.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleName(e) {
        this.setState({ tenDoiBong: e.target.value })
    }

    handleLogo(e) {
        this.setState({ logoDoiBong: e.target.value })
    }

    handleBornYear(e) {
        this.setState({ namThanhLap: e.target.value })
    }

    handleHomeStadium(e) {
        this.setState({ sanNha: e.target.value })
    }

    handleManager(e) {
        this.setState({ tenHLV: e.target.value })
    }

    handleClick() {
        let newTeam = {
            tenDoiBong: this.state.tenDoiBong,
            logoDoiBong: this.state.logoDoiBong,
            namThanhLap: this.state.namThanhLap,
            sanNha: this.state.sanNha,
            tenHLV: this.state.tenHLV
        }
        // console.log(newTeam)
        Axios.post('http://localhost:1900/api/team', newTeam)
            .then(() => {
                alert("Add new team success!!!!")
            })
            .catch(() => {
                alert("Cannot add team")
            })
    }
    render() {
        return (
            <div>
                <div>Add Team</div>
                <div>
                    <div>Add team's name</div>
                    <input onChange={this.handleName}></input>
                </div>
                <div>
                    <div>Add team's logo</div>
                    <input onChange={this.handleLogo}></input>
                </div>
                <div>
                    <div>Add team's born year</div>
                    <input onChange={this.handleBornYear}></input>
                </div>
                <div>
                    <div>Add team's home stadium</div>
                    <input onChange={this.handleHomeStadium}></input>
                </div>
                <div>
                    <div>Add team's manager</div>
                    <input onChange={this.handleManager}></input>
                </div>
                <button onClick={this.handleClick}>Add team</button>
            </div>
        )
    }
}

export default AddTeam