import React, { Component } from "react";
import Axios from "axios";
// import { Link } from 'react-router-dom'
import CDropdown from "../../pieces/Dropdown";
import Button from "../../pieces/Button";
import Input from "@material-ui/core/Input";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
// import { Dropdown } from 'antd'

class AddMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doiChuNha: "",
      doiKhach: "",
      stadium: "",
      successAlert: false,
      errorAlert: false,
      filter: {
        clubId: "", //dropdown,
        clubId2: "",
      },
      optionLogos: [{ value: "", text: "Select logo" }],
      optionClubs: [{ value: "", text: "Select club" }],
      optionStadiums: [{ value: "", text: "Select home team stadium" }],
      vongDau: "",
      // soBanDoiNha: '',
      // soBanDoiKhach: ''
      // thoiGian: '',
      // hightLightUrl: ''
    };
    this.handleRound = this.handleRound.bind(this);
    this.setPageConfig = this.setPageConfig.bind(this);
    // this.handleHomeGoals = this.handleHomeGoals.bind(this)
    // this.handleAwayGoals = this.handleAwayGoals.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    // let state = this.state
    this.callOptionClubs();
    this.callOptionStadiums();
    this.callOptionLogos();
  }

  setPageConfig(config) {
    this.setState(config);
  }

  handleRound(e) {
    this.setState({ vongDau: e.target.value });
  }

  // handleHomeGoals(e) {
  //     this.setState({ soBanDoiNha: e.target.value })
  // }

  // handleAwayGoals(e) {
  //     this.setState({ soBanDoiKhach: e.target.value })
  // }
  callOptionLogos() {
    Axios.request({
      url: "http://localhost:1900/api/team",
      method: "GET",
    }).then((res) => {
      let clubs = res.data;
      let optionLogos = [
        { value: "", text: "Select logo" },
        ...clubs.map((club) => {
          return { value: club._id, text: club.logoDoiBong };
        }),
      ];
      this.setState({ optionLogos });
    });
  }

  callOptionClubs() {
    Axios.request({
      url: "http://localhost:1900/api/team",
      method: "GET",
    }).then((res) => {
      let clubs = res.data;
      let optionClubs = [
        { value: "", text: "Select club" },
        ...clubs.map((club) => {
          return { value: club._id, text: club.tenDoiBong };
        }),
      ];
      this.setState({ optionClubs });
    });
  }

  callOptionStadiums() {
    Axios.request({
      url: "http://localhost:1900/api/team",
      method: "GET",
    }).then((res) => {
      let clubs = res.data;
      let optionStadiums = [
        { value: "", text: "Select home team stadium" },
        ...clubs.map((club) => {
          return { value: club._id, text: club.sanNha };
        }),
      ];
      this.setState({ optionStadiums });
    });
  }

  handleClick() {
    let newMatch = {
      vongDau: this.state.vongDau,
      logoDoiChuNha: [{ _id: this.state.filter.clubId }],
      logoDoiKhach: [{ _id: this.state.filter.clubId2 }],
      doiChuNha: [{ _id: this.state.filter.clubId }],
      doiKhach: [{ _id: this.state.filter.clubId2 }],
      stadium: [{ _id: this.state.filter.clubId }],
      // soBanDoiNha: this.state.soBanDoiNha,
      // soBanDoiKhach: this.state.soBanDoiKhach,
      // thoiGian: this.state.thoiGian,
      // hightLightUrl: this.state.hightLightUrl
    };

    Axios.post("http://localhost:1900/api/matches", newMatch)
      .then(() => {
        // alert("Add match success!!!!!!")
        this.setState({ successAlert: true, errorAlert: false });
      })
      .catch(() => {
        // alert("Cannot add match")
        this.setState({ errorAlert: true, successAlert: false });
      });
  }

  handleClose() {
    this.setState({successAlert:false,errorAlert:false})
  }

  render() {
    let {
      filter,
      // optionLogos,
      optionClubs,
      //   optionStadiums
      successAlert,
      errorAlert
    } = this.state;
    // console.log(optionClubs)
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
          <div>Add round</div>
          <Input onChange={this.handleRound}></Input>
        </div>
        <div>
          <div>Add home team</div>
          <CDropdown
            value={filter.clubId}
            options={optionClubs}
            onChange={(value) => {
              this.setPageConfig({ filter: { ...filter, clubId: value } });
            }}
          />
          {/* <CDropdown
                        value={filter.clubId}
                        options={optionLogos}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { ...filter, clubId: value } })
                        }}
                    />
                    <CDropdown
                        value={filter.clubId}
                        options={optionStadiums}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { ...filter, clubId: value } })
                        }}
                    /> */}
        </div>

        <div>
          <div>Add away team</div>
          <CDropdown
            value={filter.clubId2}
            options={optionClubs}
            onChange={(value) => {
              this.setPageConfig({ filter: { ...filter, clubId2: value } });
            }}
          />
          {/* <CDropdown
                        value={filter.clubId2}
                        options={optionLogos}
                        onChange={(value) => {
                            this.setPageConfig({ filter: { ...filter, clubId: value } })
                        }}
                    /> */}
        </div>
        {/* e={this.handleAwayGoals}></Input> */}
        {/* </div> */}
        <div style={{ paddingTop: 40 }}>
          <Button onClick={this.handleClick}>Add fixture</Button>
          {successAlert === true ? (
            <Snackbar open={this.handleClick} autoHideDuration={6000} onClose={this.handleClose}>
              <Alert severity="success">Add new match complete !!!!!!!</Alert>
            </Snackbar>
          ) : (
            ""
          )}
          {errorAlert === true ? (
            <Snackbar open={this.handleClick} autoHideDuration={6000} onClose={this.handleClose}>
              <Alert severity="error">
                Cannot add new match! Check again pls
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

export default AddMatch;
