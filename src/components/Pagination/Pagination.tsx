import { IProlductsDetails } from "../../types/products";

import styles from "../../styles/pagination.module.css";

interface IProps {
  setPagination: (prev: (arg: number) => number) => void;
  pagination: number;
  uniqValue: IProlductsDetails[][];
}

export const Pagination = ({
  setPagination,
  pagination,
  uniqValue,
}: IProps) => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.btns}>
        {pagination > 2 && (
          <button onClick={() => setPagination(() => 0)} className={styles.btn}>
            В начало
          </button>
        )}
        <button
          onClick={() => setPagination((prev) => prev - 1)}
          disabled={pagination <= 0}
          className={styles.btn}
        >
          Назад
        </button>
      </div>
      <div className={styles.pagesContainer}>
        <span>{pagination + 1}</span>
        <span>/</span>
        <span>{uniqValue.length}</span>
      </div>
      <button
        onClick={() => setPagination((prev) => prev + 1)}
        disabled={pagination >= uniqValue.length - 1}
        className={styles.btn}
      >
        Дальше
      </button>
    </div>
  );
};
