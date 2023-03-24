import { instance } from "../api/axios";
const url = "/anime/gogoanime/recent-episodes";
export const data = async () => {
  try {
    const { data } = await instance.get(url, {
      params: { page: 1, type: 1 },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
