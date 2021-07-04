import React, { useState } from "react";
import { Card } from "antd";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalClubInfo from "./ModalClubInfo";
const { Meta } = Card;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function ClubList(props) {
  const { clubs } = props;
  const clubDatas = clubs.data;
  // console.log("DATA", clubs.data);
  const [openModal, setOpenModal] = useState(false);
  const [clubId, setClubId] = useState();
  const handleClick = (id) => {
    // console.log("Club id", id);
    setClubId(id);
    // console.log(clubs.data?.length);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const classes = useStyles();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "300px 300px 300px",
        // gridTemplateRows: "400px 400px 400px 400px 400px",
        gridGap: "20px 50px",
        // display: "flex",
        justifyContent: "center",
      }}
    >
      {clubs.data?.map((club, id) => (
        <Card
          key={id}
          hoverable="true"
          style={{ borderRadius: "25px" }}
          cover={
            <img
              alt="example"
              src={club.logoDoiBong && club.logoDoiBong}
              style={{
                height: 300,
                maxWidth: 300,
                maxHeight: 300,
              }}
            />
          }
          onClick={() => {
            handleClick(id);
            handleOpen();
          }}
        >
          <Meta title={club.tenDoiBong} style={{ textAlign: "center" }} />
        </Card>
      ))}
      <Modal
        open={openModal}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalClubInfo clubDatas={clubDatas} clubId={clubId} />
      </Modal>
    </div>
  );
}

export default ClubList;
