import { useEffect, useState } from "react";

import api from "../../api";

import { IProlductsDetails } from "../../types/products";

import { SearchProducts } from "../SearchProducts/SearchProducts";
import { FiltredItem } from "../Filtred/FiltredItem";

import styles from "../../styles/sideBar.module.css";

type IField = {
  [key: string]: number | string;
};

interface IProps {
  setProducts: (prev: IProlductsDetails[]) => void;
  isLoad: boolean;
  setIsLoad: (arg: boolean) => void;
  setIsErr: (arg: boolean) => void;
  offset: number;
  field: IField;
  setField: (arg: IField) => void;
  isActive: boolean;
  setIsActive: (prev: (arg: boolean) => boolean) => void;
}

export const SideBar = ({
  setProducts,
  isLoad,
  setIsLoad,
  setIsErr,
  field,
  setField,
  isActive,
  setIsActive,
}: IProps) => {
  const [brand, setBrand] = useState<string[]>([]);
  const [priceField, setPriceField] = useState<string[]>([]);

  const fetchFiltredProducts = async () => {
    try {
      setIsLoad(true);
      const {
        data: { result },
      } = await api.products.getFiltredProducts(field);
      const { data } = await api.products.getDetailsProduct(result);
      setProducts(data.result);
      setIsLoad(false);
      setIsErr(false);
      setIsActive((prev) => !prev);
    } catch (error) {
      console.log(error);
      setIsLoad(false);
      setIsErr(true);
      fetchFiltredProducts();
    }
  };

  const clearField = async () => {
    setField({});
    setIsLoad(true);
    try {
      const {
        data: { result },
      } = await api.products.getProducts();
      const { data } = await api.products.getDetailsProduct(result);
      setProducts(data.result);
      setIsLoad(false);
      setIsErr(false);
    } catch (error) {
      console.log(error);
      setIsErr(true);
      setIsLoad(false);
      clearField();
    }
  };
  const getFieldBrand = async () => {
    const { data } = await api.products.getField("brand");
    setBrand(data.result);
  };

  const getFieldPrice = async () => {
    const { data } = await api.products.getField("price");
    setPriceField(data.result.sort((a: number, b: number) => a - b));
  };

  useEffect(() => {
    getFieldBrand();
    getFieldPrice();
  }, []);

  return (
    <aside
      className={
        isActive ? styles.sidebar + " " + styles.active : styles.sidebar
      }
    >
      <>
        <h2>По названию</h2>
        <SearchProducts isLoad={isLoad} setField={setField} field={field} />
      </>
      <FiltredItem
        title="Брэнды"
        arr={brand}
        field={field}
        isLoad={isLoad}
        variant="brand"
        fn={setField}
      />
      <FiltredItem
        title="Цены"
        arr={priceField}
        field={field}
        isLoad={isLoad}
        variant="price"
        fn={setField}
      />

      <div className={styles.footerBtn}>
        <button
          onClick={fetchFiltredProducts}
          disabled={
            isLoad ? true : Object.keys(field).length === 0 ? true : false
          }
          className={styles.btn}
        >
          Показать
        </button>
        <button onClick={clearField} className={styles.btn}>
          Очистить фильтр
        </button>
      </div>
    </aside>
  );
};
