import axios from "axios";

const axiosClient = axios.create({ baseURL: "https://api.github.com" });

const getUsersByLogin = async (text) => {
  const response = await axiosClient.get(`/search/users?q=${text}`);
  return response.data.items;
};

export { getUsersByLogin };