import { instance } from "../api/axios";

export const url = "watch/url";
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
