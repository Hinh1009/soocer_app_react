import React, { Component } from "react";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    if (this.props.onChange instanceof Function) {
      let value = e.target.value;
      this.props.onChange(value);
    }
  }
  render() {
    let { options, value } = this.props;
    //  console.log("opt",options)
    return (
      
      <FormControl style={{width:"100%"}}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={this.onChange}
        >
          {options.map((option, i) => {
            let optValue, optText;
            if (typeof option == "string") {
              optValue = option;
              optText = option;
            } else {
              optValue = option.value;
              optText = option.text;
            }
            return (
              <MenuItem key={i} value={optValue}>
                {optText}
              </MenuItem>
            
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default Dropdown;
