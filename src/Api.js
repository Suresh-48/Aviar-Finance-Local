import axios from "axios";

// Config
// import { API_URL } from "./config";

const Api = axios.create({
  // baseURL: API_URL,
  baseURL: "",
  // header,
});

export default Api;
