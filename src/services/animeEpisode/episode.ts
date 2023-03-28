import { instance } from "../api/axios";

/*
Using the example episode ID of 'spy-x-family-episode-1',
explicitly defining default server for demostrative purposes.
*/
const url = "https://api.consumet.org/anime/gogoanime/watch/";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "https://anihdplay.com",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Referer: "https://anihdplay.com",
  },
};
export const data = async (id: string) => {
  try {
    const { data } = await instance.get(url + id, config);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
