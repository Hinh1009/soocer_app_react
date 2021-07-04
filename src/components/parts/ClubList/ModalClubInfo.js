import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: 20,
  },
}));

function ModalClubInfo(props) {
  const { clubId, clubDatas } = props;
  const classes = useStyles();
  console.log("CLUB DATASSS", clubId);
  return (
    <div className={classes.paper}>
      <img
        className="badge-image badge-image--50 js-badge-image"
        src={clubDatas[clubId]?.logoDoiBong}
        style={{ width: "400px", height: "400px" }}
        alt="description"
      ></img>
      <h1 style={{ fontFamily: "monospace", textAlign: "center" }}>
        {clubDatas[clubId]?.tenDoiBong}
      </h1>
      <div>
        <h6
          style={{
            fontFamily: "cursive",
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          "{clubDatas[clubId]?.description}"
        </h6>
        <h6>Năm thành lập: {clubDatas[clubId]?.namThanhLap}</h6>
        <h6>Sân nhà: {clubDatas[clubId]?.sanNha}</h6>
        <h6>HLV hiện tại: {clubDatas[clubId]?.tenHLV}</h6>
      </div>
    </div>
  );
}

export default ModalClubInfo;
