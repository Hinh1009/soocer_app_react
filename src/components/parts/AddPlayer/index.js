import React, { Component } from "react";
import Axios from "axios";
import CDropdown from "../../../components/pieces/Dropdown";
// import Input from '../../../components/pieces/input'
import Button from "../../../components/pieces/Button";
import Input from "@material-ui/core/Input";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class AddPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenCauThu: "",
      successAlert: false,
      errorAlert: false,
      soAo: "",
      viTri: "",
      quocTich: "",
      chieuCao: "",
      canNang: "",
      club: "",
      filter: {
        clubId: "",
      },
      optionClubs: [{ value: "", text: "Select club" }],
      avatarUrl: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleNational = this.handleNational.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleAva = this.handleAva.bind(this);
    this.setPageConfig = this.setPageConfig.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.callOptionClubs();
  }

  setPageConfig(config) {
    this.setState(config);
  }

  handleName(e) {
    this.setState({ tenCauThu: e.target.value });
  }

  handleAva(e) {
    this.setState({ avatarUrl: e.target.value });
  }

  handleNumber(e) {
    this.setState({ soAo: e.target.value });
  }

  handlePosition(e) {
    this.setState({ viTri: e.target.value });
  }

  handleNational(e) {
    this.setState({ quocTich: e.target.value });
  }

  handleHeight(e) {
    this.setState({ chieuCao: e.target.value });
  }

  handleWeight(e) {
    this.setState({ canNang: e.target.value });
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

  handleClick() {
    let newPlayer = {
      tenCauThu: this.state.tenCauThu,
      avatarUrl: this.state.avatarUrl,
      soAo: this.state.soAo,
      viTri: this.state.viTri,
      quocTich: this.state.quocTich,
      chieuCao: this.state.chieuCao,
      canNang: this.state.canNang,
      club: [{ _id: this.state.filter.clubId }],
    };

    console.log("Cau thu moi", newPlayer);
    Axios.post("http://localhost:1900/api/players", newPlayer)
      .then(() => {
        this.setState({ successAlert: true, errorAlert: false });
      })
      .catch(() => {
        this.setState({ errorAlert: true, successAlert: false });
      });
  }

  handleClose() {
    this.setState({ successAlert: false, errorAlert: false });
  }

  render() {
    let { filter, optionClubs, successAlert, errorAlert } = this.state;
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
          <div>Add player's name</div>
          <Input onChange={this.handleName} style={{ width: "100%" }}></Input>
        </div>
        <div>
          <div>Add player's avatarUrl</div>
          <Input onChange={this.handleAva} style={{ width: "100%" }}></Input>
        </div>
        <div>
          <div>Add player's number</div>
          <Input onChange={this.handleNumber} style={{ width: "100%" }}></Input>
        </div>
        <div>
          <div>Add player's position(DF/MF/CF)</div>
          <Input
            onChange={this.handlePosition}
            style={{ width: "100%" }}
          ></Input>
        </div>
        <div>
          <div>Add player's national</div>
          <Input
            onChange={this.handleNational}
            style={{ width: "100%" }}
          ></Input>
        </div>
        <div>
          <div>Add player's height(cm)</div>
          <Input onChange={this.handleHeight} style={{ width: "100%" }}></Input>
        </div>
        <div>
          <div>Add player's weight(kg)</div>
          <Input onChange={this.handleWeight} style={{ width: "100%" }}></Input>
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <div>Add player's club</div>

          <CDropdown
            value={filter.clubId}
            options={optionClubs}
            onChange={(value) => {
              this.setPageConfig({ filter: { ...filter, clubId: value } });
            }}
          />
        </div>
        <div style={{ paddingTop: 40 }}>
          <Button onClick={this.handleClick} textSecondary>
            Add new player
          </Button>
          {successAlert === true ? (
            <Snackbar
              open={this.handleClick}
              autoHideDuration={6000}
              onClose={this.handleClose}
            >
              <Alert severity="success">Add complete !!!!!!!</Alert>
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
              <Alert severity="error">
                Cannot add new player! Check again pls
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

export default AddPlayers;
