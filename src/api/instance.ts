import axios from "axios";
import { md5 } from "js-md5";
import useGetDate from "../hooks/useGetDate";

export const axiosInstance = axios.create({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosInstance.interceptors.request.use(async (config: any) => {
  const currentDate = useGetDate();
  const passStamp = process.env.REACT_APP_PASS_API + "_" + currentDate;
  config.headers = {
    "X-Auth": md5(passStamp),
  };

  return config;
});
