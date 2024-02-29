import axios from "axios";
import { md5 } from "js-md5";

import useGetDate from "../hooks/useGetDate";

export const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(async (config: any) => {
  const currentDate = useGetDate();
  const passStamp = "Valantis_" + currentDate;
  config.headers = {
    "X-Auth": md5(passStamp),
  };

  return config;
});
