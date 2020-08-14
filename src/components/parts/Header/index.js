import React, { Component } from 'react'

import ClubNav from '../ClubNav';
import MainNav from '../MainNav';


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{paddingBottom:'60px'}}>
                <ClubNav />
                <MainNav />
            </div>

        )
    }

}


export default Header