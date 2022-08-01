import axios from "axios";

const api = axios.create({
  baseURL: "http://34.193.99.6/",
});

export default api;