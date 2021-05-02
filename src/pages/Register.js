import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import handleAsyncRegister from "../store/ducks/APIRegister/actions";
import { useDispatch } from 'react-redux'

export default function Register() {
  const [infos, setInfos] = useState({ name: "", email: "", password: "" });
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("entrou");
    setIsValid(true);
    if (infos.name && infos.email && infos.password) {
      setIsValid(false);
    }
    console.log(infos);
  }, [infos, isValid]);

  const handleChange = ({ target: { name, value } }) => {
    const updatedInfos = { ...infos, [name]: value };
    setInfos(updatedInfos);
  };
  return (
    <div>
      <input placeholder="name" name="name" onChange={handleChange} />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button
        disabled={isValid}
        onClick={() =>
            dispatch(handleAsyncRegister(infos.email, infos.password, infos.name))
        }
      >
        Registrar
      </button>
      <Link to="/">Login</Link>
    </div>
  );
}
