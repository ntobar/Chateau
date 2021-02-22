import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";

import "./Join.css";

// <Link
//   onClick={(event) => (!name ? event.preventDefault() : null)}
//   to={"/rooms"}
// >
//   <button className="button marg" type="submit">
//     All Rooms
//   </button>
// </Link>

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chateau</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput marg"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button marg" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
