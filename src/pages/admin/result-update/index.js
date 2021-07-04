import React, { Component } from "react";
import CTitle from "../../../components/pieces/Title";
// import CSpacer from "../../../components/pieces/Spacer";
import Header from "../../../components/parts/Header";
import Footer from "../../../components/parts/Footer";
import Axios from "axios";
import Button from "../../../components/pieces/Button";
import Input from "@material-ui/core/Input";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class UpdateMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchId: "",
      matchInfo: "",
      soBanDoiNha: "",
      soBanDoiKhach: "",
      status: false,
      _id: "",
      successAlert: false,
      errorAlert: false,
      specialErrorAlert:false
    };
    this.handleHomeGoals = this.handleHomeGoals.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickError = this.handleClickError.bind(this)
  }

  componentDidMount() {
    let matchId = new URLSearchParams(window.location.search).get("id");
    this.setState({
      _id: matchId,
    });
    Axios.request({
      url: `http://localhost:1900/api/matches/${matchId}`,
      method: "GET",
    }).then((res) => {
      let item = res.data;
      this.setState({ matchInfo: item });
      // console.log("Thong tin tran dau", item)
    });
  }

  handleHomeGoals = (e) => {
    this.setState({ soBanDoiNha: e.target.value });
    // console.log(soBanDoiNha)
  };

  handleAwayGoals = (e) => {
    this.setState({ soBanDoiKhach: e.target.value });
  };

  handleClick = () => {
    let updateResult = {
      status: true,
      soBanDoiNha: this.state.soBanDoiNha,
      soBanDoiKhach: this.state.soBanDoiKhach,
      _id: this.state._id,
    };
    console.log("update", updateResult);
    Axios.put("http://localhost:1900/api/matches", updateResult)
      .then(() => {
        this.setState({ successAlert: true, errorAlert: false,specialErrorAlert:false });

        // alert("Update result success!!!!")
      })
      .catch(() => {
        // alert("Cannot update team")
        this.setState({ errorAlert: true, successAlert: false,specialErrorAlert:false });
      });
  };

  handleClose() {
    this.setState({ successAlert: false, errorAlert: false,specialErrorAlert:false });
  }

  handleClickError(){
      this.setState({specialErrorAlert:true})
  }

  render() {
    let { soBanDoiNha, soBanDoiKhach, successAlert, errorAlert} = this.state;
    // let { matchInfo } = this.state
    // console.log("match info", matchInfo)
    return (
      // matchInfo ?
      <div>
        <Header />
        <div className="container">
          <CTitle> Let's update this match !!!</CTitle>
          <img
            src={require("../../../assets/img/img.png")}
            alt="description"
            style={{ height: 70 }}
          ></img>
          <div>
            <div>Add home team's goal</div>
            <Input
              onChange={this.handleHomeGoals}
              style={{ width: "100%" }}
            ></Input>
          </div>
          <div>
            <div>Add away team's goal</div>
            <Input
              onChange={this.handleAwayGoals}
              style={{ width: "100%" }}
            ></Input>
          </div>
          <div style={{ paddingTop: 40 }}>
            {soBanDoiNha !== "" && soBanDoiKhach !== "" ? (
              <Button onClick={this.handleClick}> Update </Button>
            ) : (
              <Button disabled> Update </Button>
            )}
            {successAlert === true ? (
              <Snackbar
                open={this.handleClick}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert severity="success">Update complete !!!!!!!</Alert>
              </Snackbar>
            ) : (
              ""
            )}
            {errorAlert === true ? (
              <Snackbar
                open={this.handleClick}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert severity="error">Update failed !!!</Alert>
              </Snackbar>
            ) : (
              ""
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
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

export default UpdateMatch;
