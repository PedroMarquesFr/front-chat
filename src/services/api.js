import axios from "axios";

export const userApi = axios.create({
  baseURL: process.env.endPoint
    ? process.env.REACT_APP_USER_API
    : "http://localhost:3001",
});

export const socketApi = axios.create({
    baseURL: process.env.endPoint
      ? process.env.REACT_APP_SOCKET_API
      : "http://localhost:3002",
  });