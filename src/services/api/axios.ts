import axios from "axios";

export const instance = axios.create({
  baseURL: "https://anime-app-back.onrender.com/",
  timeout: 10000,
});
