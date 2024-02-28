import { ChangeEvent, useEffect } from "react";

import styles from "../../styles/searchProducts.module.css";

type IField = {
  [key: string]: number | string;
};

interface IProps {
  isLoad: boolean;
  setField: (arg: IField) => void;
  field: IField;
}

export const SearchProducts = ({ isLoad, setField, field }: IProps) => {
  const searchParams = (e: ChangeEvent<HTMLInputElement>) => {
    setField({ product: e.target.value });
  };

  useEffect(() => {
    if (field.product === "") return setField({});
  }, [field, setField]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={field.product ?? ""}
        onChange={searchParams}
        disabled={isLoad}
        className={styles.searchInp}
      />
      <button onClick={() => setField({})} disabled={isLoad}>
        X
      </button>
    </div>
  );
};
