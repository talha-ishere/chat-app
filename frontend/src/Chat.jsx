import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./index.css";
import { MdOutlineSearch } from "react-icons/md";
import Users from "./Users";
import UserChats from "./UserChats";

const socket = io("http://localhost:4000");
function Chat() {
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    socket.on("user-info", (data) => {
      setMyInfo(data);
      console.log(data);
    });
    socket.on("active-clients", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className="main">
        <Users />
        <UserChats />
      </div>
    </>
  );
}
export default Chat;
