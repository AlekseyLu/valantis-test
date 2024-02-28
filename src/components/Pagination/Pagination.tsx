import styles from "../../styles/pagination.module.css";

import { IProlductsDetails } from "../../types/products";

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
        <button
          onClick={() => setPagination((prev) => prev - 10)}
          disabled={pagination - 10 <= 0}
          className={styles.btn + " " + styles.btnSmall}
        >
          х10
        </button>
        <button
          onClick={() => setPagination((prev) => prev - 1)}
          disabled={pagination <= 0}
          className={styles.btn}
        >
          {"<"}
        </button>
      </div>
      <div className={styles.pagesContainer}>
        <span>{pagination + 1}</span>
        <span>/</span>
        <span>{uniqValue.length}</span>
      </div>
      <div className={styles.btns}>
        <button
          onClick={() => setPagination((prev) => prev + 1)}
          disabled={pagination >= uniqValue.length - 1}
          className={styles.btn}
        >
          {">"}
        </button>
        <button
          onClick={() => setPagination((prev) => prev + 10)}
          disabled={pagination >= uniqValue.length - 10}
          className={styles.btn + " " + styles.btnSmall}
        >
          х10
        </button>
      </div>
    </div>
  );
};
