import axios from "axios";

export const API = 'http://192.168.9.239:8800/'

const createAxiosLoginInstance = () => {
  const instance = axios.create({
    baseURL: API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'ru',
    },
    withCredentials: true
  });

  return instance;
};

export const axiosRequest = createAxiosLoginInstance();