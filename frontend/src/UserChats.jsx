import "./index.css";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";

function UserChats() {
  return (
    <div className="user-chats">
      <div className="head">
        <h1>JavaSc Chat Room</h1>
        <div className="user-chats-line"></div>
      </div>
      <div className="send-message">
        <input type="text" placeholder="Type your message"></input>
        <BsEmojiSmile size={20} />
        <GrAttachment size={20} />
        <button className="send-button">
          <VscSend
            size={20}
            color="white
          "
          />
        </button>
      </div>
    </div>
  );
}
export default UserChats;
