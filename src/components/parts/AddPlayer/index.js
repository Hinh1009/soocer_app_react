import React, { Component } from 'react'
import Axios from 'axios';
import CDropdown from '../../../components/pieces/Dropdown'
class AddPlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenCauThu: '',
            soAo: '',
            viTri: '',
            quocTich: '',
            chieuCao: '',
            canNang: '',
            club: '',
            filter: {
                clubId:''
            },
            optionClubs: [
                { value: '', text: 'Select club' }
            ]
        }
        this.handleName = this.handleName.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.handlePosition = this.handlePosition.bind(this)
        this.handleNational = this.handleNational.bind(this)
        this.handleHeight = this.handleHeight.bind(this)
        this.handleWeight = this.handleWeight.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.callOptionClubs()
    }

    setPageConfig(config) {
        this.setState(config)
    }

    handleName(e) {
        this.setState({ tenCauThu: e.target.value })
    }

    handleNumber(e) {
        this.setState({ soAo: e.target.value })
    }

    handlePosition(e) {
        this.setState({ viTri: e.target.value })
    }

    handleNational(e) {
        this.setState({ quocTich: e.target.value })
    }

    handleHeight(e) {
        this.setState({ chieuCao: e.target.value })
    }

    handleWeight(e) {
        this.setState({ canNang: e.target.value })
    }

    callOptionClubs() {
        Axios.request({
            url: 'http://localhost:1900/api/team',
            method: "GET"
        }).then(res => {
            let clubs = res.data
            let optionClubs = [
                { value: '', text: 'Select club' }, ...clubs.map(club => {
                    return { value: club._id, text: club.tenDoiBong }
                })
            ]
            this.setState({ optionClubs })
        })
    }

    handleClick() {
        let newPlayer = {
            tenCauThu: this.state.tenCauThu,
            soAo: this.state.soAo,
            viTri: this.state.viTri,
            quocTich: this.state.quocTich,
            chieuCao: this.state.chieuCao,
            canNang: this.state.canNang,
            club: [
                { _id: this.state.filter.clubId }
            ]
        }

        console.log("Cau thu moi", newPlayer)
        Axios.post('http://localhost:1900/api/players', newPlayer)
            .then(() => {
                alert("Add player success!!!!!")
            })
            .catch(() => {
                alert("Cannot add player")
            })
    }

    render() {
        let { filter, optionClubs } = this.state
        return (
            <div>
                <div>Add Player</div>
                <div>
                    <div>Add player's name</div>
                    <input onChange={this.handleName}></input>
                </div>
                <div>
                    <div>Add player's number</div>
                    <input onChange={this.handleNumber}></input>
                </div>
                <div>
                    <div>Add player's position(DF/MF/CF)</div>
                    <input onChange={this.handlePosition}></input>
                </div>
                <div>
                    <div>Add player's national</div>
                    <input onChange={this.handleNational}></input>
                </div>
                <div>
                    <div>Add player's height(cm)</div>
                    <input onChange={this.handleHeight}></input>
                </div>
                <div>
                    <div>Add player's weight(kg)</div>
                    <input onChange={this.handleWeight}></input>
                </div>
                <div>
                    <div>Add player's club</div>
                    <CDropdown
                        value={filter.clubId}
                        options={optionClubs}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { ...filter, clubId: value } })
                        }}
                    />
                </div>
                <button onClick={this.handleClick}>Add match</button>
            </div>

        )
    }
}

export default AddPlayers