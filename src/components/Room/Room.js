import React from "react";
import "./Room.css";

const Room = ({ name, users }) => {
  return (
    <div className="outerContainer">
      <div className="leftInnerContainer">
        <p className="roomName">{name}</p>
      </div>
      <div className="rightInnerContainer">{users.length};</div>
    </div>
  );
};

export default Room;
