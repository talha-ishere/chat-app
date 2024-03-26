import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import io from "socket.io-client";
import LoginPage from "./LoginPage";

const socket = io("http://localhost:5000");

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
