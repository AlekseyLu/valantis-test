import { axiosInstance } from "../instance";

const BASE_URL = "https://api.valantis.store:41000/";

// Айди товаров
export const getProducts = () =>
  axiosInstance.post(BASE_URL, {
    action: "get_ids",
    params: { limit: 600 },
  });

// Подробная информация по айди
export const getDetailsProduct = (idsList: string[]) =>
  axiosInstance.post(BASE_URL, {
    action: "get_items",
    params: { ids: idsList },
  });

// Фильтрация
export const getFiltredProducts = (field: { [key: string]: number | string }) =>
  axiosInstance.post(BASE_URL, {
    action: "filter",
    params: field,
  });

// Фильтры
export const getField = (param: string) =>
  axiosInstance.post(BASE_URL, {
    action: "get_fields",
    params: { field: param, limit: 20 },
  });
