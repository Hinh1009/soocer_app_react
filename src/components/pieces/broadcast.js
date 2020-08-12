import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Broadcast extends Component {

    renderList(list) {
        return list.map((item, i) => {
            let { doiChuNha, doiKhach, stadium, soBanDoiNha, soBanDoiKhach, vongDau } = item
            return (
                <tr key={i}>
                    <td>Round {vongDau}</td>
                    <td>{this.getHomeTeams(doiChuNha)}</td>
                    <td>{soBanDoiNha}</td>
                    <td>{soBanDoiKhach}</td>
                    <td>{this.getAwayTeams(doiKhach)}</td>
                    <td><FontAwesomeIcon icon="futbol" /> {this.getStadiums(stadium)}</td>
                </tr>
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