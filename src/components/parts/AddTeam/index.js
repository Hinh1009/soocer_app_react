import React, { Component } from "react";
import Axios from "axios";
// import Input from "../../../components/pieces/input";
import Button from "../../../components/pieces/Button";
import Input from "@material-ui/core/Input"
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenDoiBong: "",
      namThanhLap: "",
      sanNha: "",
      tenHLV: "",
      logoDoiBong: "",
      successAlert: false,
      errorAlert: false,
    };

    this.handleName = this.handleName.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
    this.handleBornYear = this.handleBornYear.bind(this);
    this.handleHomeStadium = this.handleHomeStadium.bind(this);
    this.handleManager = this.handleManager.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }

  handleName(e) {
    this.setState({ tenDoiBong: e.target.value });
  }

  handleLogo(e) {
    this.setState({ logoDoiBong: e.target.value });
  }

  handleBornYear(e) {
    this.setState({ namThanhLap: e.target.value });
  }

  handleHomeStadium(e) {
    this.setState({ sanNha: e.target.value });
  }

  handleManager(e) {
    this.setState({ tenHLV: e.target.value });
  }

  handleClick() {
    let newTeam = {
      tenDoiBong: this.state.tenDoiBong,
      logoDoiBong: this.state.logoDoiBong,
      namThanhLap: this.state.namThanhLap,
      sanNha: this.state.sanNha,
      tenHLV: this.state.tenHLV,
    };
    console.log(newTeam)
    Axios.post("http://localhost:1900/api/team", newTeam)
      .then(() => {
        // alert("Add new team success!!!!");
        this.setState({ successAlert: true, errorAlert: false });

      })
      .catch(() => {
        // alert("Cannot add team");
        this.setState({ errorAlert: true, successAlert: false });

      });
  }

  handleClose() {
    this.setState({successAlert:false,errorAlert:false})
  }

  render() {
    let {successAlert, errorAlert} = this.state;
    return (
      <div>
        <div>
          <img
            src={require("../../../assets/img/img.png")}
            alt="description"
            style={{ height: 70 }}
          ></img>
        </div>
        <div>
          <div>Add team's name</div>
          <Input onChange={this.handleName}
          style={{width:"100%"}}
          ></Input>
        </div>
        <div>
          <div>Add team's logo</div>
          <Input onChange={this.handleLogo}
          style={{width:"100%"}}
          
          ></Input>
        </div>
        <div>
          <div>Add team's born year</div>
          <Input onChange={this.handleBornYear}
          style={{width:"100%"}}
          
          ></Input>
        </div>
        <div>
          <div>Add team's home stadium</div>
          <Input onChange={this.handleHomeStadium}
          style={{width:"100%"}}
          
          ></Input>
        </div>
        <div>
          <div>Add team's manager</div>
          <Input onChange={this.handleManager}
          style={{width:"100%"}}
          
          ></Input>
        </div>
        <div style={{ paddingTop: 40 }}>
          <Button onClick={this.handleClick}>Add team</Button>
          {successAlert === true ? (
            <Snackbar open={this.handleClick} autoHideDuration={6000} onClose={this.handleClose}>
              <Alert severity="success">Add new club complete !!!!!!!</Alert>
            </Snackbar>
          ) : (
            ""
          )}
          {errorAlert === true ? (
            <Snackbar open={this.handleClick} autoHideDuration={6000} onClose={this.handleClose}>
              <Alert severity="error">
                Cannot add new club! Check again pls
              </Alert>
            </Snackbar>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default AddTeam;
