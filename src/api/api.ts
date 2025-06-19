import { BASE_URL } from "../constants";

export const get = async (): Promise<any> => {
  const res = await fetch(BASE_URL);
  return await res.json();
};
