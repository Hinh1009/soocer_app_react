import React, { Component } from 'react'
import CTitle from '../../../components/pieces/Title'
import CSpacer from '../../../components/pieces/Spacer'
import Header from '../../../components/parts/Header'
import Footer from '../../../components/parts/Footer'
import Axios from 'axios'

class UpdateMatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matchId: "",
            matchInfo: "",
            soBanDoiNha: '',
            soBanDoiKhach: '',
            status: false,
            _id: ""
        }
    }

    componentDidMount() {
        let matchId = new URLSearchParams(window.location.search).get('id')
        this.setState({
            _id: matchId
        })
        Axios.request({
            url: `http://localhost:1900/api/matches/${matchId}`,
            method: 'GET'
        }).then(res => {
            let item = res.data
            this.setState({ matchInfo: item })
            console.log("Thong tin tran dau", item)
        })
    }


    handleHomeGoals = (e) => {
        this.setState({ soBanDoiNha: e.target.value })
    }

    handleAwayGoals = (e) => {
        this.setState({ soBanDoiKhach: e.target.value })
    }

    handleClick = () => {
        let updateResult = {
            status: true,
            soBanDoiNha: this.state.soBanDoiNha,
            soBanDoiKhach: this.state.soBanDoiKhach,
            _id: this.state._id
        }
        console.log("update", updateResult)
        Axios.put('http://localhost:1900/api/matches', updateResult)
            .then(() => {
                alert("Update result success!!!!")
            })
            .catch(() => {
                alert("Cannot update team")
            })
    }

    render() {
        // let { matchInfo } = this.state
        // console.log("match info", matchInfo)
        return (
            // matchInfo ? 
            <div>
                <Header />
                < div className="container" >
                    <CTitle> Let's update this match !!!</CTitle>
                    <CSpacer />
                    <div>
                        <div>Add home team's goal</div>
                        <input onChange={this.handleHomeGoals}></input>
                    </div>
                    <div>
                        <div>Add away team's goal</div>
                        <input onChange={this.handleAwayGoals}></input>
                    </div>
                    <button onClick={this.handleClick}> Update </button>
                </div >
                <Footer />
            </div >
        )
        //  : (
        //         <div>
        //             <Header />
        //             < div className="container" >
        //                 <CTitle> Not have any match with this id</CTitle>
        //                 <CSpacer />
        //             </div >
        //             <Footer />
        //         </div >
        //     )
    }
}

export default UpdateMatch