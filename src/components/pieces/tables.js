import React, { Component } from 'react'

class Table extends Component {

    renderHeader(header) {
        return (
            <tr style={{ textAlign: 'center' }}>
                {header.map((item, i) => {
                    return (
                        <td key={i}>{item}</td>
                    )
                })}
            </tr>
        )
    }

    renderList(list) {
        return list.map((item, i) => {
            let { tenDoiBong, logoDoiBong, soTranThang, soTranHoa, soTranThua, soBanThang, soBanThua, Diem, hieuSo } = item
            soTranThang = parseInt(soTranThang)
            soTranThua = parseInt(soTranThua)
            soTranHoa = parseInt(soTranHoa)
            let soTranDaDa = soTranThang + soTranHoa + soTranThua
            let positions = []
            for (let i = 0; i < 100; i++) {
                positions.push(i)
            }
            console.log("position", positions)

            return (
                <tr key={i}>
                    <td style={{ textAlign: 'center' }}>{positions[i + 1]}</td>
                    <td style={{ paddingLeft: "120px" }}><img className="badge-image badge-image--50 js-badge-image"
                        src={logoDoiBong} style={{ width: '30px', height: '30px' }}
                        alt="description"
                        ></img> <span style={{ paddingLeft: '25px' }}>{tenDoiBong}</span></td>
                    <td style={{ textAlign: 'center' }}>{soTranDaDa}</td>
                    <td style={{ textAlign: 'center' }}>{soTranThang}</td>
                    <td style={{ textAlign: 'center' }}>{soTranHoa}</td>
                    <td style={{ textAlign: 'center' }}>{soTranThua}</td>
                    <td style={{ textAlign: 'center' }}>{soBanThang}</td>
                    <td style={{ textAlign: 'center' }}>{soBanThua}</td>
                    <td style={{ textAlign: 'center' }}>{hieuSo}</td>
                    <td style={{ textAlign: 'center' }}>{Diem}</td>
                </tr>
            )
        })
    }

    render() {
        let list = this.props.list || []
        let header = this.props.header || []
        return (
            <table className="c-table table table-striped">
                <thead>
                    {this.renderHeader(header)}
                </thead>
                <tbody>
                    {this.renderList(list)}
                </tbody>
            </table>
        )
    }
}


export default Table