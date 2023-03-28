import { instance } from "../api/axios";

// Using the example ID of "spy-x-family".
const url = "https://api.consumet.org/anime/gogoanime/info/";
export const data = async (id: string) => {
  try {
    const { data } = await instance.get(url + id);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
