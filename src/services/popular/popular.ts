import { instance } from "../api/axios";
const url = "popular";
export const data = async () => {
  try {
    const { data } = await instance.get(url, { params: { site: "animefire" } });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
