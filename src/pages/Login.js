import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:3002");

export default function Login() {
  const [messag, setmessag] = useState("");
  useEffect(() => {
    socket.on("ola", (message) => {
      setmessag(message);
    });
    socket.emit("emit-test", { msg: "mensageme enviada do cliente" });
  }, []);
  return <div>login {messag}</div>;
}
