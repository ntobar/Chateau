import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import { addRoom, setRoomsDis } from "../../slices/chat/chatSlice";

const ENDPOINT = "https://react-tobar-chat.herokuapp.com/";

let socket;

const Chat = ({ location }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [color, setColor] = useState("");
  //const ENDPOINT = "https://react-tobar-chat.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    dispatch({
      type: "ADD_ROOM",
      room: room,
      //username: user.displayName
    });

    console.log("in cht.js");

    //dispatch(addRoom(room));

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("rooms", ({ data }) => {
      setRooms(data);
      console.log(`${rooms.length} : rooms length`);
      dispatch(addRoom(data));
      //dispatch(setRoomsDis(data));
      console.log("dispatch worked");
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
