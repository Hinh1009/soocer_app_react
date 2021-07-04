import React, { useState, useEffect } from "react";
import CTitle from "../../components/pieces/Title";
import CSpacer from "../../components/pieces/Spacer";
import Header from "../../components/parts/Header";
import Footer from "../../components/parts/Footer";
import axios from "axios";
import ClubList from "../../components/parts/ClubList";

function Club() {
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    axios
      .request({
        url: "http://localhost:1900/api/team",
        method: "GET",
      })
      .then((res) => {
        let data = res.data;
        console.log("DATA", data);
        setClubList({ data });
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <CTitle>Clubs</CTitle>
        <CSpacer />
        <ClubList clubs={clubList} />
      </div>
      <Footer />
    </div>
  );
}

export default Club;
