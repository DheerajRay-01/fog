
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CORS_ORIGIN, // backend ka base URL
  withCredentials: true, // cookie bhejne ke liye
});

export default axiosInstance;
