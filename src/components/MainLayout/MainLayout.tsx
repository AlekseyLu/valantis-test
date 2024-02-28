import { useState } from "react";

import { Content } from "../Content/Content";
import { SideBar } from "../SideBar/SideBar";

import { IField } from "../../types/field";
import { IProlductsDetails } from "../../types/products";

import styles from "../../styles/mainLayout.module.css";

interface IProps {
  isActive: boolean;
  setIsActive: (prev: (arg: boolean) => boolean) => void;
}

export const MainLayout = ({ isActive, setIsActive }: IProps) => {
  const [products, setProducts] = useState<IProlductsDetails[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [offset, setOffset] = useState(10);
  const [field, setField] = useState<IField>({});

  return (
    <main className={styles.mainContainer}>
      <SideBar
        setProducts={setProducts}
        setIsLoad={setIsLoad}
        isLoad={isLoad}
        setIsErr={setIsErr}
        offset={offset}
        setField={setField}
        field={field}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Content
        setOffset={setOffset}
        offset={offset}
        setProducts={setProducts}
        products={products}
        setIsLoad={setIsLoad}
        isLoad={isLoad}
        setIsErr={setIsErr}
        isErr={isErr}
        field={field}
      />
    </main>
  );
};
