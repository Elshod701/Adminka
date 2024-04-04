import axios, { AxiosInstance } from "axios";
// import { loadState } from "../lib/lib";
import Cookies from "js-cookie";
export const request: AxiosInstance = axios.create({
  baseURL: "http://135.181.108.207",
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // },
});

request.interceptors.request.use(
  (setconfig) => {
    if (setconfig.url !== "/api/admin-login/")
      setconfig.headers["Authorization"] = `Token ${Cookies.get("user")}`;
    return setconfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);
