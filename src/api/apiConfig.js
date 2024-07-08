import axios from "axios";

export const API = 'https://192.168.9.239/'

const createAxiosLoginInstance = () => {
  const instance = axios.create({
    baseURL: API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'ru',
    },
    withCredentials: true
  });

  return instance;
};

export const axiosRequest = createAxiosLoginInstance();