import styles from "../../styles/header.module.css";

interface IProps {
  isActive: boolean;
  setIsActive: (prev: (arg: boolean) => boolean) => void;
}

export const Header = ({ isActive, setIsActive }: IProps) => (
  <header className={styles.header}>
    <div>Valantis Test</div>
    <button
      className={isActive ? styles.burger + " " + styles.active : styles.burger}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  </header>
);
