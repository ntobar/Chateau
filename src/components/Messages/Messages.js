import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import { randomHex } from "randomize-hex";

import Message from "./Message/Message";

import "./Messages.css";

var rcolor = randomHex();

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} color={rcolor} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
