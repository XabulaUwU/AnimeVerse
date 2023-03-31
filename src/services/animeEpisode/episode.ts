import { instance } from "../api/axios";

/*
Using the example episode ID of 'spy-x-family-episode-1',
explicitly defining default server for demostrative purposes.
*/
const url = "watch/url";
export const data = async (id: string) => {
  try {
    const { data } = await instance.get(url, {
      params: { site: "animefire", url: id },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
