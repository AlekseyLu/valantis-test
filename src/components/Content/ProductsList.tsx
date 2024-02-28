import { useState } from "react";

import { Product } from "./Product";
import { Pagination } from "../Pagination/Pagination";

import { IProlductsDetails } from "../../types/products";

import { useUniqueValue } from "../../hooks/useUniqueValue";

import styles from "../../styles/productsList.module.css";

interface IProps {
  products: IProlductsDetails[];
}

export const ProductsList = ({ products }: IProps) => {
  const uniqValue = useUniqueValue(products);
  const [pagination, setPagination] = useState(0);

  return (
    <div className={styles.productContainer}>
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        uniqValue={uniqValue}
      />
      <ul className={styles.list}>
        {uniqValue[pagination]?.map((product: IProlductsDetails) => (
          <Product {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
