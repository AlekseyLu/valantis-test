import styles from "../../styles/spinner.module.css";

interface IProps {
  isErr: boolean;
}

export const Spinner = ({ isErr }: IProps) => {
  return (
    <div className={styles.spinner}>
      {isErr && (
        <h2 className={styles.spinnerErr}>
          Видимо что-то пошло не так, сейчас починим
        </h2>
      )}
      <div className={styles.spinContainer} />
    </div>
  );
};
