import { useEffect, useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import "./index.css";
const socket = io("http://localhost:5000");

const LoginPage = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  function handleSubmit() {
    console.log(name, room);
    socket.emit("login", { name: name, room: room });
    setShowChat(true);
  }

  return (
    <>
      {showChat ? (
        <Chat />
      ) : (
        <div className="wrapper">
          <div className="form">
            <h2>Enter Details to join Room</h2>
            <label>Enter Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Enter Roomname</label>
            <input
              type="text"
              placeholder="Enter Room Name"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            ></input>
            <button onClick={() => handleSubmit()}>Join</button>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginPage;
