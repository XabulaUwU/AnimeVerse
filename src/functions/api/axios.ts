import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.consumet.org/",
  timeout: 5000,
});
