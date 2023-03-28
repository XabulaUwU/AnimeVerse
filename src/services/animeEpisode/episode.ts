import { instance } from "../api/axios";

/*
Using the example episode ID of 'spy-x-family-episode-1',
explicitly defining default server for demostrative purposes.
*/
const url = "https://api.consumet.org/anime/gogoanime/watch/";
export const data = async (id: string) => {
  try {
    const { data } = await instance.get(url + id, {
      params: { server: "gogocdn" },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
