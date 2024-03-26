import { MdOutlineSearch } from "react-icons/md";

function Users() {
  return (
    <div className="users">
      <h2>Chat Application</h2>
      <div className="searchbar">
        <MdOutlineSearch size={25} />

        <input type="text" placeholder="Search for a user"></input>
      </div>
      {/* <div className="line"></div> */}
      <div className="contact-card">
        <div className="user-image">
          <img src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=gu0HLGdqJNF5Rg&pid=ImgRaw&r=0"></img>
        </div>
        <div className="user-info">
          <div className="user-name">Ali Hassan</div>
          <div>Hello from Ali Hassan</div>
        </div>
      </div>
      <div className="contact-card">
        <div className="user-image">
          <img src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=gu0HLGdqJNF5Rg&pid=ImgRaw&r=0"></img>
        </div>
        <div className="user-info">
          <div className="user-name">Ali Hassan</div>
          <div>Hello from Ali Hassan</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
