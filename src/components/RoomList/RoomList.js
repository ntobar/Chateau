import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector, useDispatch } from "react-redux";
import Room from "../Room/Room";
import "./RoomList.css";
import { selectRooms, setRoomsDis } from "../../slices/chat/chatSlice";

const RoomList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(selectRooms);
  console.log(`${dispatch(setRoomsDis)} : using dispatch`);
  console.log(`${rooms.length}=listOfRooms`);
  return (
    <ScrollToBottom className="rooms">
      {rooms.map((room, i) => (
        <div key={i}>
          <Room name={room.name} users={room.getUsersInRoom.length} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default RoomList;
