import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import Axios from 'axios'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'
import { Card } from 'antd'

class PlayerDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requesting: false,
            playerId: null,
            playerInfo: null
        }
    }

    componentDidMount() {
        let playerId = new URLSearchParams(window.location.search).get('id')
        this.setState({
            playerId
        })

        Axios.request({
            url: `http://localhost:1900/api/players/${playerId}`,
            method: 'GET'
        }).then(res => {
            let item = res.data
            this.setState({ playerInfo: item })
            console.log(item)
        })

    }



    render() {
        let { playerInfo } = this.state
        console.log("info of SAka", playerInfo)

        return playerInfo ? (
            <div>
                <Header />
                <div className="container">
                    <CTitle>
                        <img src={playerInfo.avatarUrl} style={{ width: "250px" }}></img>
                        <span style={{ paddingLeft: '40px' }}>{playerInfo.tenCauThu}</span>
                        <span style={{ paddingLeft: '40px' }}>{playerInfo.soAo}</span>
                    </CTitle>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Card
                            style={{
                                width: 340,
                                margin: 'auto',
                                // marginTop: 64,
                                padding: "10px",
                                textAlign: "center"
                            }}
                            bordered={true}>
                            <h3>Overview</h3><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Club </span><span>{playerInfo.club[0].tenDoiBong}</span> </div><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'space-between' }}><span>Position </span><span>{playerInfo.viTri}</span></div><hr />
                            <h3>Epl record</h3><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Apperances </span><span>3</span> </div><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Goals </span><span>{playerInfo.soBan}</span> </div><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Apperances </span><span>{playerInfo.kienTao}</span> </div><hr />
                        </Card>
                        <Card
                            style={{
                                width: 340,
                                margin: 'auto',
                                // marginTop: 64,
                                padding: "10px",
                                textAlign: "center"
                            }}
                            bordered={true}>
                            <h3>Personal Details</h3><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>National </span><span>{playerInfo.quocTich}</span> </div><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Height </span><span>{playerInfo.chieuCao} cm</span> </div><hr />
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: `space-between` }}><span>Weight </span><span>{playerInfo.canNang} kg</span> </div><hr />

                        </Card>
                    </div>

                </div>
                <Footer />
            </div>
        ) : (
                <div>
                    <Header />
                    <div className="container">
                        <CTitle> Not have any player with this</CTitle>
                    </div>
                    <Footer />
                </div>
            )
    }
}

export default PlayerDetail

