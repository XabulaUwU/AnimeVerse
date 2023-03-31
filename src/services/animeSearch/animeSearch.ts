import { instance } from "../api/axios";

const url = "search";
export const data = async (id: string) => {
  try {
    const { data } = await instance.get(url, {
      params: {
        search: id,
        site: "animefire",
      },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
