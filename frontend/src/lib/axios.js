import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:8080/api"
  : import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
