import React, { Component } from 'react'
import Input from "@material-ui/core/Input"

class input extends Component{
    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        if (this.props.onChange instanceof Function) {
            let value = e.target.value;
            this.props.onChange(value);
          }
    }

    render(){
        return(
            <Input style={{width:"100%"}}
            onChange={this.onChange}
            />
        )
    }
}

export default input