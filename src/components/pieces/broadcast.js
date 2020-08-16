import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../scss/main.scss'

class Broadcast extends Component {

    renderList(list) {
        return list.map((item, i) => {
            let { doiChuNha, doiKhach, stadium, soBanDoiNha, soBanDoiKhach, vongDau, logoDoiChuNha, logoDoiKhach } = item
            console.log("item", item)
            console.log("logo", logoDoiChuNha)
            let logoHomeTeamLink = logoDoiChuNha[0] && logoDoiChuNha[0].logoDoiBong
            let logoAwayTeamLink = logoDoiKhach[0] && logoDoiKhach[0].logoDoiBong
            // console.log(logolink)
            return (
                <tr key={i}>
                    <td style={{
                        background: "rgb(61, 25, 91)",
                        color: "white",
                        fontSize: "15px",
                        textAlign: 'center'
                    }}
                    >Round {vongDau}</td>
                    <td><img src={logoHomeTeamLink} style={{ width: '30px', height: '30px' }}></img></td>
                    <td>{this.getHomeTeams(doiChuNha)}</td>
                    <td style={{
                        background: "#ff2882",
                        color: "white",
                        textAlign: 'center'
                    }}
                    >{soBanDoiNha}</td>
                    <td
                        style={{
                            background: "#ff2882",
                            color: "white",
                            textAlign: 'center'
                        }}
                    >{soBanDoiKhach} </td>
                    <td>{this.getAwayTeams(doiKhach)} </td>
                    <td><img src={logoAwayTeamLink} style={{ width: '30px', height: '30px' }}></img></td>
                    <td><FontAwesomeIcon icon="futbol" /> {this.getStadiums(stadium)}</td>
                </tr >
            )

        })
    }

    getHomeTeams(doiChuNha = []) {
        return doiChuNha
            .map(item => item.tenDoiBong || '')
            .join()
    }

    getAwayTeams(doiKhach = []) {
        return doiKhach
            .map(item => item.tenDoiBong || '')
            .join()
    }

    getStadiums(stadium = []) {
        return stadium
            .map(item => item.sanNha)
            .join()
    }

    render() {
        let list = this.props.list || []

        return (
            <table className="c-table table">
                <tbody>
                    {this.renderList(list)}
                </tbody>

            </table>
        )
    }
}

export default Broadcast