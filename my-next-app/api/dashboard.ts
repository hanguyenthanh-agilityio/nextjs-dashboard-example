import axios from "axios";

const BASE_URL = "https://66ab592c636a4840d7ca46b4.mockapi.io";

export const getDashboard = async () => {
  const res = await axios.get(`${BASE_URL}/dashboard`);
  return res.data;
};
