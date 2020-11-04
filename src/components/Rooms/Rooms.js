import React from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import RoomList from "../RoomList/RoomList";

import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="outerContainer">
      <div className="container">
        <div className="header">
          <div className="leftInnerContainer">
            <a href="/">
              <ArrowBackIosIcon className="arrowIcon" />
            </a>
            <h3>Roomssss</h3>
          </div>
        </div>
        <RoomList />
      </div>
    </div>
  );
};

export default Rooms;
