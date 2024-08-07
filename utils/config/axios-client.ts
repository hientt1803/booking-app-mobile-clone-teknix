import axios from "axios";
import { getCookie } from "cookies-next";
import queryString from "query-string";
import { TLocalStore } from "../storage/localstorage";

// Get access token
const ISSERVER = typeof window === "undefined";
let accessToken: any;

if (!ISSERVER) {
  accessToken = getCookie(TLocalStore.ACCESS_TOKEN);
}
// const sessionToken = sessionStorage.getItem(TLocalStore.ACCESS_TOKEN);

// if (ISSERVER) {
//   if (accessToken && sessionToken) {
//     accessToken = sessionStorage.getItem(TLocalStore.ACCESS_TOKEN);
//   }
// }

/* Creating a new axios client with the baseURL, headers, and paramsSerializer. */
export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer " + accessToken,
  // },
  headers: {
    "x-rapidapi-key": "09955ffc67mshc0d8c2d698e51bap19c359jsn8cee65389465",
    "x-rapidapi-host": "booking-com.p.rapidapi.com",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

/* Intercepting the response and returning the data. */
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//////////////////////////////////////////////////////////////////////////////////////////////////////

/* Creating a new axios client with the baseURL, headers, and paramsSerializer. */
export const axiosClientFormData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + accessToken,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

/* Intercepting the response and returning the data. */
axiosClientFormData.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
