import { useEffect } from "react";

import { Spinner } from "../Spinner/Spinner";
import { ProductsList } from "./ProductsList";
import { NothingData } from "../NothingData/NothingData";

import api from "../../api";

import { IField } from "../../types/field";
import { IProlductsDetails } from "../../types/products";

import styles from "../../styles/content.module.css";

interface IProps {
  setProducts: (arg: IProlductsDetails[]) => void;
  products: IProlductsDetails[];
  isLoad: boolean;
  isErr: boolean;
  setIsLoad: (arg: boolean) => void;
  setIsErr: (arg: boolean) => void;
  setOffset: (arg: (prev: number) => number) => void;
  offset: number;
  field: IField;
}

export const Content = ({
  setProducts,
  products,
  isLoad,
  setIsLoad,
  isErr,
  setIsErr,
  offset,
}: IProps) => {
  useEffect(() => {
    const getProducts = async () => {
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
        getProducts();
      }
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <section className={styles.content}>
      {isLoad ? (
        <Spinner isErr={isErr} />
      ) : (
        <>
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <NothingData />
          )}
        </>
      )}
    </section>
  );
};
