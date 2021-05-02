import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const socket = io("http://localhost:3002");

export default function Login() {
  const [messag, setmessag] = useState("");
  useEffect(() => {
    socket.on("ola", (message) => {
      setmessag(message);
    });
    socket.emit("emit-test", { msg: "mensageme enviada do cliente" });
  }, []);
  return (
    <div>
      <input type="email" placeholder="password" />
      <input type="password" placeholder="password" />
      <button>Fazer login</button>
      <Link to="/register"> Registrar</Link>
    </div>
  );
}
